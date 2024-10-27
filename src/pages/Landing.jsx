import axios from "axios";
import { useLoaderData } from "react-router-dom";
import CocltailList from "../components/CocltailList";
import CocktailCard from "../components/CocktailCard";
import SearchForm from "../components/SearchForm";
import { useQuery } from "@tanstack/react-query";
const cocktailSearchUrl =
  "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const SearchCocktailsQuery = (searchTerm) => {
  return {
    queryKey: ["search", searchTerm || "all"],
    queryFn: async () => {
      const response = await axios.get(`${cocktailSearchUrl}${searchTerm}`);
      return response.data.drinks;
    }
  };
};

export const loader =
  (queryClient) =>
  async ({ request }) => {
    const url = new URL(request.url);

    const searchTerm = url.searchParams.get("search") || "all";

    await queryClient.ensureQueryData(SearchCocktailsQuery(searchTerm)); 

    // const response = await axios.get(`${cocktailSearchUrl}${searchTerm}`);

    // const {
    //   data: { drinks }
    // } = response;

    return { searchTerm };
  };

const Landing = () => {
  const { searchTerm } = useLoaderData();
  const { data: drinks } = useQuery(SearchCocktailsQuery(searchTerm));

  return (
    <>
      <SearchForm searchTerm={searchTerm} />
      <CocltailList drinks={drinks} />
    </>
  );
};

export default Landing;
