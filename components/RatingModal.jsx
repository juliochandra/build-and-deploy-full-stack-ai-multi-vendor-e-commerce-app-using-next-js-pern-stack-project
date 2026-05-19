"use client";

import { Star, XIcon } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";

const RatingModal = ({ ratingModal, setRatingModal }) => {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");

  const handleSubmit = async () => {
    if (rating < 0 || rating > 5) {
      return toast("Please select a rating");
    }
    if (review.length < 5) {
      return toast("write a short review");
    }

    setRatingModal(null);
  };

  return (
    <div className="fixed inset-0 z-120 flex items-center justify-center bg-black/10">
      <div className="relative w-96 rounded-lg bg-white p-8 shadow-lg">
        <button
          onClick={() => setRatingModal(null)}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
        >
          <XIcon size={20} />
        </button>
        <h2 className="mb-4 font-medium text-slate-600 text-xl">Rate Product</h2>
        <div className="mb-4 flex items-center justify-center">
          {Array.from({ length: 5 }, (_, i) => (
            <Star
              key={i}
              className={`size-8 cursor-pointer ${rating > i ? "fill-current text-green-400" : "text-gray-300"}`}
              onClick={() => setRating(i + 1)}
            />
          ))}
        </div>
        <textarea
          className="mb-4 w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-green-400"
          placeholder="Write your review (optional)"
          rows="4"
          value={review}
          onChange={(e) => setReview(e.target.value)}
        ></textarea>
        <button
          onClick={(_e) =>
            toast.promise(handleSubmit(), { loading: "Submitting..." })
          }
          className="w-full rounded-md bg-green-500 py-2 text-white transition hover:bg-green-600"
        >
          Submit Rating
        </button>
      </div>
    </div>
  );
};

export default RatingModal;
