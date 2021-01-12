import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Product from "../components/Product";
import axios from "axios";
import store from '../store'
import { useSelector } from 'react-redux'
import { productList } from '../reducres/productReducers'
const HomeScreen = () => {
  // const [products, setProducts] = useState([]);
  const p = useSelector(async(state) => state.products)
  console.log(p);
  useEffect(() => {
    store.dispatch(productList())

  },[]);
  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {/* {products.map((product) => (
          <Col sm={12} md={6} lg={4} xl={3} key={product._id}>
            <Product product={product} />
          </Col>
        ))} */}
      </Row>
    </>
  );
};

export default HomeScreen;
