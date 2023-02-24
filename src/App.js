import { useEffect, useReducer,useState } from "react";
import { cartReducer } from "./reducers/cartReducer";
import ReactDOM from "react-dom/client";
import Modal from 'react-bootstrap/Modal';
import { BrowserRouter as Router, Routes, Route,Link,Outlet} from "react-router-dom";
import './App.css';
import Header from './components/Header/Header';
import Home from './components/pages/Home';
import Features from './components/pages/Features';
import Pricing from './components/pages/Pricing';
import FAQs from './components/pages/FAQs';
import About from './components/pages/About';
import Login from './components/pages/Login';
import SignUp from './components/pages/SignUp';
import Cart from './components/pages/Cart';
import Layout from './components/pages/Layout';
import PrivateRoutes from './components/utils/PrivateRoutes';
import PersonList from './components/PersonList/PersonList';
import Iphone from './components/CatalogPageHome/Iphone';
import Android from './components/CatalogPageHome/Android';
import ProductPage from "./components/ProductPage/ProductPage";

function App() {
  const [state, dispatch] = useReducer(cartReducer, {
    productrs:[],
    products: [],
    cart: []
  });

  const fetchProducts = () => {

    dispatch({
      type: "ADD_PRODUCTS",

    });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (

    <div className="App">
  <Router>
  <Header/>
              <Routes>
         
             
                    <Route element={<Home state={state} dispatch={dispatch}/>} path="/" exact/>
                    <Route element={<Pricing state={state} dispatch={dispatch}/>} path="/pricing"/>
                    <Route element={<PersonList/>} path="/personList/:id"/>
                    <Route element={<FAQs/>} path="/fAQs"/>
                    <Route element={<About/>} path="/about"/>
                    <Route element={<Layout/>} path="/layout"/>
                    <Route element={<ProductPage/>} path="/products/:id"/>
                    <Route element={<Cart state={state} dispatch={dispatch}/>} path="/cart"/>
                    <Route element={<Iphone state={state} dispatch={dispatch}/>} path="/iphone"/>
                    <Route element={<Android state={state} dispatch={dispatch}/>} path="/android"/>
                    

                <Route element={<Login/>} path="/login"/>
                <Route element={<SignUp/>} path="/signUp"/>
                <Route element={<About/>} path="/about"/>
              </Routes>
          </Router>
          
    </div>

  );
}

export default App;
