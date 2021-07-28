import Products from './products.json'

export const  getAllProducts= async()=>{

    return await Promise.resolve(Products)
}
export const getProductById = async(id)=>{

    const product=Products.find(product=>parseInt(product.id)===parseInt(id))
    // console.log('from products',product)
    return await Promise.resolve(product)
}