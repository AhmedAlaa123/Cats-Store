import React from 'react'
import { connect } from 'react-redux';
import {Link} from 'react-router-dom'
 function CartIcon(props){
    return(
        <Link to='/Cats-Store/Cart'>
            <div className='cart-icon'>
                <i className='fa fa-shopping-cart fa-2x'></i>
                <span className='badge badge-danger'>{props.totalQuantity}</span>
            </div>
        </Link>
    );
}

const mapeStateToProps=(state)=>{
  
    return {
        //cartReducer key is the key of the reducer
        totalQuantity:state.cartReducer.reduce((total,item)=>total+parseInt(item.quantity),0)
    }
}

/*
    reduce method is used to flow throw cart array and parmm (total,item)=>total+item.quantity
    it map to the elements on the array item param is the item on the array and total param  is 
    the net of adding item quantity and initial value is the second param on reduce method  
*/

export default connect(mapeStateToProps,null)(CartIcon);