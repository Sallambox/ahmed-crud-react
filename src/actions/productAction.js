import {
    GET_PRODUCTS,
    GET_PRODUCT,
    POST_PRODUCTS,
    UPDATE_PRODUCTS,
    DELETE_PRODUCTS
  } from "./type";
  
  import ProductService from "../services/productService";
  
  export const getProducts = () => async (dispatch) => {
    try {
        
      const res = await ProductService.getAll();
      dispatch({
        type: GET_PRODUCTS,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };

  export const getProduct =(i) => async (dispatch) => {
    try {
      const res = await ProductService.getOne(i);
      dispatch({
        type: GET_PRODUCT,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };

  export const AddProducts = (product) => async (dispatch) => {
    try {
      const res = await ProductService.AddAll(JSON.stringify(product) );
      dispatch({
        type: POST_PRODUCTS,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };

  export const updateProducts = (product,id) => async (dispatch) => {
    try {
      const res = await ProductService.updateOne(id,product);
      dispatch({
        type: UPDATE_PRODUCTS,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
  export const deleteProducts =(id) => async (dispatch) => {
    try {
      const res = await ProductService.deleteOne(id);
      dispatch({
        type: DELETE_PRODUCTS,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };