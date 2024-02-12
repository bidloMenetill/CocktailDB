import { configureStore } from "@reduxjs/toolkit";
import CocktailsReducer from "./cocktailsSlice/CocktailsSlice";

const store = configureStore({
  reducer: { cocktails: CocktailsReducer },
});

export default store;
