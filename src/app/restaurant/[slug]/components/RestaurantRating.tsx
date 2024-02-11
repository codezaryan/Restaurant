import calcuateReviewAvarage from "@/utils/calcuateReviewAvarage";
import { Review } from "@prisma/client";
import React from "react";

export default function RestaurantRating({ reviews }: { reviews: Review[] }) {
  return (
    <div className="flex items-end">
      <div className="ratings mt-2 flex items-center">
        <p>*****</p>
        <p className="text-reg ml-3">{calcuateReviewAvarage(reviews)}</p>
      </div>
      <div>
        <p className="text-reg ml-4">
          {reviews.length} Review{reviews.length > 1 ? "s" : ""}
        </p>
      </div>
    </div>
  );
}
