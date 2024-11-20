import React from "react";
import PlaceCard from "../Components/PlaceCard";

interface Place {
  title: string;
  description: string;
  image: string;
  price: string;
}

function Index() {
  const places: Place[] = [
    {
      title: "Cozy Apartment in NYC",
      description: "A modern apartment in the heart of New York City.",
      image:
        "https://a0.muscache.com/im/ml/photo_enhancement/pictures/miso/Hosting-791108703101097648/original/888aee36-9de2-429b-8c30-82617d976008.jpeg?im_w=720",
      price: "29,100",
    },
    {
      title: "Beach House in Malibu",
      description: "Relax by the ocean in this beautiful beach house.",
      image:
        "https://a0.muscache.com/im/pictures/fcaba021-2b0f-4794-9d08-675e3921fc96.jpg?im_w=720",
      price: "24,000",
    },
    {
      title: "Cabin in the Woods",
      description: "Experience tranquility in this rustic cabin.",
      image:
        "https://a0.muscache.com/im/pictures/miso/Hosting-604855093626546308/original/e87a6018-10e5-488b-a7f7-cddca3f63baf.jpeg?im_w=720",
      price: "5,100",
    },
    {
      title: "Luxury Villa in Bali",
      description: "A luxurious retreat with a stunning view.",
      image:
        "https://a0.muscache.com/im/pictures/8446ea5b-eae8-4f1e-8090-9ba3d1705c86.jpg?im_w=720",
      price: "12, 000",
    },
    {
      title: "Cozy Apartment in NYC",
      description: "A modern apartment in the heart of New York City.",
      image:
        "https://a0.muscache.com/im/ml/photo_enhancement/pictures/miso/Hosting-791108703101097648/original/888aee36-9de2-429b-8c30-82617d976008.jpeg?im_w=720",
      price: "29,100",
    },
    {
      title: "Beach House in Malibu",
      description: "Relax by the ocean in this beautiful beach house.",
      image:
        "https://a0.muscache.com/im/pictures/fcaba021-2b0f-4794-9d08-675e3921fc96.jpg?im_w=720",
      price: "24,000",
    },
    {
      title: "Cabin in the Woods",
      description: "Experience tranquility in this rustic cabin.",
      image:
        "https://a0.muscache.com/im/pictures/miso/Hosting-604855093626546308/original/e87a6018-10e5-488b-a7f7-cddca3f63baf.jpeg?im_w=720",
      price: "5,100",
    },
    {
      title: "Luxury Villa in Bali",
      description: "A luxurious retreat with a stunning view.",
      image:
        "https://a0.muscache.com/im/pictures/8446ea5b-eae8-4f1e-8090-9ba3d1705c86.jpg?im_w=720",
      price: "12, 000",
    },
    // Add more places as needed (total 16 for a 4x4 grid)
  ];

  return (
    <div className="grid grid-cols-4 gap-6 m-8 h-full">
      {places.map((place, index) => (
        <PlaceCard key={index} place={place} />
      ))}
    </div>
  );
}

export default Index;
