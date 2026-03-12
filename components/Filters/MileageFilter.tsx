import { useState } from "react";

interface MileageFilterProps {
  onChange: (filters: { minMileage?: string; maxMileage?: string }) => void;
}

export default function MileageFilter({ onChange }: MileageFilterProps) {
  const [minMileage, setMinMileage] = useState<string>("");
  const [maxMileage, setMaxMileage] = useState<string>("");

  const formatNumber = (value: string, type: "min" | "max") => {
    if (!value) return "";
    const formatted = Number(value).toLocaleString("en-US");
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
    <div>
      <input
        type="text"
        placeholder="From"
        value={formatNumber(minMileage, "min")}
        onChange={handleMinChange}
      />
      <input
        type="text"
        placeholder="To"
        value={formatNumber(maxMileage, "max")}
        onChange={handleMaxChange}
      />
    </div>
  );
}