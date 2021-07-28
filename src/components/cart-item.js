import React from 'react'
import {connect} from 'react-redux'
import { deleteProductFromCart } from '../actions/action-creator';
const CartItem=(props)=>{
    const item=props.item;
    const {product}=item
    return (
        <div className="card" style={{"width": "auto"}}>
            <img src={product.image} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h3 className="card-title">{product.name}</h3>
                <p className="card-text">
                    Price : {product.price} &#36;
                    <br/>
                    Quantity :{item.quantity}
                    <br/>
                    Total : {item.quantity*product.price} &#36;
                </p>
                <button className="btn btn-danger" onClick={()=>props.deleteProductFromCart(parseInt(product.id))}>
                    <i className="fa fa-trash"></i>  Delete
                </button>
            </div>
        </div>
    );
}
const mapeDispatchToProps=(dispatch)=>{
    return{
        deleteProductFromCart:(id)=>dispatch(deleteProductFromCart(id))
    }
}
export default connect(null,mapeDispatchToProps)(CartItem);