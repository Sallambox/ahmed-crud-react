import { GET_PRODUCTS, POST_PRODUCTS, UPDATE_PRODUCTS, DELETE_PRODUCTS, GET_PRODUCT } from "../actions/type";

function productReducer(products = [], action) {
    const { type, payload } = action;
    switch (type) {
        case GET_PRODUCTS:
            return payload;

        case POST_PRODUCTS:
            return products.concat([payload]);

        case GET_PRODUCT:
            return payload;

        case UPDATE_PRODUCTS:
          console.log(products);
            return products.map((product) => {
                payload.id = parseInt(payload.id);
                return product.id !== payload.id ? product : Object.assign({}, payload);
            });

        case DELETE_PRODUCTS:
            return products.filter((product) => product.id !== +payload.id);

        default:
            return products;
    }
}

export default productReducer;
