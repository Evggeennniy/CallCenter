import { useState, useCallback } from "react";

export function useNavToggle(initialState = false) {
  const [active, setActive] = useState(initialState);

  const toggleActive = useCallback(() => {
    setActive((prev) => !prev);
  }, []);

  return { active, toggleActive, setActive };
}
