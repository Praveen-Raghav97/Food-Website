import React, { useContext } from 'react'
import './Placeorder.css'
import { StoreContext } from '../../Context/StoreContext'
const Placeorder = () => {

  const{getTotalCartAmount}= useContext(StoreContext);
  return (
    <form className='placeorder'>
      <div className="place-order-left">
      <p className='placeorder-title'>Delevery Infromation</p>
        <div className="multi-fields">
          <input type="text"  placeholder='First Name'/>
          <input type="text"  placeholder='Last Name'/>
        </div>
        <input type="text" placeholder='Email address' />
        <input type="text" placeholder='Street' />
        <div className="multi-fields">
          <input type="text"  placeholder='City Name'/>
          <input type="text"  placeholder='State Name'/>
        </div>
        <div className="multi-fields">
          <input type="text"  placeholder='Zip Code'/>
          <input type="text"  placeholder='Country'/>
        </div>
        <input type="number" placeholder='Phone Number' />
      </div>
      <div className="place-order-right">
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
                  <b>Rs.{getTotalCartAmount()===0?0:getTotalCartAmount()+10}0</b>
                </div>
                <button>PROCEED To Payment</button>
            </div>
      </div>
    </form>
  )
}

export default Placeorder
