import { create } from "zustand";
import { Car } from "@/types/car";
import { FetchCarsParams, CarsResponse, fetchCars } from "@/app/api/cars";

interface CarsState {
  cars: Car[];
  favorites: Car[];
  filters: FetchCarsParams;
  page: number;
  totalPages: number;
  setFilters: (newFilters: FetchCarsParams) => void;
  loadCars: (page?: number) => Promise<void>;
  addFavorite: (car: Car) => void;
  removeFavorite: (carId: string) => void;
  loadFavorites: () => void;
}

export const useCarsStore = create<CarsState>((set, get) => ({
  cars: [],
  favorites: [],
  filters: { brand: "", rentalPrice: "", minMileage: "", maxMileage: "" },
  page: 1,
  totalPages: 0,

  setFilters: (newFilters) =>
    set({ filters: { ...get().filters, ...newFilters }, page: 1, cars: [] }),

  loadCars: async (page = 1) => {
    const { filters } = get();
    const data: CarsResponse = await fetchCars({ ...filters, page });
    set((state) => ({
      cars: page === 1 ? data.cars : [...state.cars, ...data.cars],
      page: data.page,
      totalPages: data.totalPages,
    }));
  },

  addFavorite: (car: Car) =>
      set((state) => {
        const updated = [...state.favorites, car];
        localStorage.setItem("favorites", JSON.stringify(updated));
        return { favorites: updated };
      }),

  removeFavorite: (carId: string) =>
    set((state) => {
      const updated = state.favorites.filter((c) => c.id !== carId);
      localStorage.setItem("favorites", JSON.stringify(updated));
      return { favorites: updated };
    }),
    
  loadFavorites: () => {
    const stored = localStorage.getItem("favorites");
    if (stored) {
      try {
        const parsed: Car[] = JSON.parse(stored);
        set({ favorites: parsed });
      } catch (err) {
        console.error("Failed to parse favorites from localStorage", err);
      }
    }
  },
}));
