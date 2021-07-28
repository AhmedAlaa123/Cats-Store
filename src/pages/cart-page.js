import React from "react";
import { connect } from "react-redux";
import { payNow } from "../actions/action-creator";
import CartItem from "../components/cart-item";
const CartPage=(props)=>{
    const cartItemsList=props.cartItems.map(item=>{
        return (
            <div className='col-md-3' key={item.product.id} id={'cart-product'}>
                <CartItem item={item}/>
            </div>
        );
    })
    return (
        <div>
            <h1>Cart</h1>
            <div className='row'>
               {cartItemsList}
            </div>
            <br/><br/>
            <h3>Total :{props.totalPrice} &#36;</h3>
            <br/>
            <button className='btn btn-block btn-primary' onClick={props.payNow}>Pay Now</button>
        </div>
    );
}
// const mapDispachToProps=(dispatch)=>{
//     return{
//         orderNow:()=>dispatch(emptyTheCart())
//     }
// }
const mapeStateToProps=(state)=>{
    return {
        cartItems:state.cartReducer,
        totalPrice:state.cartReducer.reduce((total,item)=>total+item.quantity*item.product.price,0),
        
    }
}
const mapDispatchToProps=(dispatch)=>{
    return {
        payNow:()=>dispatch(payNow())
    }
}
export default connect(mapeStateToProps,mapDispatchToProps)(CartPage);