import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [item, setitem] = useState(0)

  return (
    <div className="App">
      <Counter item = {item}
      setitem = {setitem}/>
      <Rtscads item = {item}
      setitem = {setitem}/>
    </div>
  )
}

function Counter({item, setitem}) {
 

  return (
    <div className="name-user">
      <h3 className="top-menu">Start Bootstrap</h3>
      <p className="sm-change">Home</p>
      <p className="sm-change">About</p>
      <p className="sm-change">Shop</p>
      <div className="cart-align">
        <button 
          onClick={() => setitem(item-1)} 
          className="btn-onlick">
          <img className='cart-org' 
          src = "./images/photos.png" 
          alt="cart" />
          {item}
          </button>
      </div>
    </div>
  );
}

function Rtscads({item,setitem}){
  const cart_pics = [
    { 
    pic : "https://img.etimg.com/thumb/msid-59424968,width-640,resizemode-4,imgsize-182738/nokia-1100.jpg",
    price: 2000,
    cart: "AddCart"
    },
    { 
    pic : "https://www.notebookcheck.net/typo3temp/_processed_/d/e/csm_4_zu_3_Nothing_Phone_1_f9dcd332c7.jpg",
    price: 25000,
    cart: "AddCart"
    },
    {
    pic : "https://media.4rgos.it/i/Argos/1146286_R_Z001A?w=750&h=440&qlt=70",
    price: 15000,
    cart: "AddCart"
    },
    {
    pic : "https://www.reliancedigital.in/medias/Oppo-A54-Smart-Phone-64GB-4GB-RAM-Starry-Blue-491996536-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxNzE0OTh8aW1hZ2UvanBlZ3xpbWFnZXMvaGI2L2hlZC85NTI4Mzg1NzMyNjM4LmpwZ3wxMDBkMzlhMTA5OWNiZTgzYWFkZWNmNDVmYWM0MDY0MjI3ZmM2OTNmMzYzMjJkYjFiY2ZjODVmZmUyMGI3OWFj",
    price: 13000,
    cart: "AddCart"
    },
    {
    pic : "https://5.imimg.com/data5/SELLER/Default/2022/8/DJ/WG/FP/158788361/100-new-original-oneplus-nord-ce-2-lite-5g-price-500x500.jpg",
    price: 27000,
    cart:"AddCart"
    },
    {
    pic : "https://m.media-amazon.com/images/I/71AvQd3VzqL._SX425_.jpg",
    price: 30000,
    cart: "AddCart"
    },
    {
    pic : "https://www.vodafone.com.au/images/devices/apple/iphone-14-pro/iphone-14-pro-deep-purple-feature1-m.jpg",
    price: 65000,
    cart: "AddCart"
    },
];
  return(
    <div>
      {cart_pics.map((all) => {
          return <Createcart
          pic = {all.pic}
          price = {all.price}
          cart  = {all.cart}
          item = {item}
          setitem = {setitem}
          />

      })}
    </div>
  )
}

function Createcart({pic, price, cart,item,setitem}){
  const [items, setitems] = useState(0);
  return(
   <div  className='allforone'>
    <img className="user-img" src={pic} />
    <h3 className="user-name">{price} </h3>
    <button onClick = {() => setitem(item+1)}>{cart}</button>
   </div>
  )
}

export default App
