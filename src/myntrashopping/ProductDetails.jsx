import { useEffect, useState } from "react";
// import ProductList from "./ProductList";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
    // route parameters
    let {id} =useParams();
    let [product , setproduct] =useState(null);
    let [error , seterror] = useState(null);
    let [pending,setpending] = useState(true);
   let MRP = 2;
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
    useEffect( ()=> {
        setTimeout( ()=> {
            fetch("http://localhost:4003/products/"+ id)
            .then((res) => {return res.json()})
            .then((data) => {
                console.log(data);
                setproduct(data);
                setpending(false)
                    })

            .catch((err)=> {console.log(err); 
                            seterror(err);
                            setpending(false)
                            })
                    },1000)
       
                },[])
    return ( 
        <div>
            
        {error!= null && <h1>404 server!!! check your internet connection</h1>}
        { pending ===true && <h1>Loading......</h1>}
            {
                product && 
                <section className="product-component">
                    <div className="product-image">
                            <img src={product.img} alt="" />
                    </div>
                    <div className="product-content">
                        <h2> {product.brand}</h2>
                        <h3>{product.product_name}</h3>
         
                        <div className="rate-box">
                        <h5>{product.rating} <i class='bx bxs-star'></i> <span>1.1k Ratings</span> </h5>
                        </div>

                        <hr style={{boxShadow:"revert-layer" , marginBottom:"20px"}}/>
                                               
                        <h2> ₹ {product.price} <b style={{color:"grey", fontWeight:"normal",fontSize:"20px"} }> MRP</b>  <strike> {product.price *MRP }</strike></h2>
                       <p>inclusive of all taxes</p>

                        <div className="size-selection-box">
                            <h4>SELECT SIZE</h4>
                             <div className="size-box">XS</div>
                             <div className="size-box">S</div>
                             <div className="size-box">M</div>
                             <div className="size-box">L</div>
                             <div className="size-box">XL</div>
                             <div className="size-box">XXL</div>
                             
                        </div>
                        
                        <div className="bag-wishlist-div">
                            <button className="add-bag">
                                <i class='bx bxs-shopping-bag' style={{color:"#fffbfb"}}  ></i>
                                ADD TO BAG
                            </button>

                            {
                                wishlistId.includes(product.id) ?
                                <button id="wishlist-remove" onClick={()=>{ remove(product.id)}}>
                                <h5> <i class='bx bxs-heart'></i> Wishlisted </h5> 
                                </button>
                            :
                                <button id="wishlist-add" onClick={()=>{ add(product)}} >
                                <i class='bx bx-heart' ></i> Wishlist  
                                </button>
                            }
                          
                       
                             {/* <button className="wishlist" >
                                <i class='bx bx-heart' ></i> Wishlist  
                             </button> */}
                        </div>
                        
                    </div>
                </section>
            }    
        </div>
     );
}
 
export default ProductDetails;