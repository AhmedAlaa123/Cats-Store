import React from "react";
import {Provider} from 'react-redux'
import { BrowserRouter,Route,Switch } from "react-router-dom";


// importing components
import NavBar from './components/nav-bar'

// import pages
import HomePage from './pages/Home-page'
import ProductsPage from './pages/products-page'
import CartPage from './pages/cart-page'
import ProductItemPage from "./pages/product-item-page";
import PageNotFound from './pages/page-not-found'
// import store
import Store from "./store/store";

function App() {
  return (
    
        <BrowserRouter>
          <div className=' container'>
            <NavBar/>
            <Switch>
              <Route path='/' exact component={HomePage}/>   
              <Route path='/Products' exact component={ProductsPage}/>   
              <Route path='/Cart' component={CartPage}/>
              <Route path='/Products/:id' exact component={ProductItemPage}/> 
              <Route component={PageNotFound}/>
            </Switch>
          </div>
        </BrowserRouter>
   
  );
}

function AppWithStore()
{
  return (
      <Provider store={Store}>
        <App/>
      </Provider>
  );
}

export default AppWithStore;
