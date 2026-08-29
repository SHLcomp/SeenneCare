import { createBrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home.jsx";
import { RouterProvider } from "react-router-dom";
import ProdFilter from "./components/prodFilter/ProdFilter.jsx";
import Shop from "./pages/shop/Shop.jsx";
import ShopAll from "./pages/shop/ShopAll.jsx";
import AdminDashboard from "./pages/adminDashboard/AdminDashboard.jsx";

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
    {
      path: "/sarah",
      element: <AdminDashboard />
    }
  ]);

  return (
    <>
      <RouterProvider router={router} />
   
    </>
  );
}

export default App;
