import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import classes from "../Product/Product.module.css";
import Loader from "../../Components/Loader/Loader";

function Product() {
  const [products, setProducts] = useState([]); 
  const [isLoading, setIsLoading] = useState(true); 

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setProducts(res.data); 
        setIsLoading(false); 
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false); 
      });
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader /> 
      ) : (
        <section className={classes.products_container}>
          {products.map((singleProduct) => (
            <ProductCard renderAdd={true} product={singleProduct} key={singleProduct.id} />
          ))}
        </section>
      )}
    </>
  );
}

export default Product;
