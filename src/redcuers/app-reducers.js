
import { ADDPRODUCT,DELETEPRODUCT,EMPTYTHECART } from "../types/types";
const initState={
    counter:0
}
export default function cartReducer(state=initState,action){


    if(action.type===ADDPRODUCT)
    {
        //handdling add product to cart
     return {
         counter:state.counter+1
     }
    }
    else if(action.type===DELETEPRODUCT)
    {
       
        // handdling delete product
           
    }else if (action.type===EMPTYTHECART)
    {
        return{
            counter:0
        }

    }
    console.log(state)
    return state;
}