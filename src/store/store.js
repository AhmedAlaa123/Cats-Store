import { createStore,combineReducers } from "redux";
import throttle from 'lodash.throttle'

// import reducer
import cartReducer from "../redcuers/app-reducers"
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