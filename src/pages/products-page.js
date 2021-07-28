import React from "react";
import {getAllProducts} from '../api/products'
import ProductItem from "../components/product-item";
class ProductsPage extends React.Component{
   state={
       products:[]
   }
   componentDidMount= async()=>{
    await getAllProducts().then(res=>{
        this.setState({products:res})
    })
   }
    render(){
       const {products}=this.state;
       const productsList=products.map(product=>{
           return (
             <div key={product.id} className='col-md-4 ' style={{marginTop:'10px'}}>
                 <ProductItem product={product} /> 
             </div>  
           );
       })
        return (
            <div>
                <h1>Products</h1>
                <div className='row'>
                    {productsList}
                </div>
            </div>
        );
    }
}
export default ProductsPage;