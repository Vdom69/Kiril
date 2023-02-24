import React, { useState,useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Outlet, Link } from "react-router-dom";

const  IPHONE = {
  IPHONE:"IPHONE",
  IPHONEPRO:"IPHONE PRO",
  IPHONEPROMAX:"IPHONE PRO MAX",
  IPHONEMINI:"IPHONE MINI"

}
const MEMORY = {
  MEMORY1:"64",
  MEMORY2:"128",
  MEMORY3:"256",
  MEMORY4:"512"
}
const RAM = {
  RAM1:"4",
  RAM2:"6",
  RAM3:"8",
  RAM4:"12"
}
const CHARACTERISTICS = {
  HIGHDEFINITIONCAMERAS:"HIGH DEFINITION CAMERAS",
  FASTCHARGING: "FAST CHARGING",
  SUPERAMOLED: "SUPER AMOLED",
  VIDEO: "4K VIDEO",
  STEREOSPEAKERS: "STEREO SPEAKERS",
  WIRELESSCHARGING: "WIRELESS CHARGING"

}
const GRADUATIONYEAR = {
  GRADUATIONYEAR1: "2022",
  GRADUATIONYEAR2: "2023"

}
const Iphone = ({ state, dispatch }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { products, cart } = state;
  const [material, setMaterial] = useState([]);
  const [brand, setBrand] = useState([]);
  const [shape, setShape] = useState([]);
  const productList = [
    {
      "id": 24,
      "name": "Iphone 11 ",
      "iphone": "IPHONE",
      "memory": "64",
      "price": 12499,
      "image":"https://i.allo.ua/media/catalog/product/cache/3/image/524x494/602f0fa2c1f0d1ba5e241f914e856ff9/8/c/8c901999dacf4c04a72a403f6ad01e14__1.jpg"
    },
    {
      "id": 25,
      "name": "Iphone 12 ",
      "iphone": "IPHONE",
      "price": 12499,
      "image":"https://i.allo.ua/media/catalog/product/cache/3/image/524x494/602f0fa2c1f0d1ba5e241f914e856ff9/w/w/wwru_iphone12mini_q321_purple_pdp-image-1b_result_1_1_1.jpg"
    }
  ];
  const [iphone,setIPHONE] = useState([]);
  const [memory,setMEMORY] = useState([]);
  const [ram,setRAM] = useState([]);
  const [characteristics,setCHARACTERISTICS] = useState([]);
  const [graduationyear,setGRADUATIONYEAR] = useState([])

  
  const handleFilterByIphone= (event) => {
    const {value} = event.target
    if (iphone.includes(value)) {
      return setIPHONE(iphone.filter((_iphone) => _iphone !== value))
    }
    setIPHONE([...iphone, value])
  }
  const handleFiletrBymemory = (event) => {
    const {value} = event.target
    if (memory.includes(value)) {
      return setMEMORY(memory.filter((_memory) => _memory !== value))
    }
    setMEMORY([...memory, value])
  }
  const handleFiletrByram = (event) => {
    const {value} = event.target
    if (ram.includes(value)) {
      return setRAM(ram.filter((_ram) => _ram !== value))
    }
    setRAM([...ram, value])
  }
  const handleFiletrBycharacteristics = (event) => {
    const {value} = event.target
    if (characteristics.includes(value)) {
      return setCHARACTERISTICS(characteristics.filter((_characteristics) => _characteristics !== value))
    }
    setCHARACTERISTICS([...characteristics, value])
  }
  const handleFiletrBygraduationyear = (event) => {
    const {value} = event.target
    if (graduationyear.includes(value)) {
      return setGRADUATIONYEAR(graduationyear.filter((_graduationyear) => _graduationyear !== value))
    }
    setGRADUATIONYEAR([...graduationyear, value])
  }


  const productsy = () => {
    const withFilterByIPHONE = iphone.length > 0 ? productList.filter((product) => iphone.includes(product.iphone)) : productList
    const withFilterByMEMORY = memory.length > 0 ? productList.filter((product) => memory.includes(product.memory)) : withFilterByIPHONE
    const withFilterByRAM = ram.length > 0 ? productList.filter((product) => ram.includes(product.ram)) : withFilterByMEMORY
    const withFilterByCHARACTERISTICS = characteristics.length > 0 ? productList.filter((product) => characteristics.includes(product.characteristics)) : withFilterByRAM
    const withFilterByGRADUATIONYEAR = graduationyear.length > 0 ? productList.filter((product) => graduationyear.includes(product.graduationyear)) : withFilterByCHARACTERISTICS
    return withFilterByGRADUATIONYEAR

  }
return(

<div className='Hookas mt-20 d-flex align-items-start flex-column mb-3'>
<>    <div class="d-flex mx-auto mt-3">
      <button class="mt-3 w-10 h-10 border-zinc-800 border-2 rounded-lg" onClick={handleShow}>
      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAy0lEQVR4nO3YSw6CMBSF4X8fitHuXAawAXEBdi+ibgJjchMNYSCP2xRyvuROOijcPsgJICIiGxOAGnhZ1Ta2KifgAXS9aoEjK1Lai1+AnVVjY2fvh8eBFZxb+5/5Dw7zx1SNFM6N3FIdrcZ25dPQNdXRWvqytwMreF/bZcc+tRXwtKqsQRERyVJQat5aao4Ooc47NcfcGyn+bMQ9/U5VKjVnKCg1i4j0KZnmpFwimaYQF06mKSrOacT7f243oialXyXTHAUlUxER4esNlJFPhidtdXQAAAAASUVORK5CYII="/>
      </button>
      <Link to="/android"><button className="ml-10 mt-3 w-10 h-10 px-1 border-zinc-800 border-2 rounded-lg"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAABoklEQVR4nO2YsUoDQRCGvwS1Eh8gr6GgYFQkvWBho6dPEBAT0TalheDDBMEHSCnYpDA2voMoRFKcLMyF5dBIbjOziPvDD7vczc7/3+7dDQMJfxs14AQ4qhB3KrFuHA1ORC48nyPuwovLiIgzT8gb0ABWgD251hW68a5ca8i9RZx7CNGwDAw9Ma/Ahzcv813uKeZDWSMq2jME/8Z2bPFXwCTAwAS4jCX+LkB4mbfW4q8XKD4Xmu3EVuCxmXWcNrXF14FHBfG58ElyqOFQUXwuPNA08GBg4F5L/BrwaWBgDKxqGNg3EJ8LXdkRjLoUWplUjBvAjRHXv8k/NzLvibiy1xpZaP6et4AbW6MXmr+8QFP+wBZsahjw59rsJQOkHSAdIdJLTPoK5ekzyj/+kWWlYsraQBZazBWN22MZWxuolfIHw9rAwpEMEHkHuoZHqKNhoGVooKVhYAl4MRA/klwqaErfRkv8GNjWEu+bGCmIf7YQX6Auzae+J2AwR99n4MX1gR3tpu5PqFqvxG7ZTJEMEHkHqlaMsduWU1StGBdeaSYQCV+mp6GMxCV1hgAAAABJRU5ErkJggg=="alt="hookahimage"/></button></Link>
      </div>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
        <div class="text-2xl py-3">Filters</div>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <div className='filter w-44 text-left ml-10'>
          <div>
            <div class="text-xl">Brands:</div>
            <div>
              <div>
              <div class="text-xl">Apple:</div>
          <div>
            <div>
            <input class="accent-amber-600" id={IPHONE.IPHONE} type="checkbox" checked={iphone.includes(IPHONE.IPHONE)} value={IPHONE.IPHONE} onChange={handleFilterByIphone} />
            <label class="pl-2 text-lg"htmlFor={IPHONE.IPHONE}>{IPHONE.IPHONE}</label>
          </div>
          <div>
            <input class="accent-amber-600" id={IPHONE.IPHONEPRO} type="checkbox" checked={iphone.includes(IPHONE.IPHONEPRO)} value={IPHONE.IPHONEPRO} onChange={handleFilterByIphone} />
            <label class="pl-2 text-lg"htmlFor={IPHONE.IPHONEPRO}>{IPHONE.IPHONEPRO}</label>
          </div>
          <div>
            <input class="accent-amber-600" id={IPHONE.IPHONEPROMAX} type="checkbox" checked={iphone.includes(IPHONE.IPHONEPROMAX)} value={IPHONE.IPHONEPROMAX} onChange={handleFilterByIphone} />
            <label class="pl-2 text-lg"htmlFor={IPHONE.IPHONEPROMAX}>{IPHONE.IPHONEPROMAX}</label>
          </div>
          <div>
            <input class="accent-amber-600" id={IPHONE.IPHONEMINI} type="checkbox" checked={iphone.includes(IPHONE.IPHONEMINI)} value={IPHONE.IPHONEMINI} onChange={handleFilterByIphone} />
            <label class="pl-2 text-lg"htmlFor={IPHONE.IPHONEMINI}>{IPHONE.IPHONEMINI}</label>
          </div>
          </div>
          <div>
            <div class="text-xl">Memory:</div>
            <input class ="accent-amber-600" id={MEMORY.MEMORY1} type="checkbox" checked={memory.includes(MEMORY.MEMORY1)} value={MEMORY.MEMORY1} onChange={handleFiletrBymemory} />
            <label class ="pl-2 text-lg"htmlFor={MEMORY.MEMORY1}>{MEMORY.MEMORY1}</label>
          </div>
          <div>
            <input class ="accent-amber-600" id={MEMORY.MEMORY2} type="checkbox" checked={memory.includes(MEMORY.MEMORY2)} value={MEMORY.MEMORY2} onChange={handleFiletrBymemory} />
              <label class ="pl-2 text-lg"htmlFor={MEMORY.MEMORY2}>{MEMORY.MEMORY2}</label>
        </div>
        <div>
            <input class ="accent-amber-600" id={MEMORY.MEMORY3} type="checkbox" checked={memory.includes(MEMORY.MEMORY3)} value={MEMORY.MEMORY3} onChange={handleFiletrBymemory} />
            <label class ="pl-2 text-lg"htmlFor={MEMORY.MEMORY3}>{MEMORY.MEMORY3}</label>
        </div>
        <div>
        <input class ="accent-amber-600" id={MEMORY.MEMORY4} type="checkbox" checked={memory.includes(MEMORY.MEMORY4)} value={MEMORY.MEMORY4} onChange={handleFiletrBymemory} />
            <label class ="pl-2 text-lg"htmlFor={MEMORY.MEMORY4}>{MEMORY.MEMORY4}</label>
        </div>
        <div class="text-xl">RAM:</div>
        <div>
            <input class ="accent-amber-600" id={RAM.RAM1} type="checkbox" checked={ram.includes(RAM.RAM1)} value={RAM.RAM1} onChange={handleFiletrByram} />
            <label class ="pl-2 text-lg"htmlFor={RAM.RAM1}>{RAM.RAM1}</label>
          </div>
          <div>
          <input class ="accent-amber-600" id={RAM.RAM2} type="checkbox" checked={ram.includes(RAM.RAM2)} value={RAM.RAM2} onChange={handleFiletrByram} />
            <label class ="pl-2 text-lg"htmlFor={RAM.RAM2}>{RAM.RAM2}</label>
          </div>
          <div>
          <input class ="accent-amber-600" id={RAM.RAM3} type="checkbox" checked={ram.includes(RAM.RAM3)} value={RAM.RAM3} onChange={handleFiletrByram} />
            <label class ="pl-2 text-lg"htmlFor={RAM.RAM3}>{RAM.RAM3}</label>
          </div>
          <div>
          <input class ="accent-amber-600" id={RAM.RAM4} type="checkbox" checked={ram.includes(RAM.RAM4)} value={RAM.RAM4} onChange={handleFiletrByram} />
            <label class ="pl-2 text-lg"htmlFor={RAM.RAM4}>{RAM.RAM4}</label>
          </div>
          <div class="text-xl">CHARACTERISTICS:</div>
            <div>
              <div>
              <input class="accent-amber-600" id={CHARACTERISTICS.HIGHDEFINITIONCAMERAS} type="checkbox" checked={characteristics.includes(CHARACTERISTICS.HIGHDEFINITIONCAMERAS)} value={CHARACTERISTICS.HIGHDEFINITIONCAMERAS} onChange={handleFiletrBycharacteristics} />
              <label class="pl-2 text-lg" htmlFor={CHARACTERISTICS.HIGHDEFINITIONCAMERAS}>{CHARACTERISTICS.HIGHDEFINITIONCAMERAS}</label>
            </div>
            </div>
            <div>
            <input class="accent-amber-600" id={CHARACTERISTICS.FASTCHARGING} type="checkbox" checked={characteristics.includes(CHARACTERISTICS.FASTCHARGING)} value={CHARACTERISTICS.FASTCHARGING} onChange={handleFiletrBycharacteristics} />
              <label class="pl-2 text-lg" htmlFor={CHARACTERISTICS.FASTCHARGING}>{CHARACTERISTICS.FASTCHARGING}</label>
            </div>
            <div>
            <input class="accent-amber-600" id={CHARACTERISTICS.SUPERAMOLED} type="checkbox" checked={characteristics.includes(CHARACTERISTICS.SUPERAMOLED)} value={CHARACTERISTICS.SUPERAMOLED} onChange={handleFiletrBycharacteristics} />
              <label class="pl-2 text-lg" htmlFor={CHARACTERISTICS.SUPERAMOLED}>{CHARACTERISTICS.SUPERAMOLED}</label>
            </div>
            <div>
            <input class="accent-amber-600" id={CHARACTERISTICS.VIDEO} type="checkbox" checked={characteristics.includes(CHARACTERISTICS.VIDEO)} value={CHARACTERISTICS.VIDEO} onChange={handleFiletrBycharacteristics} />
              <label class="pl-2 text-lg" htmlFor={CHARACTERISTICS.VIDEO}>{CHARACTERISTICS.VIDEO}</label>
            </div>
            <div>
            <input class="accent-amber-600" id={CHARACTERISTICS.STEREOSPEAKERS} type="checkbox" checked={characteristics.includes(CHARACTERISTICS.STEREOSPEAKERS)} value={CHARACTERISTICS.STEREOSPEAKERS} onChange={handleFiletrBycharacteristics} />
              <label class="pl-2 text-lg" htmlFor={CHARACTERISTICS.STEREOSPEAKERS}>{CHARACTERISTICS.STEREOSPEAKERS}</label>
</div>
            </div>
            ... <div>

<input class="accent-amber-600" id={CHARACTERISTICS.WIRELESSCHARGING} type="checkbox" checked={characteristics.includes(CHARACTERISTICS.WIRELESSCHARGING)} value={CHARACTERISTICS.WIRELESSCHARGING} onChange={handleFiletrBycharacteristics} />
              <label class="pl-2 text-lg" htmlFor={CHARACTERISTICS.WIRELESSCHARGING}>{CHARACTERISTICS.WIRELESSCHARGING}</label>
            </div>
            <div class="text-xl">GRADUATIONYEAR:</div>
            <div>
              <div>
              <input class="accent-amber-600" id={GRADUATIONYEAR.GRADUATIONYEAR1} type="checkbox" checked={graduationyear.includes(GRADUATIONYEAR.GRADUATIONYEAR1)} value={GRADUATIONYEAR.GRADUATIONYEAR1} onChange={handleFiletrBygraduationyear} />
              <label class="pl-2 text-lg" htmlFor={GRADUATIONYEAR.GRADUATIONYEAR1}>{GRADUATIONYEAR.GRADUATIONYEAR1}</label>
            </div>
            </div>
            <div>
            <input class="accent-amber-600" id={GRADUATIONYEAR.GRADUATIONYEAR2} type="checkbox" checked={graduationyear.includes(GRADUATIONYEAR.GRADUATIONYEAR2)} value={GRADUATIONYEAR.GRADUATIONYEAR2} onChange={handleFiletrBygraduationyear} />
              <label class="pl-2 text-lg" htmlFor={GRADUATIONYEAR.GRADUATIONYEAR2}>{GRADUATIONYEAR.GRADUATIONYEAR2}</label>
            </div>
          </div>
        </div>
        </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
    <div class="container text-center">
      <div class="">
        
 
        <div class="w-full grid gap-y-4 row row-cols-1 row-cols-sm-2 row-cols-md-3 mt-5 mx-auto">

{
              productsy().map(product => {
                return (
                  <div class="col-sm-8">
                  <div class="pb-3 border border-black rounded-3xl p-2 mt-1" key={product.id}>
               <img className="img w-full h-80"src={product.image}/>
              
        <div class="card-body">
          <p class="card-text text-left pl-2 mt-4 text-2xl">{product.name}</p>
          <p class="card-text text-left pl-2">{product.iphone}</p>

          <p class="card-text text-left pl-2">Memory: {product.memory}</p>
          <p class="card-text text-left pl-2">{product.ram}</p>
          <p class="card-text text-left pl-2">{product.characteristics}</p>
          <p class="card-text text-left pl-2">{product.graduationyear}</p>
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
          <Link to={`/products/${product.id}`}><i class="bi bi-eye text-neutral-500 text-4xl hover:text-neutral-500"></i></Link>
      </button>
    </div>
    <>
      {products}
    </>

      </div>  
       <p class="card-text text-neutral-500 text-2xl">{product.price}</p>
          </div>            
      </div>
      </div>
      )
      
    })
    }
  </div>
</div>
  </div>
  
  </div>
  
  )
};

Iphone.propTypes = {};

Iphone.defaultProps = {};

export default Iphone;