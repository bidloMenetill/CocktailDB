import React, { useEffect, useState, useMemo } from "react";
import { useDispatch } from "react-redux";
import {
  FILTER_BY_ALCOHOLIC,
  searchByName,
} from "../../store/cocktailsSlice/CocktailsSlice";

const Header = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("All");
  const [query, setQuery] = useState("");

  useEffect(() => {
    const storedFilter = localStorage.getItem("filter");
    if (storedFilter) {
      setValue(storedFilter);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("filter", value);
  }, [value]);

  useEffect(() => {
    if (query && value === "All") {
      dispatch(searchByName(query));
    } else if (query && value !== "All") {
      dispatch(FILTER_BY_ALCOHOLIC(value));
    } else if (!query && value !== "All") {
      dispatch(FILTER_BY_ALCOHOLIC(value));
    }
  }, [dispatch, query, value]);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleFilterChange = (e) => {
    setValue(e.target.value);
  };

  const memoizedValue = useMemo(() => value, [value]);
  const memoizedQuery = useMemo(() => query, [query]);

  return (
    <form className="flex justify-center">
      <input
        onChange={handleChange}
        value={memoizedQuery}
        type="text"
        className="mr-16 pl-4"
        placeholder="Search by name..."
      />
      <label className="text-white mr-4" htmlFor="filter">
        Choose Filter
      </label>
      <select id="filter" value={memoizedValue} onChange={handleFilterChange}>
        <option value="All">All</option>
        <option value="Alcoholic">Alcoholic</option>
        <option value="Non_Alcoholic">Non Alcoholic</option>
      </select>
    </form>
  );
};

export default Header;
