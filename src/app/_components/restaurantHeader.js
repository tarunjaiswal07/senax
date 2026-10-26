"use client"
import Link from "next/link"
import { useEffect, useState } from "react";
import { useRouter,usePathname } from "next/navigation";
import "../restaurant/style.css";
const RestaurantHeader = () => {
    const [details, setDetails] = useState();
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        let data = localStorage.getItem("restaurantUser");
        if (!data && pathname == "/restaurant/dashboard") {
            router.push("/restaurant");
        } else if(data && pathname == "/restaurant"){
            router.push("/restaurant/dashboard");
        }
        
        else  {
            setDetails(JSON.parse(data))
        }
    }, []);

    const logout =()=>{
        // Clear the restaurant user data from local storage
        localStorage.removeItem("restaurantUser");
        // Redirect to the restaurant login page
        router.push("/restaurant");
    }
    return (
        <div className="header-wrapper">
            <div className="logo">
                <img style={{ width: '100px', height: '100px' }} src="/logo.png" alt="Logo" className="logo-image" />
            </div>
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                {
                    details && details.restaurantName ?
                    <>
                    <li><button onClick={logout}>Logout</button></li>
                     <li>
                            <Link href="/">Profile</Link>
                        </li>
                    </>
                       
                        :
                        <li>
                            <Link href="/">login/Signup</Link>
                        </li>
                }



            </ul>


        </div>
    )
}
export default RestaurantHeader;