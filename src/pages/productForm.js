import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useHistory } from "react-router-dom";
import { AddProducts, getProduct, updateProducts, getProducts } from "../actions/productAction";

export function ProductForm() {
    const { productReducer: product } = useSelector((state) => state);

    let initialValues = {
        title: product.title ? product.title : "",
        price: product.price ? product.price : "",
        description: product.description ? product.description : "",
        category: product.category ? product.category : "",
        image: product.image ? product.image : "",
    };
    const validationSchema = Yup.object({
        title: Yup.string().required("title is required"),
        price: Yup.number().required("Price is required"),
        description: Yup.string().required("Description is required"),
        category: Yup.string().required("category is required"),
        image: Yup.string().required("image is required"),
    });
    const history = useHistory();
    const { id } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        if (id) {
            dispatch(getProduct(id));
        }
        
    }, [dispatch, id]);

    const onSubmit = (values) => {
        if (id) {
            dispatch(updateProducts(values, id));

            history.push("/");
        } else {
            dispatch(AddProducts(values));
            history.push("/");
        }
    };

    return (
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema} enableReinitialize={true}>
            {(formik) => {
                return (
                    <Form>
                        <div className="form-group">
                            <label htmlFor="title">Title</label>
                            <Field type="text" className="form-control" id="title" placeholder="Enter title" name="title" />
                            <ErrorMessage name="title" component="div" className="text-danger" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="price">Price</label>
                            <Field type="text" className="form-control" id="price" placeholder="Enter price" name="price" />
                            <ErrorMessage name="price" component="div" className="text-danger" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="title">description</label>
                            <Field
                                type="text"
                                className="form-control"
                                id="description"
                                placeholder="Enter description"
                                name="description"
                            />
                            <ErrorMessage name="description" component="div" className="text-danger" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="category">Category</label>
                            <Field type="text" className="form-control" id="title" placeholder="Enter category" name="category" />
                            <ErrorMessage name="category" component="div" className="text-danger" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="category">Image</label>
                            <Field type="text" className="form-control" id="image" placeholder="Enter image" name="image" />
                            <ErrorMessage name="image" component="div" className="text-danger" />
                        </div>
                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>
                    </Form>
                );
            }}
        </Formik>
    );
}
