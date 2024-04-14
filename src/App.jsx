import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Cart from './Pages/Cart/Cart'
import Placeorder from './Pages/Placeorder/Placeorder'
import Footer from './Components/Footer/Footer'
import AppDownload from './Components/AppDownload/AppDownload'
import LoginPopUP from './Components/LoginPopUp/LoginPopUP'

const App = () => {

  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
    {showLogin?<LoginPopUP setShowLogin={setShowLogin}/>:<></>}
 <div className='app'>
      <Navbar setShowLogin={setShowLogin} />
      <Routes>
        <Route path='/' element ={<Home/>}/>
        <Route path='/Cart' element ={<Cart/>}/>
        <Route path='/order' element ={<Placeorder/>}/>
       
      </Routes>
    </div>
    <AppDownload/>
    <Footer/>
    </>
   
  )
}

export default App
