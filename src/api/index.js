import axios from "axios";

const instance = axios.create({
  baseURL: "https://www.thecocktaildb.com/api/json/v1/1/",
});

export const CocktailsAPI = {
  getAllCocktails() {
    return instance.get("filter.php?c=Cocktail");
  },

  searchByName(queary) {
    return instance.get(`search.php?s=${queary}`);
  },
  FILTER_BY_ALCOHOLIC(value) {
    return instance.get(`filter.php?a=${value}`);
  },
  DETAIL_COCKTAIL_API(id) {
    return instance.get(`lookup.php?i=${id}`);
  },
};
