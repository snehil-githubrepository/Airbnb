import React from "react";

function PlaceCard({ place }) {
  return (
    <div className="bg-white rounded-lg cursor-pointer transition-shadow overflow-hidden">
      <img
        src={place.image}
        alt={place.title}
        className="w-full h-60 object-cover rounded-lg"
      />
      <div className="py-2 px-0">
        <h3 className="text-lg font-bold">{place.title}</h3>
        <p className="text-sm text-gray-600 mt-2">{place.description}</p>
        <p className="font-semibold mt-2">
          ₹{place.price}
          <span className="font-normal"> night</span>
        </p>
      </div>
    </div>
  );
}

export default PlaceCard;
