import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { getProducts,deleteProducts} from "../actions/productAction";
import { Row, Col, Container } from "react-bootstrap";
export const ListProducts = () => {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();
  const history = useHistory();
  console.log(products)
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  
  const  updateProduct  = (id) => {
    history.push(`/add/${id}`)
};
  const deleteProduct = (id) => {
      dispatch(deleteProducts(id))
  };
  return (
    <Container>
      <Row>
        {products.productReducer.map((product, index) => (
          <Col lg={3} key={index}>
            <div className="card mb-3 ">
              <img
                src={product.image}
                className="card-img-top"
                alt="pic"
                style={{ height: "12rem", width: "12rem", display: "block", margin: "0 auto" }}
              />
              <div className="card-body">
                <h5 className="card-title">{product.title.substring(0, 15)}</h5>
                <p className="card-text">{product.description.substring(0, 40)}</p>
                <button onClick={ ()=>deleteProduct(product.id)} className="btn btn-danger">
                  Delete
                </button>
                <button onClick={ ()=>updateProduct(product.id)} className="btn btn-primary">
                  UPDATE
                </button>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
