import Image from "next/image";
import { useState } from "react";

interface PriceFilterProps {
  onChange: (filters: { rentalPrice?: string }) => void;
}

export default function PriceFilter({ onChange }: PriceFilterProps) {
  const [selectedPrice, setSelectedPrice] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const prices = ["30", "40", "50", "60", "70", "80"];

  const handleSelect = (price: string) => {
    setSelectedPrice(price);
    onChange({ rentalPrice: price });
    setIsOpen(false);
  };

  return (
    <div className="filterWrapper">
      <label className="filterLabel">Price / 1 hour</label>

      <div
        className="filterField"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>
          {selectedPrice ? `To $${selectedPrice}` : "Choose a price"}
        </span>

        <Image
          className="filterIcon"
          src={isOpen ? "/filters/above.svg" : "/filters/down.svg"}
          alt=""
          width={16}
          height={16}
        />
      </div>

      {isOpen && (
        <ul className="dropdown">
          {prices.map((price) => (
            <li key={price} onClick={() => handleSelect(price)}>
              To ${price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}