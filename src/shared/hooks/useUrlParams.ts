import { useSearchParams } from "react-router-dom";

export function useUrlParams() {
  const [searchParams, setSearchParams] = useSearchParams();

  function setParam(key: string, value: string | null) {
    setSearchParams((prev) => {
      const next = new URLSearchParams(prev);

      if (value === null) {
        next.delete(key);
      } else {
        next.set(key, value);
      }

      return next;
    });
  }

  return { searchParams, setSearchParams, setParam };
}
