'use client'
import { useState } from "react";
import RestaurantLogin from "../_components/retaurantLogin";
import RestaurantSignUp from "../_components/retaurantSignUp";
import RestaurantHeader from "../_components/restaurantHeader";
import './style.css'
import Footer from "../_components/Footer";
const Restaurant = () => {
    const [login, setLogin] = useState(true);
    return (

        <>
      
        <div className="container">
            <RestaurantHeader/>
            <h1> Restaurant Login/Signup Page</h1>
            {
                login ? <RestaurantLogin /> : <RestaurantSignUp />
            }

            <div>
                <button onClick={() => setLogin(!login)} className="button-link">
                    {login ? "Don't have an account? Signup" : "Already have an account? Login"}
                </button>
            </div>
        </div>

        <Footer/>
        </>
    )
}
export default Restaurant;