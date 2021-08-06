import React from "react";
import { Link } from "react-router-dom";
 const ProductItem= (props)=> {
    return(
        
        <div className="card" style={{"width": "auto"}}>
            <img src={props.product.image} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h3 className="card-title">{props.product.name}</h3>
                <p className="card-text">Price {props.product.price} &#36;</p>
                <Link to={'/Cats-Store/Products/'+props.product.id} className="btn btn-primary">Details</Link>
            </div>
        </div>
       
    );
}
export default ProductItem;