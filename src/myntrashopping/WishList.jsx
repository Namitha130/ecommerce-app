import { useEffect, useState } from "react";
import ProductList from "./ProductList";

const WishList = () => {

 let [wishlist,setWishlist]= useState(null);

//  displaying products whuch is stored in wishlist
 useEffect( ()=>{
    setWishlist(JSON.parse(localStorage.getItem("wishlist")))
 },[])
    return (  
        <div className="wishlist-page">
            <h1>My Wishlist</h1>
            {
                wishlist && 
                <ProductList products={wishlist} typeOfProduct=""/>
            }
           
        </div>
    );
}
 
export default WishList;