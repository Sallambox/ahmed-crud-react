import { ListProducts } from "../pages/Listproducts";
import { ProductForm } from "../pages/productForm";
import { Route } from "react-router-dom"; 
export function Routes(){
    return(
        <div>
            <Route path="/add" exact component={ProductForm}/>
            <Route path="/add/:id" exact component={ProductForm}/>
            <Route path="/" exact component={ListProducts}/>

        </div>
    )
}