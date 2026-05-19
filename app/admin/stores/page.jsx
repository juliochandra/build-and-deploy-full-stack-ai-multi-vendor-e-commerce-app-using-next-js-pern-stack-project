"use client";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { storesDummyData } from "@/assets/assets";
import StoreInfo from "@/components/admin/StoreInfo";
import Loading from "@/components/Loading";

export default function AdminStores() {
  const [stores, setStores] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchStores = async () => {
    setStores(storesDummyData);
    setLoading(false);
  };

  const toggleIsActive = async (_storeId) => {
    // Logic to toggle the status of a store
  };

  useEffect(() => {
    fetchStores();
  }, [fetchStores]);

  return !loading ? (
    <div className="mb-28 text-slate-500">
      <h1 className="text-2xl">
        Live <span className="font-medium text-slate-800">Stores</span>
      </h1>

      {stores.length ? (
        <div className="mt-4 flex flex-col gap-4">
          {stores.map((store) => (
            <div
              key={store.id}
              className="flex max-w-4xl gap-4 rounded-lg border border-slate-200 bg-white p-6 shadow-sm max-md:flex-col md:items-end"
            >
              {/* Store Info */}
              <StoreInfo store={store} />

              {/* Actions */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <p>Active</p>
                <label className="relative inline-flex cursor-pointer items-center text-gray-900">
                  <input
                    type="checkbox"
                    className="peer sr-only"
                    onChange={() =>
                      toast.promise(toggleIsActive(store.id), {
                        loading: "Updating data...",
                      })
                    }
                    checked={store.isActive}
                  />
                  <div className="peer h-5 w-9 rounded-full bg-slate-300 transition-colors duration-200 peer-checked:bg-green-600"></div>
                  <span className="dot absolute top-1 left-1 h-3 w-3 rounded-full bg-white transition-transform duration-200 ease-in-out peer-checked:translate-x-4"></span>
                </label>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex h-80 items-center justify-center">
          <h1 className="font-medium text-3xl text-slate-400">
            No stores Available
          </h1>
        </div>
      )}
    </div>
  ) : (
    <Loading />
  );
}
