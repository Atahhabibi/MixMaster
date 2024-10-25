import { Link, Navigate, useLoaderData } from "react-router-dom";
import Wrapper from "../assets/wrappers/CocktailPage";
import axios from "axios";

const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

export const loader = async ({ params }) => {
  const { id } = params;

  const { data } = await axios.get(`${url}${id}`);

  return { id, data };
};

const Cocktail = () => {
  const { id, data } = useLoaderData();

//   if(!data) return <h2>something went wrong....</h2>
  if(!data) return <Navigate to="/"/>


  const singleDrink = data.drinks[0];

  //   const {
  //     strIngredient1: ingredient_1,
  //     strIngredient2: ingredient_2,
  //     strIngredient3: ingredient_3,
  //     strIngredient4: ingredient_4,
  //   } = singleDrink;

  //   const ingredients = [ingredient_1, ingredient_2, ingredient_3, ingredient_4];

  //   const uniqueIngredients=ingredients.filter((item)=>item!==null);

  const valudIngredients = Object.keys(singleDrink)
    .filter(
      (key) => key.startsWith("strIngredient") && singleDrink[key] !== null
    )
    .map((key) => singleDrink[key]);


  const {
    strDrink: name,
    strDrinkThumb: image,
    strAlcoholic: info,
    strCategory: category,
    strGlass: glass,
    strInstructions: instructions,
  } = singleDrink;

  return (
    <Wrapper>
      <header>
        <Link className="btn" to="/">
          Back Home
        </Link>
        <h3>{name}</h3>
      </header>

      <div className="drink">
        <img src={image} alt={name} className="img" />
        <div className="drink-info">
          <p>
            <span className="drink-data">name:</span>
            {name}
          </p>
          <p>
            <span className="drink-data">category:</span>
            {category}
          </p>
          <p>
            <span className="drink-data">Info:</span>
            {info}
          </p>``
          <p>
            <span className="drink-data">glass:</span>
            {glass}
          </p>

          <p>
            <span className="drink-data">Ingredients:</span>
            {valudIngredients.map((item, index) => {
              return (
                <span className="ing" key={item}>
                  {item}
                  {index < valudIngredients.length - 1 ? "," : " "}
                </span>
              );
            })}
          </p>

          <p>
            <span className="drink-data">instructions:</span>
            {instructions}
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

export default Cocktail;
