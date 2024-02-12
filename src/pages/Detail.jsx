import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDeatilsCocktails } from "../store/cocktailsSlice/CocktailsSlice";

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { details, error, status } = useSelector((state) => state.cocktails);

  useEffect(() => {
    dispatch(getDeatilsCocktails(id));
  }, [dispatch, id]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error...</div>;
  }

  return (
    <section className="bg-gray-700">
      <section className="text-white">
        {details &&
          details.map((element) => (
            <React.Fragment key={element.idDrink}>
              <div className="flex">
                <div>
                  <img
                    src={element.strDrinkThumb}
                    style={{ width: "750px" }}
                    className="h-screen"
                    alt=""
                  />
                </div>
                <div className="flex items-center flex-wrap flex-col justify-center ml-10">
                  <h2>Id {element.idDrink}</h2>
                  <h3>Cocktail name: {element.strDrink}</h3>
                  <ul>
                    <li>Category : {element.strCategory}</li>
                    <li>Alcoholic : {element.strAlcoholic}</li>
                    <li>Instriction : {element.strInstructions}</li>
                    Ingridiens:
                    {Object.keys(element)
                      .filter((key) => key.startsWith("strIngredient"))
                      .map((key, index) => {
                        if (element[key]) {
                          return <li key={index}>{element[key]}</li>;
                        } else {
                          return null;
                        }
                      })}
                  </ul>
                </div>
              </div>
            </React.Fragment>
          ))}
      </section>
    </section>
  );
};

export default Detail;
