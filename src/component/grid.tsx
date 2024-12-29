import React from "react";
import CarCard from "./carCard";
const cards = [
  { name: "Motorcycle", image: "/moto.svg" },
  { name: "Personal Cyber", image: "/house.svg" },
  { name: "Luxury Watch", image: "/watch.svg" },
  { name: "Jewellery", image: "/jewel.svg" },
  { name: "Home", image: "/house.svg" },
  { name: "Handbag", image: "/bag.svg" },
  { name: "Pet", image: "/pet.svg" },
  { name: "Personal Accident", image: "/acc.svg" },
  { name: "Travel", image: "/travel.svg" },
  { name: "Health and Medical", image: "/heart.svg" },
  { name: "Life ", image: "/life.svg" },
];

function Grid() {
  const firstGroupCount = 5;

  const firstGroup = cards.slice(0, firstGroupCount);
  const secondGroup = cards.slice(firstGroupCount);

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-5">
      {firstGroup.map((card, index) => (
        <CarCard key={`first-${index}`} name={card.name} image={card.image} />
      ))}
      {secondGroup.map((card, index) => (
        <CarCard key={`second-${index}`} name={card.name} image={card.image} />
      ))}
    </div>
  );
}
export default Grid;
