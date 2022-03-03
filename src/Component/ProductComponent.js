import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import './Products.css';

const ProductComponent = () => {
  const items = useSelector((state) => state.allProducts.products);
  console.log(`itemssss:`, items);
  const RenderList = items.map((response) => {
    const { id, title, image, price, category } = response;
    return (
      <div className="cards">
        <Link to={`/product/${id}`}>
          <div className="ui link cards">
            <div className="card">
              <div className="image imges">
                <img className="img-class" src={image} alt={title} />
              </div>
              <div className="content cont">
                <div className="header">{title}</div>
                <div className="meta price rate">₹{price}</div>
                <div className="meta">{category}</div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
    });
  return <div>{RenderList}</div>;
};

export default ProductComponent;
