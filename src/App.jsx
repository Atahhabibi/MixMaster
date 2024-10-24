import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { About, Cocktail, HomeLayout, Landing, NewsLetter,Error, SinglePageError} from "./pages";
import { loader as landingLoader } from "./pages/Landing"; 
import { loader as singleCocktailLoader } from "./pages/Cocktail"; 

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,

    children: [
      {
        index: true,
        element: <Landing />,
        errorElement:<SinglePageError/>,
        loader:landingLoader,
      },
      {
        path: "cocktail/:id",
        element: <Cocktail />,
        errorElement:<SinglePageError/>,
        loader:singleCocktailLoader,
      },
      {
        path: "newsletter",
        element: <NewsLetter />,
      },
      {
        path: "landing",
        element: <Landing />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
