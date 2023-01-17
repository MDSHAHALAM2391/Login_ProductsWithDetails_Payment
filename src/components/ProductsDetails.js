import React from "react";
import { Link, useMatch } from "react-router-dom";
import data from '../utils/db'

function ProductsDetails() {
  const match = useMatch('/productDetails/:id')
  const { id, brand, color, image, name, price, ratting, views } = data.find((res) => res.id === Number(match.params.id))
  return (
    <div className="product-details">
      <div className="container">
        <div className="d-flex justify-content-between border-bottom pb-4 mb-4">
          <Link to="/products"
            className='text-end text-black bg-dark text-white px-4 py-2 rounded text-decoration-none'
          >
            <i className="fas fa-long-arrow-left me-2"
            ></i>
            Back</Link>
        </div>
        <div className="row align-items-start">
          <div className="col-md-5">
            <div className="product-pic-wrap">
              <img
                src={image}
                alt="ProfileImage"
                class="img-fluid product-pic mb-3 mb-md-0"
              />
            </div>
          </div>
          <div className="col-md-7">
            <div className="details">
              <label className="title">{name}</label>
              <p className="subtitle">{ratting} Ratings & {views} Reviews</p>
              <p className="data">
                Brand: <span className="value">{brand}</span>
              </p>
              <p className="data">
                Price: <span className="value">{price}</span>
              </p>
              <p className="data">
                Color:
              </p>
              <ul>
                <li>{color}</li>
              </ul>
            </div>
            <div className="mt-4">
              <Link
                to={`/payment/${id}`}
                className='text-end text-black bg-dark text-white px-4 py-2 rounded text-decoration-none'
              >
                Payment
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductsDetails;
