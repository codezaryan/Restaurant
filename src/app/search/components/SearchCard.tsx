import RestaurantPrice from "@/app/components/Price";
import Stars from "@/app/components/Stars";
import calcuateReviewAvarage from "@/utils/calcuateReviewAvarage";
import { Location, PRICE, Region, Review } from "@prisma/client";
import Link from "next/link";

interface restaurantProps {
  location: Location;
  id: number;
  name: string;
  main_image: string;
  slug: string;
  price: PRICE;
  region: Region;
  reviews: Review[];
}

export default function SearchCard({
  restaurant,
}: {
  restaurant: restaurantProps;
}) {
  const renderReview = () => {
    const rating = calcuateReviewAvarage(restaurant.reviews);
    if (rating > 4) return "Awesome";
    else if (rating <= 4 && rating > 3) return "Good";
    else if (rating <= 3 && rating > 1) return "Average";
    else return "";
  };

  return (
    <div className="border-b flex pb-5">
      <img src={restaurant.main_image} alt="" className="w-44 rounded" />
      <div className="pl-5">
        <h2 className="text-3xl">{restaurant.name}</h2>
        <div className="flex items-start">
          <Stars reviews={restaurant.reviews} />
          <p className="ml-2 text-sm">{renderReview()}</p>
        </div>
        <div className="mb-9">
          <div className="font-light flex text-reg">
            <RestaurantPrice price={restaurant.price} />
            <p className="mr-4">{restaurant.region.name}</p>
            <p className="mr-4">{restaurant.location.name}</p>
          </div>
        </div>
        <div className="text-red-600">
          <Link href={`/restaurant/${restaurant.slug}`}>
            View more information
          </Link>
        </div>
      </div>
    </div>
  );
}
