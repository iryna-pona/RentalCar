import { useState } from "react";
import styles from "./Filters.module.css";

interface MileageFilterProps {
  onChange: (filters: { minMileage?: string; maxMileage?: string }) => void;
}

export default function MileageFilter({ onChange }: MileageFilterProps) {
  const [minMileage, setMinMileage] = useState<string>("");
  const [maxMileage, setMaxMileage] = useState<string>("");

  const formatNumber = (value: string, type: "min" | "max") => {
    if (!value) return "";
    const formatted = Number(value || 0).toLocaleString("en-US");
    return type === "min" ? `From ${formatted}` : `To ${formatted}`;
  };

  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const numericValue = e.target.value.replace(/\D/g, "");
    setMinMileage(numericValue);
    onChange({ minMileage: numericValue, maxMileage });
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const numericValue = e.target.value.replace(/\D/g, "");
    setMaxMileage(numericValue);
    onChange({ minMileage, maxMileage: numericValue });
  };

  return (
    <div className={styles.filterWrapper}>
      <label className={styles.filterLabel}>Car mileage / km</label>

      <div className={styles.mileageField}>
        <input
          type="text"
          placeholder="From"
          value={minMileage ? formatNumber(minMileage, "min") : ""}
          onChange={handleMinChange}
        />
        <input
          type="text"
          placeholder="To"
          value={maxMileage ? formatNumber(maxMileage, "max") : ""}
          onChange={handleMaxChange}
        />
      </div>
    </div>
  );
}