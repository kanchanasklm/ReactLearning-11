

import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import { IMG_CDN_URL } from "./Constants";

import Shimmer from "./Shimmer";

import useRestaurant from "../utils/useRestaurant"


    
    const RestaurantMenu=()=>{

        const {resId} =useParams()
        const restaurant=useRestaurant(resId)


    
    return(!restaurant)? <Shimmer/> :(
        <>
        <h1>Restaurant id:{resId}</h1>
        <h2>{restaurant.name}</h2>
        <img className="image"src={IMG_CDN_URL + restaurant.cloudinaryImageId}/>
        <h2>{restaurant.area}</h2>
        <h2>{restaurant.city}</h2>
        <h3>{restaurant.avgRating} stars</h3>
        <h3>{restaurant.costForTwoMessages}</h3>

        </>
    )
}

export default RestaurantMenu;