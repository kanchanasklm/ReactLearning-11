

import { useState } from "react";

import Logo from "../assets/images/food-villa.png";

import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";

const Title=()=>{
    return(
       <a href="/">
        <img className="logo" alt="logo" src={Logo}/>
       </a>
    )
}

const Header=()=>{

    const[isLoggedIn,setIsLoggedIn]=useState(false)

    const isOnline=useOnline()
 
    return(
        <div className="header">
        <Title/>
        <div className="nav-items">
            <ul>
            {/* <a href="/about"><li>About</li></a> */}
            <Link to="/"><li>Home</li></Link>
            <Link to="/about" ><li>About</li></Link>
            <Link to="/contact" ><li>Contact</li></Link>
            <li>Cart</li>
            <Link to="/instamart" ><li>Instamart</li></Link>
            </ul>
        </div>
        {/* we write only js expressions inside curly braces .we dont write js statements
        like 
        let a=10 */}
        {/* {isLoggedIn?<button>LogOut</button>:<button>LogIn</button>} */}

        <h1>{isOnline?"✅":"⛔"}</h1>

        {isLoggedIn ?(
        <button onClick={()=>
        setIsLoggedIn(false)}>LogOut</button>
        ):
        (<button onClick={()=>
            setIsLoggedIn(true)}>LogIn</button>
            )
        }
        </div>
    );
};

export default Header;