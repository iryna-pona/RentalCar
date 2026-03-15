"use client";

import { useEffect, useRef } from "react";
import { useCarsStore } from "@/store/useCarsStore";
import Filters from "@/components/Filters/Filters";
import CarList from "@/components/CarList/CarList";
import { CarFilters } from "@/types/filters";
import { Car } from "@/types/car";
import styles from "./CatalogClient.module.css";

interface CatalogClientProps {
  initialCars: Car[];
  initialTotalPages: number;
  initialFilters: CarFilters;
}

export default function CatalogClient({
  initialCars,
  initialTotalPages,
  initialFilters,
}: CatalogClientProps) {
  const cars = useCarsStore((state) => state.cars);
  const page = useCarsStore((state) => state.page);
  const totalPages = useCarsStore((state) => state.totalPages);
  const loadCars = useCarsStore((state) => state.loadCars);
  const setFilters = useCarsStore((state) => state.setFilters);
  const loadFavorites = useCarsStore((state) => state.loadFavorites);

  const gridRef = useRef<HTMLDivElement | null>(null);
  const prevLengthRef = useRef(0);

  useEffect(() => {
    loadFavorites();

    useCarsStore.setState({
      cars: initialCars,
      page: 1,
      totalPages: initialTotalPages,
      filters: initialFilters,
    });

  }, [initialCars, initialTotalPages, initialFilters, loadFavorites]);

  const handleSearch = (newFilters: CarFilters) => {
    setFilters(newFilters);
    loadCars(1);
  };

  const handleLoadMore = () => {
    prevLengthRef.current = cars.length;
    loadCars(page + 1);
  };

  useEffect(() => {
    if (prevLengthRef.current === 0) return;

    const wrapper = gridRef.current;
    if (!wrapper) return;

    const newCard = wrapper.children[prevLengthRef.current];

    if (newCard instanceof HTMLElement) {
      newCard.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [cars]);

  const showLoadMore = cars.length > 0 && page < totalPages;

  return (
    <div className={styles.inner}>
      <Filters onSearch={handleSearch} />
      <div className={styles.grid} ref={gridRef}>
        <CarList cars={cars} />
      </div>
      {showLoadMore && <button className={styles.loadMoreBtn} onClick={handleLoadMore}>Load more</button>}
    </div>
  );
}