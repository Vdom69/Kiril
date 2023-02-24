import React, { useState,useEffect } from 'react';
import { Outlet, Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
const SAMSUNG = {
  SAMSUNGS:'SAMSUNG S',
  SAMSUNGA:'SAMSUNG A',
  SAMSUNGM:'SAMSUNG M'
}

const XIAOMI = {
  XIAOMI: "XIAOMI",
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
const Android = ({ state, dispatch }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { products, cart } = state;
  const [samsung,setSAMSUNG] = useState([]);
  const [xiaomi,setXIAOMI] = useState([]);
  const [memory,setMEMORY] = useState([]);
  const [ram,setRAM] = useState([]);
  const [characteristics,setCHARACTERISTICS] = useState([]);
  const [graduationyear,setGRADUATIONYEAR] = useState([])
  const productList = [
    {
      "id": 1,
      "name": "Samsung Galaxy S23 Ultra",
      "price": 35000,
      "memory": "512",
      "samsung": "SAMSUNG S",
      "image": "https://images.samsung.com/is/image/samsung/p6pim/ru/2302/gallery/ru-galaxy-s23-s918-sm-s918bzggser-534906206?$592_472_PNG$"
    },
    {
      "id": 2,
      "name": "Samsung Galaxy S22 Ultra ",
      "price": 39000,
      "samsung": "SAMSUNG S",
      "image":"https://images.samsung.com/is/image/samsung/p6pim/ua/sm-s908bzkgsek/gallery/ua-galaxy-s22-ultra-s908-sm-s908bzkgsek-531654748?$650_519_PNG$"
    },
    {
      "id": 3,
      "name": "Samsung Galaxy S21 Ultra",
      "price": 23499,
      "samsung": "SAMSUNG S",
      "image":"https://images.samsung.com/is/image/samsung/p6pim/ru/galaxy-s21/gallery/ru-galaxy-s21-ultra-5g-g988-sm-g998bzsdser-368838205?$592_472_PNG$"
  },
    {
      "id": 4,
      "name": "Samsung Galaxy S23 Plus",
      "price": 37999,
      "samsung": "SAMSUNG S",
      "image":"https://images.samsung.com/is/image/samsung/p6pim/ru/2302/gallery/ru-galaxy-s23-s916-sm-s916blidser-534905392?$592_472_PNG$"
  },
    {
      "id": 5,
      "name": "Samsung Galaxy S22 Plus",
      "price": 21952,
      "samsung": "SAMSUNG S",
      "image":"https://images.samsung.com/is/image/samsung/p6pim/ru/2202/gallery/ru-galaxy-s22-plus-s906-412862-sm-s906blbdser-530958479?$592_472_PNG$"
  },
    {
      "id": 6,
      "name": "Samsung Galaxy S21 Plus",
      "price": 25000,
      "samsung": "SAMSUNG S",
      "image":"https://openshop.uz/uploads/products/photos/202204/apvhq50teTUY1Fq3IeTWbCzDusfscpFGCGNGuKzG.jpg"
    },
  {
      "id": 7,
      "name": "Samsung Galaxy S23",
      "price": 25000,
      "samsung": "SAMSUNG S",
      "image":"https://images.samsung.com/is/image/samsung/p6pim/ru/2302/gallery/ru-galaxy-s23-s911-sm-s911bzgdser-534904780?$592_472_PNG$"
    },
  
  {
      "id": 8,
      "name": "Samsung Galaxy S22",
      "price": 25000,
      "samsung": "SAMSUNG S",
      "image":"https://images.samsung.com/is/image/samsung/p6pim/ua/sm-s901blvdsek/gallery/ua-galaxy-s22-s901-418537-sm-s901blvdsek-533898158?$2052_1641_PNG$"
    },
    {
      "id": 9,
      "name": "Samsung Galaxy S21",
      "price": 25000,
      "samsung": "SAMSUNG S",
      "image":"https://avatars.mds.yandex.net/get-marketpic/6099350/pica6ecee997fb53daa8650302682af276d/orig"
    },
  {
      "id": 10,
      "name": "Samsung Galaxy S21 FE",
      "price": 25000,
      "samsung": "SAMSUNG S",
      "image":"https://images.samsung.com/is/image/samsung/p6pim/ua/sm-g990blvdsek/gallery/ua-galaxy-s21-fe-g990-sm-g990blvdsek-530615976?$650_519_PNG$"
    },
  {
      "id": 11,
      "name": "Samsung Galaxy S20 FE",
      "price": 25000,
      "samsung": "SAMSUNG S",
      "image":"https://skymarket.ua/image/cache/catalog/telefony/Samsung/smartfon-samsung-galaxy-s20-fe-2021-sm-g780g-128gb-red-300x300.jpg"
    },
    {
      "id": 12,
      "name": "Samsung Galaxy A52",
      "price": 11490,
      "samsung": "SAMSUNG A",
      "image":"https://www.zdnet.com/a/img/resize/146dba64d5b7adf6fb4b0c089b13f34b896a893c/2021/04/30/cdd8d93e-65de-4e15-b390-177821de4cd4/samsung-galaxy-a52-5g-header.jpg?auto=webp&fit=crop&height=1200&width=1200"
    },
    {
      "id": 13,
      "name": "Samsung A73",
      "price": 22999,
      "samsung": "SAMSUNG A",
      "image":"https://images.samsung.com/is/image/samsung/p6pim/ua/sm-a736blghsek/gallery/ua-galaxy-a73-5g-a736-sm-a736blghsek-531843395?$650_519_PNG$"
    },
    {
      "id": 14,
      "name": "Samsung A23 ",
      "price": 9499,
      "samsung": "SAMSUNG A",
      "image":"https://images.samsung.com/is/image/samsung/p6pim/ua/sm-a235fzkksek/gallery/ua-galaxy-a23-sm-a235-sm-a235fzkksek-531849245?$650_519_PNG$"
    },
    {
      "id": 15,
      "name": "Samsung A13 ",
      "price": 8099,
      "samsung": "SAMSUNG A",
      "image":"https://images.samsung.com/is/image/samsung/p6pim/ua/sm-a135fzwvsek/gallery/ua-galaxy-a13-sm-a135-sm-a135fzwvsek-531851058?$1300_1038_PNG$"
    },
    {
      "id": 16,
      "name": "Samsung A33 ",
      "price": 12999,
      "samsung": "SAMSUNG A",
      "image":"https://images.samsung.com/is/image/samsung/p6pim/ua/sm-a336blbgsek/gallery/ua-galaxy-a33-5g-a336-sm-a336blbgsek-531847005?$650_519_PNG$"
    },
    {
      "id": 17,
      "name": "Samsung A22 S",
      "price": 7299,
      "samsung": "SAMSUNG A",
      "image":"https://enot.in.ua/image/cache/catalog/samsung/a226/ghj_7_2-800x800.jpg"
    },
    {
      "id": 18,
      "name": "Samsung M53 ",
      "price": 16499,
      "samsung": "SAMSUNG M",
      "image":"https://content.rozetka.com.ua/goods/images/big/263855363.jpg"
    },
    {
      "id": 19,
      "name": "Samsung M23 ",
      "price": 10899,
      "samsung": "SAMSUNG M",
      "image":"https://content1.rozetka.com.ua/goods/images/big/263902250.jpg"
    },
    {
      "id": 20,
      "name": "Samsung M12 ",
      "price": 5500,
      "samsung": "SAMSUNG M",
      "image":"https://i.allo.ua/media/catalog/product/cache/3/image/524x494/602f0fa2c1f0d1ba5e241f914e856ff9/3/4/345345345_3.jpg"
    },
    {
      "id": 21,
      "name": "Samsung M32 ",
      "price": 10499,
      "samsung": "SAMSUNG M",
      "image":"https://i.allo.ua/media/catalog/product/cache/3/image/524x494/602f0fa2c1f0d1ba5e241f914e856ff9/6/d/6dddf3156fc6d11ce517a93fbea5d93e.jpg"
    },
    {
      "id": 22,
      "name": "Samsung M22 ",
      "price": 8900,
      "samsung": "SAMSUNG M",
      "image":"https://i.allo.ua/media/catalog/product/cache/3/image/524x494/602f0fa2c1f0d1ba5e241f914e856ff9/s/m/sm_m225fv_galaxym22_li_ght_blue_back.jpg"
    },
    {
      "id": 23,
      "name": "Samsung M52 ",
      "price": 12499,
      "samsung": "SAMSUNG M",
      "image":"https://i.allo.ua/media/catalog/product/cache/3/image/524x494/602f0fa2c1f0d1ba5e241f914e856ff9/8/9/8978978978_2.jpg"
    },
    {
      "id": 39,
      "name": "Xiaomi",
      "xiaomi": "XIAOMI",
      "price": 12499,
      "image":"https://i.allo.ua/media/catalog/product/cache/3/image/524x494/602f0fa2c1f0d1ba5e241f914e856ff9/c/3/c3s-black-back__1.jpg"
      },
      {
        "id": 40,
        "name": "Xiaomi",
        "xiaomi": "XIAOMI",
        "price": 12499,
        "image":"https://i.allo.ua/media/catalog/product/cache/3/image/524x494/602f0fa2c1f0d1ba5e241f914e856ff9/0/_/0_59_13_1.jpg"
        },
        {
          "id": 41,
            "name": "Xiaomi",
            "xiaomi": "XIAOMI",
            "price": 12499,
            "image":"https://i.allo.ua/media/catalog/product/cache/3/image/524x494/602f0fa2c1f0d1ba5e241f914e856ff9/l/d/ld0005946049_2.jpg"
          },
          {
            "id": 42,
              "name": "Xiaomi",
              "xiaomi": "XIAOMI",
              "price": 12499,
              "image":"https://i.allo.ua/media/catalog/product/cache/3/image/524x494/602f0fa2c1f0d1ba5e241f914e856ff9/l/3/l3--ghjghj_1_2_1_1_2_1_1.jpg"
            },
            {
              "id": 43,
                "name": "Xiaomi",
                "xiaomi": "XIAOMI",
                "price": 12499,
                "image":"https://i.allo.ua/media/catalog/product/cache/3/image/524x494/602f0fa2c1f0d1ba5e241f914e856ff9/7/6/76567756756756_1.jpg"
              }
  ];
  const handleFilterBySamsung = (event) => {
    const {value} = event.target
    if (samsung.includes(value)) {
      return setSAMSUNG(samsung.filter((_samsung) => _samsung !== value))
    }
    setSAMSUNG([...samsung, value])
  }

   const handleFilterByXiaomi = (event) => {
    const {value} = event.target
    if (xiaomi.includes(value)) {
      return setXIAOMI(xiaomi.filter((_xiaomi) => _xiaomi !== value))
    }
    setXIAOMI([...xiaomi, value])
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
    const withFilterBySAMSUNG = samsung.length > 0 ? productList.filter((product) => samsung.includes(product.samsung)) : productList
    const withFilterByXIAOMI = xiaomi.length > 0 ? productList.filter((product) => xiaomi.includes(product.xiaomi)) : withFilterBySAMSUNG
    const withFilterByMEMORY = memory.length > 0 ? productList.filter((product) => memory.includes(product.memory)) : withFilterByXIAOMI
    const withFilterByRAM = ram.length > 0 ? productList.filter((product) => ram.includes(product.ram)) : withFilterByMEMORY
    const withFilterByCHARACTERISTICS = characteristics.length > 0 ? productList.filter((product) => characteristics.includes(product.characteristics)) : withFilterByRAM
    const withFilterByGRADUATIONYEAR = graduationyear.length > 0 ? productList.filter((product) => graduationyear.includes(product.graduationyear)) : withFilterByCHARACTERISTICS
    return withFilterByGRADUATIONYEAR
  }
return(

<div className='Hookas mt-20 d-flex align-items-start flex-column mb-3'>
<>
<div class="d-flex mx-auto mt-3">
      <button class=" mt-3 w-10 h-10 border-zinc-800 border-2 rounded-lg" onClick={handleShow}>
      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAy0lEQVR4nO3YSw6CMBSF4X8fitHuXAawAXEBdi+ibgJjchMNYSCP2xRyvuROOijcPsgJICIiGxOAGnhZ1Ta2KifgAXS9aoEjK1Lai1+AnVVjY2fvh8eBFZxb+5/5Dw7zx1SNFM6N3FIdrcZ25dPQNdXRWvqytwMreF/bZcc+tRXwtKqsQRERyVJQat5aao4Ooc47NcfcGyn+bMQ9/U5VKjVnKCg1i4j0KZnmpFwimaYQF06mKSrOacT7f243oialXyXTHAUlUxER4esNlJFPhidtdXQAAAAASUVORK5CYII="/>
      </button>
      <Link to="/iphone"><button className="ml-10 mt-3 w-10 h-10 px-1 border-zinc-800 border-2 rounded-lg"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACXklEQVR4nO3ZT4hNURzA8c8YjI1QkgzZkIX8S0ZS/pQ/+VNSipLIwkJZWhEWwkIhCzYWlGQhLCTKylr5v7CQxEwTwjCaGeXq1pl6vd575r1333vnar71W713zznfe86555zfYZS6WYLLeIZDcshs3EdSEIfljG3oK5JIY68csR1DJSTSmCcnzMGPMhKv0CYnPCojkcYBOaGrgsRTjJMTLpWR+I5FcsSLEhLpfFkpZwwVSTwOkz8a2sLithQLManM/9K3341b2IwxRb9PxeJQzly0axIrcBWfSwyZdBidDI0apngypyJrcAHvSpTRhyuhnobQibsVvkDF8RbnsBvrsAvn8aGKMu6FejMjfYNfqmhAlvEVW7OQ2IDBFkkkIdL6t9QjMR8/WyyRFCyeE2qRGIvnEQgk4dzSUWtv7I9AIMFZddAevjqtlnhYYt2piuURSAxlsQM4FoHITRlQfKZuRezIQuRlBCKdWYh8a7HE73on+TCDEYj4H3okwZQsRHoiEFmVhciTCEROZyFyPQKR3lo3iYUciUAkySInvD4CiQT99aaMOiqkOJsd7+vNDd+OQCIJ8SkkwWtiTwQCSYltfZp6qnp49UbQ+KQg/mBBLb1yKoLGJwVxR43MwkBEvdGlDs5EIJHgmjqZGHK3rZTowwwZsK/FIgdlSDV53yzjQdZ3jNNasL3vwXQNYFkTty79IS3VMDY24Sg8GC6FGs7qfwyz9BLoIjaFJFt6bJ0Z7g2P4k2FZ7uzOh2OlPSq7XhIHQ2Exqf5sJ0YP4Ln1+IGPuIXXuMEJjeh7aOMYoT8BfcegYzf+KxLAAAAAElFTkSuQmCC"alt="hookahimage"/></button></Link>
      </div>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
        <div class="text-2xl py-3">Filters</div>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <div className='filter w-64text-left ml-1'>
        <div class="text-xl">Samsung:</div>
            <div>
              <div>
              <input class="accent-amber-600" id={SAMSUNG.SAMSUNGS} type="checkbox" checked={samsung.includes(SAMSUNG.SAMSUNGS)} value={SAMSUNG.SAMSUNGS} onChange={handleFilterBySamsung} />
              <label class="pl-2 text-lg" htmlFor={SAMSUNG.SAMSUNGS}>{SAMSUNG.SAMSUNGS}</label>
            </div>
            <div>
              <input class="accent-amber-600" id={SAMSUNG.SAMSUNGA} type="checkbox" checked={samsung.includes(SAMSUNG.SAMSUNGA)} value={SAMSUNG.SAMSUNGA} onChange={handleFilterBySamsung} />
              <label class="pl-2 text-lg" htmlFor={SAMSUNG.SAMSUNGA}>{SAMSUNG.SAMSUNGA}</label>
            </div>
            <div>
              <input class="accent-amber-600" id={SAMSUNG.SAMSUNGM} type="checkbox" checked={samsung.includes(SAMSUNG.SAMSUNGM)} value={SAMSUNG.SAMSUNGM} onChange={handleFilterBySamsung} />
              <label class="pl-2 text-lg" htmlFor={SAMSUNG.SAMSUNGM}>{SAMSUNG.SAMSUNGM}</label>
            </div>
            </div>
            <div>
            <div class="text-xl">Xiaomi:</div>
            <div>
              <div>
              <input class="accent-amber-600" id={XIAOMI.XIAOMI} type="checkbox" checked={xiaomi.includes(XIAOMI.XIAOMI)} value={XIAOMI.XIAOMI} onChange={handleFilterByXiaomi} />
              <label class="pl-2 text-lg" htmlFor={XIAOMI.XIAOMI}>{XIAOMI.XIAOMI}</label>
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
          <div class="text-lg">CHARACTERISTICS:</div>
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
            <div>
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
            <div>

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
          <p class="card-text text-left pl-2">{product.samsung}</p>
          <p class="card-text text-left pl-2">{product.xiaomi}</p>
          <p class="card-text text-left pl-2">Memory:{product.memory}</p>
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

Android.propTypes = {};

Android.defaultProps = {};

export default Android;