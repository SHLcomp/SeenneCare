import React from 'react'
import { useParams } from 'react-router-dom';
import data from "../../assets/data/products.js"
import ProductDisplay from '../../pages/productDisplay/ProductDisplay.jsx';

const ProdFilter = () => {
    const {itemSlug} = useParams();
  const item = data.find((e)=>e.slug === (itemSlug));
   if (!item) return <h1 style={{padding:"10vh"}}>Product Not Found</h1>;
  return (
    <div>
      <ProductDisplay item={item}/>
    </div>
  )
  
}

export default ProdFilter