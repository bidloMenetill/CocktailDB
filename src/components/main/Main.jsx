import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCocktails } from "../../store/cocktailsSlice/CocktailsSlice";
import { Link } from "react-router-dom";

const Main = () => {
  const dispatch = useDispatch();
  const { cocktails, error, status } = useSelector((state) => state.cocktails);

  useEffect(() => {
    dispatch(getAllCocktails());
  }, [dispatch]);
  if (error) {
    return <div>Error</div>;
  }
  if (status === "loading") {
    return <div>Loading...</div>;
  }
  return (
    <section className="mt-7">
      <div
        className="flex align-middle justify-center items-center  mx-auto  flex-wrap gap-7"
        style={{ width: "1200px" }}
      >
        {cocktails?.map((element) => (
          <section
            key={element.idDrink}
            className="bg-blue-600 w-1/4 text-center cursor-pointer "
          >
            <Link to={`/detail/${element.idDrink}`}>
              <h1>Cocktail name: {element.strDrink}</h1>
              <p>Id: {element.idDrink}</p>
              <img src={element.strDrinkThumb} alt={element.strDrink} />
              <ul></ul>
            </Link>
          </section>
        ))}
      </div>
    </section>
  );
};

export default Main;
