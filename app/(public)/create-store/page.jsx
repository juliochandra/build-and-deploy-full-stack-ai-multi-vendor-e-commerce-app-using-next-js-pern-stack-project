"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { assets } from "@/assets/assets";
import Loading from "@/components/Loading";

export default function CreateStore() {
  const [alreadySubmitted, _setAlreadySubmitted] = useState(false);
  const [status, _setStatus] = useState("");
  const [loading, setLoading] = useState(true);
  const [message, _setMessage] = useState("");

  const [storeInfo, setStoreInfo] = useState({
    name: "",
    username: "",
    description: "",
    email: "",
    contact: "",
    address: "",
    image: "",
  });

  const onChangeHandler = (e) => {
    setStoreInfo({ ...storeInfo, [e.target.name]: e.target.value });
  };

  const fetchSellerStatus = async () => {
    // Logic to check if the store is already submitted

    setLoading(false);
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    // Logic to submit the store details
  };

  useEffect(() => {
    fetchSellerStatus();
  }, [fetchSellerStatus]);

  return !loading ? (
    !alreadySubmitted ? (
      <div className="mx-6 my-16 min-h-[70vh]">
        <form
          onSubmit={(e) =>
            toast.promise(onSubmitHandler(e), { loading: "Submitting data..." })
          }
          className="mx-auto flex max-w-7xl flex-col items-start gap-3 text-slate-500"
        >
          {/* Title */}
          <div>
            <h1 className="text-3xl">
              Add Your <span className="font-medium text-slate-800">Store</span>
            </h1>
            <p className="max-w-lg">
              To become a seller on GoCart, submit your store details for review.
              Your store will be activated after admin verification.
            </p>
          </div>

          <label className="mt-10 cursor-pointer">
            Store Logo
            <Image
              src={
                storeInfo.image
                  ? URL.createObjectURL(storeInfo.image)
                  : assets.upload_area
              }
              className="mt-2 h-16 w-auto rounded-lg"
              alt=""
              width={150}
              height={100}
            />
            <input
              type="file"
              accept="image/*"
              onChange={(e) =>
                setStoreInfo({ ...storeInfo, image: e.target.files[0] })
              }
              hidden
            />
          </label>

          <p>Username</p>
          <input
            name="username"
            onChange={onChangeHandler}
            value={storeInfo.username}
            type="text"
            placeholder="Enter your store username"
            className="w-full max-w-lg rounded border border-slate-300 p-2 outline-slate-400"
          />

          <p>Name</p>
          <input
            name="name"
            onChange={onChangeHandler}
            value={storeInfo.name}
            type="text"
            placeholder="Enter your store name"
            className="w-full max-w-lg rounded border border-slate-300 p-2 outline-slate-400"
          />

          <p>Description</p>
          <textarea
            name="description"
            onChange={onChangeHandler}
            value={storeInfo.description}
            rows={5}
            placeholder="Enter your store description"
            className="w-full max-w-lg resize-none rounded border border-slate-300 p-2 outline-slate-400"
          />

          <p>Email</p>
          <input
            name="email"
            onChange={onChangeHandler}
            value={storeInfo.email}
            type="email"
            placeholder="Enter your store email"
            className="w-full max-w-lg rounded border border-slate-300 p-2 outline-slate-400"
          />

          <p>Contact Number</p>
          <input
            name="contact"
            onChange={onChangeHandler}
            value={storeInfo.contact}
            type="text"
            placeholder="Enter your store contact number"
            className="w-full max-w-lg rounded border border-slate-300 p-2 outline-slate-400"
          />

          <p>Address</p>
          <textarea
            name="address"
            onChange={onChangeHandler}
            value={storeInfo.address}
            rows={5}
            placeholder="Enter your store address"
            className="w-full max-w-lg resize-none rounded border border-slate-300 p-2 outline-slate-400"
          />

          <button className="mt-10 mb-40 rounded bg-slate-800 px-12 py-2 text-white transition hover:bg-slate-900 active:scale-95">
            Submit
          </button>
        </form>
      </div>
    ) : (
      <div className="flex min-h-[80vh] flex-col items-center justify-center">
        <p className="mx-5 max-w-2xl text-center font-semibold text-slate-500 sm:text-2xl lg:text-3xl">
          {message}
        </p>
        {status === "approved" && (
          <p className="mt-5 text-slate-400">
            redirecting to dashboard in{" "}
            <span className="font-semibold">5 seconds</span>
          </p>
        )}
      </div>
    )
  ) : (
    <Loading />
  );
}
