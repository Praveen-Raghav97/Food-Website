import  { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";
export const   StoreContext = createContext(null)
import toast, { Toaster } from 'react-hot-toast';


const StoreContextProvider = (props) => {


    const notify = () => toast('Item added succesfully', {
        duration: 2000,
        position: 'bottom-right',
      
        // Styling
        style: {
            background: '#008000',
            color: '#fff',
            
        },
        className: '',
      
        // Custom Icon
        icon: '✅',
      
        // Change colors of success/error/loading icon
        iconTheme: {
          primary: '#000',
          secondary: '#e9e9e9',
        },
      
        // Aria
        ariaProps: {
          role: 'status',
          'aria-live': 'polite',
        },
      });

    const [cartItems,SetCartItems] = useState({});

    const addToCart = (itemId) => {
        if(!cartItems[itemId]){
            SetCartItems((prev)=>({...prev,[itemId]:1}))
        }
        else{
            SetCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        }

        notify();
    }

    const removeFromCart = (itemId) => {
        SetCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }

    const getTotalCartAmount = () =>{
        let totalAmount = 0;
        for(const item in cartItems){
            if(cartItems[item] >0){
                 let itemInfo =food_list.find((product) => product._id === item);
                 totalAmount += itemInfo.price  * cartItems[item];
            }
        }
        return totalAmount
      }

    const contextValue ={
         food_list,
         cartItems,
         SetCartItems,
         addToCart,
         removeFromCart,
         getTotalCartAmount
    }
    return(
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider


