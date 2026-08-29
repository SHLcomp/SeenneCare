import { createContext, useContext, useState } from "react";
import products from "../assets/data/products";


const ProductContext = createContext();



export const ProductProvider = ({children}) => {


  const [filters, setFilters] = useState({

    category:"all",
    skinType:"all",
    rating:0,
    sort:"featured"

  });



  const updateFilter = (key,value)=>{

    setFilters(prev=>({
      ...prev,
      [key]:value
    }));

  };




  const clearFilters = ()=>{

    setFilters({

      category:"all",
      skinType:"all",
      rating:0,
      sort:"featured"

    });

  };




  let displayedProducts = products.filter(product=>{


    if(
      filters.category !== "all" &&
      product.category !== filters.category
    ){
      return false;
    }



    if(
      filters.skinType !== "all" &&
      !product.skinTypes.includes(filters.skinType)
    ){
      return false;
    }



    if(
      product.rating < filters.rating
    ){
      return false;
    }



    return true;

  });





  if(filters.sort==="price-low"){

    displayedProducts =
    [...displayedProducts]
    .sort((a,b)=>a.price-b.price);

  }



  if(filters.sort==="price-high"){

    displayedProducts =
    [...displayedProducts]
    .sort((a,b)=>b.price-a.price);

  }




  if(filters.sort==="rating"){

    displayedProducts =
    [...displayedProducts]
    .sort((a,b)=>b.rating-a.rating);

  }





  return (

    <ProductContext.Provider
      value={{

        displayedProducts,

        filters,

        updateFilter,

        clearFilters

      }}
    >

      {children}

    </ProductContext.Provider>

  );


};





export const useProducts = ()=>useContext(ProductContext);