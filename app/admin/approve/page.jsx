"use client";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { storesDummyData } from "@/assets/assets";
import StoreInfo from "@/components/admin/StoreInfo";
import Loading from "@/components/Loading";

export default function AdminApprove() {
  const [stores, setStores] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchStores = async () => {
    setStores(storesDummyData);
    setLoading(false);
  };

  const handleApprove = async ({ storeId, status }) => {
    // Logic to approve a store
  };

  useEffect(() => {
    fetchStores();
  }, [fetchStores]);

  return !loading ? (
    <div className="mb-28 text-slate-500">
      <h1 className="text-2xl">
        Approve <span className="font-medium text-slate-800">Stores</span>
      </h1>

      {stores.length ? (
        <div className="mt-4 flex flex-col gap-4">
          {stores.map((store) => (
            <div
              key={store.id}
              className="flex max-w-4xl gap-4 rounded-lg border bg-white p-6 shadow-sm max-md:flex-col md:items-end"
            >
              {/* Store Info */}
              <StoreInfo store={store} />

              {/* Actions */}
              <div className="flex flex-wrap gap-3 pt-2">
                <button
                  onClick={() =>
                    toast.promise(
                      handleApprove({ storeId: store.id, status: "approved" }),
                      { loading: "approving" },
                    )
                  }
                  className="rounded bg-green-600 px-4 py-2 text-sm text-white hover:bg-green-700"
                >
                  Approve
                </button>
                <button
                  onClick={() =>
                    toast.promise(
                      handleApprove({ storeId: store.id, status: "rejected" }),
                      { loading: "rejecting" },
                    )
                  }
                  className="rounded bg-slate-500 px-4 py-2 text-sm text-white hover:bg-slate-600"
                >
                  Reject
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex h-80 items-center justify-center">
          <h1 className="font-medium text-3xl text-slate-400">
            No Application Pending
          </h1>
        </div>
      )}
    </div>
  ) : (
    <Loading />
  );
}
