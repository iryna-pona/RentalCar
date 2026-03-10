import { api } from '../api/api';
import { Car } from "@/types/car";

export interface FetchCarsParams {
  brand?: string;
  rentalPrice?: string;
  minMileage?: string;
  maxMileage?: string;
  page?: number;
  limit?: number;
}

export interface CarsResponse {
  cars: Car[];
  totalCars: number;
  page: number;
  totalPages: number;
}

export const fetchCars = async (params?: FetchCarsParams): Promise<CarsResponse> => {
  const res = await api.get("/cars", { params });
  return res.data;
};

export const fetchCarById = async (id: string) => {
  const res = await api.get(`/cars/${id}`);
  return res.data;
};

export const fetchBrands = async () => {
  const res = await api.get("/brands");
  return res.data;
};