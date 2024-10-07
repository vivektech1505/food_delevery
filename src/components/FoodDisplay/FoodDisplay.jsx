import React, { useContext } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../Context/StoreContext'

function FoodDisplay() {
    const {food_list} =useContext(StoreContext)
  return (
    <div className='food-display' id='food-display'>
        <h2>Top Display Near You</h2>
      
    </div>
  )
}

export default FoodDisplay
