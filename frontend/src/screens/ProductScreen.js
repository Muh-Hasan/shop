import React from "react";
import { useParams , Link } from "react-router-dom";
import { Row , Col, Image , ListGroup, Card, Button } from "react-bootstrap"
import Rating from "../components/Rating"
import products from "../products"
const ProductScreen = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <div>
      <h1>product</h1>
    </div>
  );
};

export default ProductScreen;
