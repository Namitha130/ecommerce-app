import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"

function Navmyn() 
{

   let [profileType, setProfileType] = useState(null);

   // console.log("navbar rerender");
 
   useEffect(()=>{
                  if(localStorage.getItem("userdetails")==null)
                  {
                     setProfileType(false);
                  }
                  else
                  {
                     setProfileType(true);
                  }
   })
                     
               

let handleLogout = ()=>{
      localStorage.removeItem("userdetails");
      window.location.href = "/login"
      alert("LogOut successfully");
      
   }
   return(
    <nav>
         <div id="logo">
          <Link to="/"><img src="https://onlinemediacafe.com/wp-content/uploads/2021/05/Myntra-logo-1024x740.png" alt="logo"/> </Link>  
         </div>
          
          <div id="menu-bar">
            <ul>
               <li> <Link to=""> MEN </Link> </li>
               <li> <Link to=""> WOMEN </Link> </li>
               <li> <Link to=""> KIDS </Link> </li>
               <li> <Link to=""> HOME&LIVING </Link> </li>
               <li> <Link to=""> BEAUTY </Link> </li>
               <li> <Link to=""> STUDIO </Link> </li>
            </ul>
          </div>

         <div id="search-bar">
               <i class='bx bx-search' ></i>
               <input type="text" placeholder="Search for products, brands and more" />     
         </div>

         <div id="side-menu">

      <Link to="/profilemyn" id="hover-profile">
         <div>
               <i class='bx bx-user'></i>
               <h6>Profile</h6>
         </div>
      
         { !profileType ?
            // localStorage.getItem("userdetails") == null ? 
               <div id="hideout-profile-before">
                        <h3>Welcome</h3>
                        <p>to access account or manage orders </p>  
                           <Link to="/login">
                              <button> LOGIN / SIGNUP</button>
                           </Link>
                           <hr/>
               </div> 
                  :
               <div id="hideout-profile-after">
                  <h3>Namitha T P</h3>
                  <p>8123578130 </p>  
                     
                     <hr/>
                  <p> orders</p>
                  <p> Wishlist</p>
                  <p onClick={handleLogout}>Logout</p>
               </div>
            } 
         </Link>
         {/* If hideout profile is sibling to profile */}

            {/* <div id="hideout-profile">
              <h1>Welcome</h1>
              <p>to access account or manage orders </p>  
               <Link to="/login"><button> Login/signup</button></Link>
            </div> */}

            <Link to="/wishlist" id="wishlist">
               <div>
                     <i class='bx bx-heart'></i>
                     <h6> Wishlist</h6>
                  </div>
            </Link>

               <div id="bag">
               <i class='bx bx-shopping-bag'></i>
               <h6> Bag</h6>
               </div>
         </div>

         

    </nav>
   
   ) 
}
export default Navmyn