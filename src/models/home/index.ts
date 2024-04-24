import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from "react";
import { useSearchParams } from "react-router-dom";
import { FilterState, Elixir } from "../../utils/interface";

const HomeModel = (): {
  data: Elixir[];
  filter: FilterState;
  loading: boolean;
  setFilter: Dispatch<SetStateAction<FilterState>>;
  handleChange: (key: string, value: string) => void;
  clearFilters: () => void;
  handleSubmit: () => void;
} => {
  //hooks
  const [searchParams, setSearchParams] = useSearchParams();

  //State
  const [data, setData] = useState<Elixir[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const [filter, setFilter] = useState<FilterState>({
    Name: searchParams.get("Name") || "",
    Difficulty: searchParams.get("Difficulty") || "",
    Ingredient: searchParams.get("Ingredient") || "",
    InventorFullName: searchParams.get("InventorFullName") || "",
    Manufacturer: searchParams.get("Manufacturer") || "",
  });

  //handlers

  const fetchElixirs = useCallback(async (query: string) => {
    setLoading(true);
    fetch(
      `https://wizard-world-api.herokuapp.com/Elixirs${
        query ? `?${query}` : ""
      }`
    )
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch(() => {
        setData([]);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const clearFilters = useCallback(() => {
    setSearchParams({});
  }, [setSearchParams]);

  const handleChange = useCallback(
    (key: string, value: string): void => {
      setFilter((prev) => ({ ...prev, [key]: value }));
    },
    [setFilter]
  );

  const handleSubmit = useCallback(() => {
    Object.entries(filter).forEach(([key, value]) => {
      if (value?.trim()) {
        searchParams.set(key, value);
      } else {
        searchParams.delete(key);
      }
    });
    setSearchParams(searchParams);
  }, [filter, searchParams, setSearchParams]);

  //useEffect
  useEffect(() => {
    const { Name, Difficulty, Ingredient, InventorFullName, Manufacturer } =
      Object.fromEntries(searchParams);

    setFilter((prevFilter) => ({
      ...prevFilter,
      Name: Name || "",
      Difficulty: Difficulty || "",
      Ingredient: Ingredient || "",
      InventorFullName: InventorFullName || "",
      Manufacturer: Manufacturer || "",
    }));

    fetchElixirs(searchParams.toString());
  }, [searchParams, fetchElixirs]);

  return {
    data,
    filter,
    loading,
    setFilter,
    handleChange,
    clearFilters,
    handleSubmit,
  };
};

export default HomeModel;
