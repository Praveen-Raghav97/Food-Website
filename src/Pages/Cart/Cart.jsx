import React, { useContext } from 'react'
import "./Cart.css"
import { StoreContext } from '../../Context/StoreContext';
import {useNavigate} from 'react-router-dom'
const Cart = () => {
    const { cartItems, food_list, removeFromCart,getTotalCartAmount} = useContext(StoreContext);

    const navigate= useNavigate();
  return (
   <div className="cart">
     <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (

              <>
               <div className="cart-items-title cart-items-item">
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>Rs.{item.price}0</p>
                  <p>{cartItems[item._id]}</p>
                  <p>Rs.{item.price  * cartItems[item._id]}0</p>
                  <p onClick={()=>removeFromCart(item._id)} className='cross'>x</p>
                </div>
                <hr />
              </>
               
                



                )
          }
        })}
        </div>
        <div className="cart-bottom">
            <div className="cart-total">
            <h2>Cart Total</h2>
                  <div className="cart-details-total">
                  <p>SubTotal</p>
                  <p>Rs.{getTotalCartAmount()}0</p>
                </div>
                <hr />
                <div className="cart-details-total">
                  <p>Delevery Fee</p>
                  <p>Rs.{getTotalCartAmount()===0?0:100}</p>
                </div>
                <hr />
                <div className="cart-details-total">
                  <b>Total</b>
                  <b>Rs.{ getTotalCartAmount()===0?0:getTotalCartAmount()+10}0</b>
                </div>
                <button onClick={()=>navigate('/order')} >PROCEED To CHECKOUT</button>
            </div>
            <div className="cart-promocode">
            <p>If you have  a promocode, Enter it here</p>
            <div className="cart-promocode-input">
            <input type="text" placeholder='promo code' />
                  <button>Submit</button>
            </div>
            </div>
        </div>
   </div>
  )
}

export default Cart
