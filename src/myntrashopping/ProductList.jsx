import { useEffect,useState } from "react";
import { Link } from "react-router-dom";

const ProductList = ( {products, typeOfProduct}) => {
 
    let [wishlistId,setWishlistId]= useState([]);
    let[altered,setAltered ]= useState(0);

    useEffect( ()=>{
        let wishlist = JSON.parse(localStorage.getItem("wishlist"))
        setWishlistId(wishlist.map((m)=>{return m.id}))
    },[altered])

    let add =(product) =>{
        let wishlist = JSON.parse(localStorage.getItem("wishlist"));
        wishlist.push(product);
        localStorage.setItem("wishlist",JSON.stringify(wishlist));
        setAltered(altered+1);
    }
    let remove = (id) =>{
        console.log(window.location.pathname);
        if(window.location.pathname=="/wishlist")
        {
            let wishlist = JSON.parse(localStorage.getItem("wishlist"));
            wishlist = wishlist.filter((m)=>{return m.id !== id});
            localStorage.setItem("wishlist",JSON.stringify(wishlist));
            setAltered(altered+1);
        }
        else
        {
            alert("please visit Wishlist page to remove")
        }
    }

    // let handleAddtoWishlist = (product)=>{
    //     let wishlist = JSON.parse(localStorage.getItem("wishlist"));
    //          wishlist.push(product);
    //          localStorage.setItem("wishlist",JSON.stringify(wishlist));
    //          alert("product added to your wishlist")
    // }
    return (  
    <div>
    <h2>{typeOfProduct}</h2>
    <div className="all-products">
        {products.map( (product) =>{
            return(
                    <div className="product1">
                        <Link to={`/productdetails/${product.id}`}>
                        <img src={product.img} alt="" width="250px" height="300px"/>
                        </Link>
                        
               {
                wishlistId.includes(product.id) ?
                    <button id="Remove" onClick={()=>{ remove(product.id)}}>
                    <h5> <i class='bx bxs-heart'></i> Wishlisted </h5> 
                    </button>
                :
                    <button id="Add" onClick={()=>{ add(product)}} >
                    <i class='bx bx-heart' ></i> Wishlist  
                    </button>
               }
                    {/* <button id="Add" onClick={()=>{ handleAddtoWishlist(product)}} >
                    <i class='bx bx-heart' ></i> Wishlist  
                    </button>   */}
                    
                      
                    <Link to={`/productdetails/${product.id}`}>
                        <h3> {product.brand}</h3>
                        <p> {product.product_name}</p>
                        <h5>Rs. {product.price}</h5>
                    </Link>
    
                    </div>
                
            )
        })}
            </div>
    </div>
    );
}
 
export default ProductList;