import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";
import { NavLink, useParams } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      setProduct(await response.json());
      setLoading(false);
    };
    getProduct();
  }, []);

  const Loading = () => {
    return (
      <>
        <div className="col-md-6">
          <Skeleton height={400} />
        </div>
        <div className="col-md-6">
          <Skeleton height={50} width={300} />
          <Skeleton height={75} />
          <Skeleton height={25} width={150} />
          <Skeleton height={50} />
          <Skeleton height={130} />
          <Skeleton height={50} width={150} inline={true} />
          <Skeleton height={50} width={150} style={{ marginLeft: 8 }} />
        </div>
      </>
    );
  };

  const ShowProduct = () => {
    return (
      <>
        <div className="col-md-6 mt-5">
          <img
            src={product.image}
            alt={product.title}
            height="400px"
            width="400px"
          />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="text-uppercase text-black-50">{product.category}</h4>
          <h1 className="display-5">{product.title}</h1>
          <p className="lead fw-bolder">
            Rating {product.rating && product.rating.rate}
            <i className="fa fa-star"></i>
          </p>
          <h3 className="display-6 fw-bold my-4">Rp {product.price * 14600}</h3>
          <p className="lead text-capitalize">{product.description}</p>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => addProduct(product)}
          >
            Add to cart <i className="fa fa-shopping-cart"></i>
          </button>
          <NavLink to={"/cart"} className="btn btn-dark">
            Go to cart <i className="fa fa-chevron-right"></i>
          </NavLink>
        </div>
      </>
    );
  };

  return (
    <div>
      <div className="container py-5">
        <div className="row">{loading ? <Loading /> : <ShowProduct />}</div>
      </div>
    </div>
  );
};

export default ProductDetail;
