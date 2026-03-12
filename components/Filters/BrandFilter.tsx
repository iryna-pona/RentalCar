import { useState, useEffect } from "react";
import { fetchBrands } from "@/app/api/cars";

interface BrandFilterProps {
  onChange: (filters: { brand?: string }) => void;
}

export default function BrandFilter({ onChange }: BrandFilterProps) {
  const [brands, setBrands] = useState<string[]>([]);
  const [selectedBrand, setSelectedBrand] = useState<string>("");

  useEffect(() => {
    const loadBrands = async () => {
      const data = await fetchBrands();
      setBrands(data);
    };

    loadBrands();
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
  const value = event.target.value;
  setSelectedBrand(value);
  onChange({ brand: value });
};

  return (
    <select value={selectedBrand} onChange={handleChange}>
      <option value="">Choose a brand</option>
      {brands.map((brand) => (
        <option key={brand} value={brand}>
          {brand}
        </option>
      ))}
    </select>
  );
}