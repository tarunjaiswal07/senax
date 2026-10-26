"use client"
import { useState } from 'react';
import { useRouter } from 'next/navigation';
const RestaurantSignUp = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [restaurantName, setRestaurantName] = useState('');
    const [restaurantAddress, setRestaurantAddress] = useState('');
    const [restaurantPhoneNumber, setRestaurantPhoneNumber] = useState('');
    const router = useRouter();
    const [error, setError] = useState(false);
    const [inputError, setInputError] = useState(false);

    const handleSignup = async () => {

        // Validate that the password and confirm password match 
         if(password !== confirmPassword){
            setInputError(true);
            return false;
            
        }else{
            setInputError(false);
        }
        if(!email || !password || !confirmPassword || !restaurantName || !restaurantAddress || !restaurantPhoneNumber){
            setError(true);
            return false;
            
        }else{
            setError(false);
        }
         
        console.log('Restaurant Name:', restaurantName);
        console.log('Email:', email);
        console.log('Password:', password);
        console.log('Confirm Password:', confirmPassword);
        console.log('Restaurant Address:', restaurantAddress);
        console.log('Restaurant Phone Number:', restaurantPhoneNumber);
        

        let response = await fetch("http://localhost:3000/api/restaurant", {

            // Specify the HTTP method and request body
            method: "POST",
            body: JSON.stringify({ restaurantName, email, password, restaurantAddress, restaurantPhoneNumber })
        });
        response = await response.json();
        console.log("server response:", response);
        // Check if the response contains a result
        if (response.result) {
            console.log(response);
            alert("Restaurant Registered successfully");
            // Remove the password from the response before storing it in local storage
            const {result} = response;
            delete result.password;
            // Store the user data in local storage
            localStorage.setItem("restaurantUser",JSON.stringify(result));
            // Redirect to the restaurant dashboard
            router.push("/restaurant/dashboard");
             
        }

       
    }
    return (
        <> 
            <h3>SignUp</h3>

            <div className="input-wrapper">
                <input type="text" placeholder="Restaurant Name" className="input-field"
                    value={restaurantName} onChange={(e) => setRestaurantName(e.target.value)}>
                </input>
                {
                error && !restaurantName && <span className="passError">Restaurant Name is required</span>
                }
            </div>

            <div className="input-wrapper">
                <input type="email" placeholder="Email" className="input-field"
                    value={email} onChange={(e) => setEmail(e.target.value)}>
                </input>
                {
                error && !email && <span className="passError">Email is required</span>
                }
            </div>
            <div className="input-wrapper">
                <input type="password" placeholder="Password" className="input-field"
                    value={password} onChange={(e) => setPassword(e.target.value)}>
                </input>
               
                {
                    
                inputError && <span className="passError">Passwords do not match</span>
                }
            </div>
            
            <div className="input-wrapper">
                <input type="password" placeholder="Confirm Password" className="input-field"
                    value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}>
                </input>
                {
                inputError && <span className="passError">Passwords do not match</span>
                }
            </div>
            <div className="input-wrapper">
                <input type="text" placeholder="Restaurant Address" className="input-field"
                    value={restaurantAddress} onChange={(e) => setRestaurantAddress(e.target.value)}>
                </input>
                {
                error && !restaurantAddress && <span className="passError">Restaurant Address is required</span>
                }
            </div>
            <div className="input-wrapper">
                <input type="text" placeholder="Restaurant Phone Number" className="input-field"
                    value={restaurantPhoneNumber} onChange={(e) => setRestaurantPhoneNumber(e.target.value)}>
                </input>
                {
                error && !restaurantPhoneNumber && <span className="passError">Restaurant Phone Number is required</span>
                }
            </div>
            <div>
                <button className="button" onClick={handleSignup}>Sign Up</button>
            </div>
        </>
    )
}
export default RestaurantSignUp;