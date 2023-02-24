import React, { useState,useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from "./Home.scss";
import dats from "../../data/dats.js";
import { Outlet, Link } from "react-router-dom";
const Home = ({ state, dispatch }) => {
  const { products, cart } = state;
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState(null);
  useEffect(() => {
    getUsers(dats);
  }, []);

  //Simulating making api call with useEffect
  const getUsers = dats => {
    setUsers(dats);
  };

  const bySearch = (user, search) => {
    if (search) {
      return user.name.toLowerCase().includes(search.toLowerCase());
    } else return user;
  };

  const filteredList = (users,search) => {
    return users
      .filter(user => bySearch(user, search));
  };
  return( <div class="py-10">
    <div class="container text-center mt-20 ">
</div>


<div class="container text-center -mt-10">
  <div class="row">
  <div class="col-md-6 mt-sm-5 mt-5">
  <img className="mt-5 w-full h-96 m-auto bg-contain bg-gradient-to-br bg-no-repeat text-opacity-50" src="https://vuho.com.ua/image/catalog/promo_baners/news/news%20apple%20google/3.jpg"/>
      <h3 class="text-white text-center tracking-wide text-7xl -mt-64 sm:text-9xl pt-2 indent-8 pb-2">Apple</h3>
      <Link to="/iphone"><button className=" cursore-pointer w-44 h-10 border-2 border-white rounded-lg text-white mx-auto text-center text-2xl mt-5">Купити</button></Link>
  </div>
  <div class="col-md-6 mt-sm-5 mt-5">
  <img className="mt-5 w-full h-96 m-auto bg-contain bg-gradient-to-br bg-no-repeat" src="https://itechua.com/wp-content/uploads/2018/06/Android_thumb800.jpg"alt="hookahimage"/>
      <h3 class="text-white text-center text-7xl -mt-64 sm:text-9xl pb-2">Android</h3>
      <Link to="/android"><button className=" cursore-pointer w-64 h-10 border-2 border-white rounded-lg text-white mx-auto text-center text-2xl mt-5">Купити</button></Link>
  </div>
  </div>

</div>

<div class="text-5xl text-zinc-800 text-center mt-20 font-bold">Наш каталог</div>
<div className='Catalog mt-2 d-flex align-items-start flex-column mb-3'>
        <div className='filter h-10 w-80 text-left border-2 rounded-xl mx-auto mt-5 py-2'>
        <div class="relative">
        <div class="absolute pointer-events-auto ...">
  </div>
  <div className="Appy w-full">
  <i class="bi bi-search text-lg text-gray-600 px-3"></i>
      <input className='outline-none font-bold border-none'
        onChange={e => setSearch(e.target.value)}
      />
    
    </div>
</div>
        </div>
        <div class="container text-center">
        <div class="">
<div class="w-full grid gap-y-4 row row-cols-1 row-cols-sm-2 row-cols-md-3 mt-5 mx-auto">
{
              
   filteredList(users, search).map(product => {
                return (
                  <div class="col-sm-8">
                  <div class="pb-3 border border-black rounded-3xl p-3 mt-1 " key={product.id}>
               <img className="img w-full h-80"src={product.image}/>
        <div class="card-body">
          <p class="card-text text-left pl-2 mt-4 text-2xl">{product.name}</p>
          <p class="card-text text-left pl-2">{product.material}</p>
          <p class="card-text text-left pl-2">{product.accessories}</p>
          <p class="card-text text-left pl-2">{product.shape}</p>
          <p class="card-text text-left pl-2">{product.strength}</p>
          <p class="card-text text-left pl-2">{product.weight}</p>
        </div>
        <div class="d-flex justify-content-between align-items-center mt-3 px-3">
        <div class="flex justify-content-between">  
      {cart.some((p) => p.id === product.id) ? (
         <button type="button"className="btn btn-sm btn-outline-secondary border-2 border-white bg-white" onClick={() =>
            dispatch({
              type: "REMOVE_FROM_CART",
              payload: product
            })
          }
        >
          <i class="bi bi-trash3 text-4xl text-amber-600"></i>
        </button>
      ) : (
        <button type="button"className="btn btn-sm btn-outline-secondary border-2 border-white bg-white" onClick={() =>
            dispatch({
              type: "ADD_TO_CART",
              payload: {
                id: product.id,
                image:product.image,
                name:product.name,
                qty: 1,
                price: product.price,
              }
            })
          }
        >
         <i class="bi bi-cart-plus text-neutral-500 text-4xl hover:text-neutral-500"></i>
        </button>
      )}
     
     <div className='productsbutton'>
      <button type="button"className="btn btn-sm btn-outline-secondary border-2 border-white  bg-white">
          <Link to={`/products/${product.id}`}> <i class="bi bi-eye text-neutral-500 text-4xl hover:text-neutral-500"></i></Link>
      </button>
    </div>
    <>
      {products}
    </>

      </div>  
       <p class="card-text text-neutral-500 text-2xl">{product.price}</p>
          </div>
          </div>                       
      </div>)
      
    })
    }
  </div>
</div>
  </div>
  </div>
   
  </div>
 
  )
};

Home.propTypes = {};

Home.defaultProps = {};

export default Home;