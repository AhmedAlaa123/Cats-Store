import React from "react"; 
import { connect } from "react-redux";

import { getProductById } from "../api/products";
import { addProductToCartAction } from "../actions/action-creator";
class ProductItemPage extends React.Component {

    state={
        loading:true,
        product:{},
        quantity:0,
        totalPrice:0,

    }
   async componentDidMount ()
    {
        const productId=this.props.match.params.id;
        getProductById(productId).then(product=>{
            
            this.setState({product,loading:false})
        })
    }

    //handdling input number change
    handdelQuntityChange=(event)=>{
        // seleected quantity
        const quantity=event.target.value;
        // product price
        const productPrice=this.state.product.price
        //setting quantity and totalprice
        this.setState({quantity,totalPrice:quantity*productPrice})

    }

    handdelAddToCart=async()=>{

        await this.props.addProductToCart(this.state.product,this.state.quantity)
        this.setState(
           { 
                
                quantity:0,
                totalPrice:0,
            }
        )
    }
    
    render (){
        // printing Loading .... 
        if(this.state.loading)
        return <h1>Loading .......</h1>
        const {product}=this.state;
        
        return (
            <div className='row'>
               <div className='col-md-6'>
                   {/* class img-fluid make image is responsive */}
                   <img className='img-fluid' src={product.image} alt='Cat'/>
               </div>
               <div className='col-md-6'>
                   <h1>{product.name}</h1>
                   <h4>{product.price} &#36;</h4>
                   <p className='lead'>{product.description}</p>
                    <br/>
                    <br/>
                    <input type='number' min='0' value={this.state.quantity}  onChange={this.handdelQuntityChange}/>
                    <br/><br/>
                    <p>Total Price : {this.state.totalPrice}</p>
                    <button disabled={parseInt(this.state.quantity)>0?false:true} className='btn btn-primary' onClick={this.handdelAddToCart}>Add To Cart</button>
                                  
               </div>
            </div>
        );
    }
}
const mapDispatchToProps=(dispatch)=>{
    return {
        addProductToCart:(productInfo,quantity)=>dispatch(addProductToCartAction(productInfo,quantity))
    }
}
export default connect(null,mapDispatchToProps)(ProductItemPage);