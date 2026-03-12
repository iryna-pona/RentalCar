import { useState } from "react";

interface PriceFilterProps {
  onChange: (filters: { rentalPrice?: string }) => void;
}

export default function PriceFilter({ onChange }: PriceFilterProps) {
    const [selectedPrice, setSelectedPrice] = useState<string>("");

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
      const value = event.target.value;
      setSelectedPrice(value);
      onChange({ rentalPrice: value });
    };

    return (
      <select value={selectedPrice} onChange={handleChange}>
        <option value="">Choose a price</option>
        <option value="30">To $30</option>
        <option value="40">To $40</option>
        <option value="50">To $50</option>
        <option value="60">To $60</option>
        <option value="70">To $70</option>
        <option value="80">To $80</option>
      </select>
    );
}