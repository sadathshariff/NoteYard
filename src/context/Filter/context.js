import { useContext, useState, useReducer, createContext } from "react";
import { useNotes } from "../Note/context";
import { filterReducer } from "./reducer";
import {
  filterByLabel,
  filterByPriority,
  filterByDate,
  Compose,
} from "./utils";
const FilterContext = createContext(null);

const FilterProvider = ({ children }) => {
  const { noteState } = useNotes();
  const { notes } = noteState;
  const initialData = {
    sortByPriority: "",
    sortByDate: "",
    labels: [],
  };
  const [filterState, filterDispatch] = useReducer(filterReducer, initialData);

  const filteredNotes = Compose(
    filterState,
    filterByLabel,
    filterByPriority,
    filterByDate
  )(notes);

  return (
    <FilterContext.Provider
      value={{ filterState, filterDispatch, filteredNotes }}
    >
      {children}
    </FilterContext.Provider>
  );
};

const useFilter = () => useContext(FilterContext);

export { useFilter, FilterProvider };
