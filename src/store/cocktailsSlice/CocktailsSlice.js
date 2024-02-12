import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CocktailsAPI } from "../../api";
export const getAllCocktails = createAsyncThunk(
  "cocktails/getAllCocktails",
  async (_, { rejectWithValue }) => {
    try {
      const res = await CocktailsAPI.getAllCocktails();
      return res.data.drinks;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const getDeatilsCocktails = createAsyncThunk(
  "cocktails/getDeatilsCocktails",
  async (id, { rejectWithValue }) => {
    try {
      const res = await CocktailsAPI.DETAIL_COCKTAIL_API(id);
      return res.data.drinks;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const searchByName = createAsyncThunk(
  "cocktails/searchByName",
  async (queary, { rejectWithValue }) => {
    try {
      const res = await CocktailsAPI.searchByName(queary);
      return res.data.drinks;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const FILTER_BY_ALCOHOLIC = createAsyncThunk(
  "cocktails/FILTER_BY_ALCOHOLIC",
  async (value, { rejectWithValue }) => {
    try {
      const res = await CocktailsAPI.FILTER_BY_ALCOHOLIC(value);
      return res.data.drinks;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const CocktailsSlice = createSlice({
  name: "cocktails",
  initialState: {
    cocktails: [],
    details: [],
    error: null,
    status: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllCocktails.fulfilled, (state, action) => {
        state.status = "resolved";
        state.cocktails = action.payload;
        state.error = null;
      })
      .addCase(getAllCocktails.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(getAllCocktails.rejected, (state) => {
        state.error = "error";
        state.status = "rejected";
      })
      .addCase(getDeatilsCocktails.fulfilled, (state, action) => {
        state.status = "resolved";
        state.details = action.payload;
        state.error = null;
      })
      .addCase(getDeatilsCocktails.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(getDeatilsCocktails.rejected, (state, action) => {
        state.error = action.payload;
        state.status = "rejected";
      })
      .addCase(searchByName.fulfilled, (state, action) => {
        state.status = "resolved";
        state.cocktails = action.payload;
        state.error = null;
      })
      .addCase(searchByName.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(searchByName.rejected, (state, action) => {
        state.error = action.payload;
        state.status = "rejected";
      })
      .addCase(FILTER_BY_ALCOHOLIC.fulfilled, (state, action) => {
        state.status = "resolved";
        state.cocktails = action.payload;
        state.error = null;
      })
      .addCase(FILTER_BY_ALCOHOLIC.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(FILTER_BY_ALCOHOLIC.rejected, (state, action) => {
        state.error = action.payload;
        state.status = "rejected";
      });
  },
});
export default CocktailsSlice.reducer;
