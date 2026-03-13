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

  const handleBrandChange = (brandFilter: { brand?: string }) => {
    setFilters(prev => ({ ...prev, ...brandFilter }));
  };

  const handlePriceChange = (priceFilter: { rentalPrice?: string }) => {
    setFilters(prev => ({ ...prev, ...priceFilter }));
  };

  const handleMileageChange = (mileageFilter: { minMileage?: string; maxMileage?: string }) => {
    setFilters(prev => ({ ...prev, ...mileageFilter }));
  };

  const handleSearchClick = () => {
    onSearch(filters);
  };

  return (
    <div className="filtersContainer">
      <BrandFilter onChange={handleBrandChange} />
      <PriceFilter onChange={handlePriceChange} />
      <MileageFilter onChange={handleMileageChange} />
      <button onClick={handleSearchClick}>Search</button>
    </div>
  );
}