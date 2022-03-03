import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { removeSelectedProducts, selectedProducts } from "../Redux/Action/Actions";
import axios from "axios";

const ProductDetails = () => {
  const products = useSelector((state) => state.productss);

  const { title, price, image, category, description } = products;
  console.log(products, "productsskjfdk");
  const dispatch = useDispatch();
  const { productId } = useParams();
  console.log("productid:", productId);
  const fetchApi = async () => {
    const datas = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((err) => {
        console.log("err", err);
      });
    console.log(`datasssss`, datas.data);
    dispatch(selectedProducts(datas.data));
  };
  useEffect(() => {
    if (productId && productId !== "") {
      fetchApi();
      return () => {
          dispatch(removeSelectedProducts())
      }
    }
  }, [productId]);
  return (
    <div className="ui grid container">
      {Object.keys(products).length === 0 ? (
        <div>Loading.........</div>
      ) : (
        <div className="ui placeholder segment">
          <div className="ui two column stackable center aligned grid">
            <div className="ui vertical divider">AND</div>
            <div className="middle aligned row">
              <div className="column lp mage">
                <img className="ui fluid image" src={image} />
              </div>
              <div className="column rp">
                <h1>{title}</h1>
                <h2>
                  <a className="ui teal tag label">₹{price}</a>
                </h2>
                <h3 className="ui brown block header">{category}</h3>
                <p>{description}</p>
                <div className="ui vertical animated button" tabIndex="0">
                  <div className="hidden content">
                    <i className="shop icon"></i>
                  </div>
                  <div className="visible content">Add to cart</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
