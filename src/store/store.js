import { createStore,combineReducers } from "redux";
import throttle from 'lodash.throttle'
 // import Types
 import { ADD_TO_CART, DELETE_FROM_CART, PAY_NOW } from "../types/types";
// Initial State

const loadState=()=>{
    
    try{
        const state=localStorage.getItem('cart');
        if(state!==null)
        {
            return JSON.parse(state);
        }
    }catch(error){
        //ignore error
    }

    return []
    
}

const saveState=(state)=>{
    
    try{
        localStorage.setItem('cart',(JSON.stringify(state)))
    }catch(error)
    {
        console.log(error)
    }
}

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
// combine reducer is method used to combine multiple reducer with unique key for each reducer
const AppReducers=combineReducers({cartReducer:cartReducer})
// Store
const Store=createStore(AppReducers,loadState(),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
Store.subscribe( 
    throttle(
        ()=>{
            saveState(Store.getState())
    },1000)
);
export default Store;