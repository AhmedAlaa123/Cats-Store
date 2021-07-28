 // import Types
 import { ADD_TO_CART, DELETE_FROM_CART, PAY_NOW } from "../types/types";

// Reducer
const cartReducer=(state,action)=>{
    let products=[]
    if(action.type===ADD_TO_CART)
    {
        const index=state.findIndex(item=>item.product.id===action.productInfo.id)
        
        if(index>-1)
        {
            state[index].quantity+=parseInt(action.quantity);
            products=[...state];
        }
        else
        {
            products=[...state,{product:action.productInfo,quantity:parseInt(action.quantity)}]
        }
        // console.log('products',products)
        
        return products               
    }
    else if(action.type===DELETE_FROM_CART)
    {
        products=state.filter(item=>item.product.id!==action.id);
        console.log('products',products)
        return products;
    }
    else if(action.type===PAY_NOW)
    {
        return []
        
    }
    if(state===undefined)return []
    return state;
}
export default cartReducer;