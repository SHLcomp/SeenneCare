import { createBrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import { RouterProvider } from "react-router-dom";
import ProdFilter from "./components/prodFilter/ProdFilter";
import Shop from "./pages/shop/Shop";
import ShopAll from "./pages/shop/ShopAll";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/product/:itemSlug",
      element: <ProdFilter />
    },
    {
      path:"/shop/:filterType/:filterValue",
      element: <Shop /> 
    },
    {
      path: "/shop",
      element: <ShopAll />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
   
    </>
  );
}

export default App;
