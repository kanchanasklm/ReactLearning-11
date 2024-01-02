
import { restaurantList } from "./Constants";

import { RestaurantCard } from "./RestaurantCard";

import { useState,useEffect } from "react";

import Shimmer from "./Shimmer";

import { Link } from "react-router-dom";

import {filterData} from "../utils/helper";

import useOnline from "../utils/useOnline";


const Body=()=>{

    const[searchTxt,setSearchTxt]=useState("KFC")
    const[allRestaurants,setAllRestaurants]=useState([])
    const[filteredRestaurants,setFilteredRestaurants]=useState([])
    

    
    
    useEffect(()=>{
        getRestaurants();

    },[]);

    async function getRestaurants(){
        const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING");
        const json=await data.json();
        console.log(json);
        console.log(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setAllRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }
    console.log("render")

    
const isOnline=useOnline()



if(!isOnline){
       return  <h1>Offline,Please check your network connection</h1>
    }

if(!allRestaurants) return null;




    return (allRestaurants?.length===0)? (<Shimmer/>) :(
        <>
        <div className="search-container">
            <input type="search" 
                   className="search-input"
                   placeholder="search"
                   value={searchTxt}
                   onChange={(e)=>{
                    setSearchTxt(e.target.value)
                   }}/>
           
            <button onClick={()=>{
                const data=filterData(searchTxt,allRestaurants)
                console.log(data)
                setFilteredRestaurants(data)
                } }>Search</button>
                </div>
       
        <div className="restaurant-list">
           {filteredRestaurants.map((restaurant)=>{
            return(
                <Link to={"/restaurant/" + restaurant.info.id} key={restaurant.info.id}>
             <RestaurantCard {...restaurant.info} />
             </Link>
            )
           })}
       
       </div>
       </>
    );
};

export default Body;

