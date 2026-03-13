import Image from "next/image";
import { useState, useEffect } from "react";
import { fetchBrands } from "@/app/api/cars";

interface BrandFilterProps {
  onChange: (filters: { brand?: string }) => void;
}

export default function BrandFilter({ onChange }: BrandFilterProps) {
  const [brands, setBrands] = useState<string[]>([]);
  const [selectedBrand, setSelectedBrand] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const loadBrands = async () => {
      const data = await fetchBrands();
      setBrands(data);
    };

    loadBrands();
  }, []);

  const handleSelect = (brand: string) => {
    setSelectedBrand(brand);
    onChange({ brand });
    setIsOpen(false);
  };

  return (
    <div className="filterWrapper">
      <label className="filterLabel">Car brand</label>

      <div
        className="filterField"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{selectedBrand || "Choose a brand"}</span>

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
          {brands.map((brand) => (
            <li key={brand} onClick={() => handleSelect(brand)}>
              {brand}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}