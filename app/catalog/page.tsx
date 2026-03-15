import CatalogClient from "./CatalogClient";
import { fetchCars } from "@/app/api/cars";
import { CarFilters } from "@/types/filters";

interface CatalogPageProps {
  searchParams?: CarFilters;
}

export default async function CatalogPage({ searchParams }: CatalogPageProps) {

  const data = await fetchCars({ page: 1, ...searchParams });

  return (
    <CatalogClient
      initialCars={data.cars}
      initialTotalPages={data.totalPages}
      initialFilters={searchParams || {}}
    />
  );
}