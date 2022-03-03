import React from 'react';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import './App.css';
import Header from './Component/Header';
import ProductDetails from './Component/ProductDetails';
import ProductListing from './Component/ProductListing';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <Switch>
      <Route exact path="/" component={ProductListing}  />
      <Route exact path="/product/:productId" component={ProductDetails} />
      </Switch>
      </BrowserRouter>    
    </div>
  );
}

export default App;
