import React, { useState } from 'react'
import './Home.css'
import Header from '../../Components/Header/Header'
import ExploreMenu from '../../Components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../Components/FoodDisplay/FoodDisplay'
const Home = () => {
  const [category,setCategory] = useState("all");
  return (
    <>
      <Header/>
      <ExploreMenu category ={category} setCategory={setCategory} />
      <FoodDisplay category ={category}/>
   </>
  )
}

export default Home
