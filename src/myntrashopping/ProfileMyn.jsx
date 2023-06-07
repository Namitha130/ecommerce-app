import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProfileMyn = () => {
    let [userDetails,setUserDetails] = useState(null);
    let navigate =useNavigate();
    useEffect ( ()=>{
        let userDetails = JSON.parse(localStorage.getItem("userdetails"));
        setUserDetails(userDetails)
    },[])


    let handleLogout = ()=>{
   
        localStorage.removeItem("userdetails");
        alert("LogOut successfully")

        // window.location.href = "/login"
        navigate("/login");
    }
    return ( 
        <div>
            {userDetails &&
                <div className="user-details">
                <h1>{userDetails.username}</h1>
                <p>{userDetails.email}</p>
                <p>{userDetails.phone}</p>
                <p>{userDetails.address}</p>

            </div>
            }
            <button onClick={handleLogout} id="logout">Logout</button>
        </div>
     );
}
 
export default ProfileMyn;