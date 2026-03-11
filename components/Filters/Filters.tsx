"use client";

import { useState } from "react";
import BrandFilter from "./BrandFilter";
import PriceFilter from "./PriceFilter";
import MileageFilter from "./MileageFilter";
import { FetchCarsParams } from "@/app/api/cars";

interface FiltersProps {
  onSearch: (filters: FetchCarsParams) => void;
}

export default function Filters({ onSearch }: FiltersProps) {
  const [filters, setFilters] = useState<FetchCarsParams>({});

  const handleBrandChange = (brand: string) => {
    setFilters(prev => ({ ...prev, brand }));
  };

  const handlePriceChange = (rentalPrice: string) => {
    setFilters(prev => ({ ...prev, rentalPrice }));
  };

  const handleMileageChange = (minMileage?: string, maxMileage?: string) => {
    setFilters(prev => ({ ...prev, minMileage, maxMileage }));
  };

  const handleSearchClick = () => {
    onSearch(filters);
  };

  return (
    <div>
      <BrandFilter onChange={handleBrandChange} />
      <PriceFilter onChange={handlePriceChange} />
      <MileageFilter onChange={handleMileageChange} />
      <button onClick={handleSearchClick}>Search</button>
    </div>
  );
}