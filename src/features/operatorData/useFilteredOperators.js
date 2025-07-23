import { useMemo } from "react";

export default function useFilteredOperators(data, period) {
  return useMemo(() => {
    if (!data || !Array.isArray(data)) return [];

    if (period === "10 днів") {
      return data.filter((item) => item.period === "10");
    }

    if (period === "30 днів") {
      return data.filter((item) => item.period === "30");
    }

    return data;
  }, [data, period]);
}
