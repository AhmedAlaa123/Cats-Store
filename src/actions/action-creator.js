import {ADD_TO_CART, DELETE_FROM_CART, PAY_NOW} from '../types/types'

export function addProductToCartAction(productInfo,quantity){
    return{
        type:ADD_TO_CART,
        productInfo,
        quantity
    }
}
export function deleteProductFromCart(id){
    return{
        type:DELETE_FROM_CART,
        id
    }
}
export function payNow()
{
    return {
        type:PAY_NOW
    }
}