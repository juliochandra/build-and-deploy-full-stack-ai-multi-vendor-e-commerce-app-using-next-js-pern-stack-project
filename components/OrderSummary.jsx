import { PlusIcon, SquarePenIcon, XIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import AddressModal from "./AddressModal";

const OrderSummary = ({ totalPrice, items }) => {
  const currency = process.env.NEXT_PUBLIC_CURRENCY_SYMBOL || "$";

  const router = useRouter();

  const addressList = useSelector((state) => state.address.list);

  const [paymentMethod, setPaymentMethod] = useState("COD");
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [showAddressModal, setShowAddressModal] = useState(false);
  const [couponCodeInput, setCouponCodeInput] = useState("");
  const [coupon, setCoupon] = useState("");

  const handleCouponCode = async (event) => {
    event.preventDefault();
  };

  const handlePlaceOrder = async (e) => {
    e.preventDefault();

    router.push("/orders");
  };

  return (
    <div className="w-full max-w-lg rounded-xl border border-slate-200 bg-slate-50/30 p-7 text-slate-500 text-sm lg:max-w-[340px]">
      <h2 className="font-medium text-slate-600 text-xl">Payment Summary</h2>
      <p className="my-4 text-slate-400 text-xs">Payment Method</p>
      <div className="flex items-center gap-2">
        <input
          type="radio"
          id="COD"
          onChange={() => setPaymentMethod("COD")}
          checked={paymentMethod === "COD"}
          className="accent-gray-500"
        />
        <label htmlFor="COD" className="cursor-pointer">
          COD
        </label>
      </div>
      <div className="mt-1 flex items-center gap-2">
        <input
          type="radio"
          id="STRIPE"
          name="payment"
          onChange={() => setPaymentMethod("STRIPE")}
          checked={paymentMethod === "STRIPE"}
          className="accent-gray-500"
        />
        <label htmlFor="STRIPE" className="cursor-pointer">
          Stripe Payment
        </label>
      </div>
      <div className="my-4 border-slate-200 border-y py-4 text-slate-400">
        <p>Address</p>
        {selectedAddress ? (
          <div className="flex items-center gap-2">
            <p>
              {selectedAddress.name}, {selectedAddress.city}, {selectedAddress.state}
              , {selectedAddress.zip}
            </p>
            <SquarePenIcon
              onClick={() => setSelectedAddress(null)}
              className="cursor-pointer"
              size={18}
            />
          </div>
        ) : (
          <div>
            {addressList.length > 0 && (
              <select
                className="my-3 w-full rounded border border-slate-400 p-2 outline-none"
                onChange={(e) => setSelectedAddress(addressList[e.target.value])}
              >
                <option value="">Select Address</option>
                {addressList.map((address, index) => (
                  <option key={index} value={index}>
                    {address.name}, {address.city}, {address.state}, {address.zip}
                  </option>
                ))}
              </select>
            )}
            <button
              className="mt-1 flex items-center gap-1 text-slate-600"
              onClick={() => setShowAddressModal(true)}
            >
              Add Address <PlusIcon size={18} />
            </button>
          </div>
        )}
      </div>
      <div className="border-slate-200 border-b pb-4">
        <div className="flex justify-between">
          <div className="flex flex-col gap-1 text-slate-400">
            <p>Subtotal:</p>
            <p>Shipping:</p>
            {coupon && <p>Coupon:</p>}
          </div>
          <div className="flex flex-col gap-1 text-right font-medium">
            <p>
              {currency}
              {totalPrice.toLocaleString()}
            </p>
            <p>Free</p>
            {coupon && (
              <p>{`-${currency}${((coupon.discount / 100) * totalPrice).toFixed(2)}`}</p>
            )}
          </div>
        </div>
        {!coupon ? (
          <form
            onSubmit={(e) =>
              toast.promise(handleCouponCode(e), { loading: "Checking Coupon..." })
            }
            className="mt-3 flex justify-center gap-3"
          >
            <input
              onChange={(e) => setCouponCodeInput(e.target.value)}
              value={couponCodeInput}
              type="text"
              placeholder="Coupon Code"
              className="w-full rounded border border-slate-400 p-1.5 outline-none"
            />
            <button className="rounded bg-slate-600 px-3 text-white transition-all hover:bg-slate-800 active:scale-95">
              Apply
            </button>
          </form>
        ) : (
          <div className="mt-2 flex w-full items-center justify-center gap-2 text-xs">
            <p>
              Code:{" "}
              <span className="ml-1 font-semibold">{coupon.code.toUpperCase()}</span>
            </p>
            <p>{coupon.description}</p>
            <XIcon
              size={18}
              onClick={() => setCoupon("")}
              className="cursor-pointer transition hover:text-red-700"
            />
          </div>
        )}
      </div>
      <div className="flex justify-between py-4">
        <p>Total:</p>
        <p className="text-right font-medium">
          {currency}
          {coupon
            ? (totalPrice - (coupon.discount / 100) * totalPrice).toFixed(2)
            : totalPrice.toLocaleString()}
        </p>
      </div>
      <button
        onClick={(e) =>
          toast.promise(handlePlaceOrder(e), { loading: "placing Order..." })
        }
        className="w-full rounded bg-slate-700 py-2.5 text-white transition-all hover:bg-slate-900 active:scale-95"
      >
        Place Order
      </button>

      {showAddressModal && (
        <AddressModal setShowAddressModal={setShowAddressModal} />
      )}
    </div>
  );
};

export default OrderSummary;
