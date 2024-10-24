import axios from "axios";
import { useLoaderData } from "react-router-dom";
import CocltailList from "../components/CocltailList";
import CocktailCard from "../components/CocktailCard";

const cocktailSearchUrl =
  "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const urlByidi = " www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007";

export const loader = async () => {
  const searchTerm = "a";
  const response = await axios.get(`${cocktailSearchUrl}${searchTerm}`);

  const {
    data: { drinks },
  } = response;

  return {searchTerm,drinks};
};

const Landing = () => {

  const {searchTerm,drinks} = useLoaderData();


  return (
    <>

    <CocltailList drinks={drinks}/>
    
      
    </>
  );
};

export default Landing;
