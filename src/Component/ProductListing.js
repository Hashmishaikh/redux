import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setProduct } from "../Redux/Action/Actions";
import ProductComponent from "./ProductComponent";
import './Products.css';

const ProductListing = () => {
    // eslint-disable-next-line
  const items = useSelector((state) => state);
  const dispatch = useDispatch();
  const fetch = async () => {
    const api = await axios
      .get(`https://fakestoreapi.com/products`)
      .catch((err) => {
        console.log("Error", err);
      });
    console.log(api.data);
    dispatch(setProduct(api.data));
  };
  useEffect(() => {
    fetch();
    // eslint-disable-next-line
  }, []);
//   console.log("Itemsss",items)
  return (
    <div className="ui grid container">
      <ProductComponent />
    </div>
  );
};

export default ProductListing;
