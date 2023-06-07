import { useEffect, useState } from "react";
import ProductList from "./ProductList";

function Homemyn() 
{   

    let [products , setproducts] =useState(null);
    let [error , seterror] = useState(null);
    let [pending,setpending] = useState(true)

    useEffect( ()=> {

        if (localStorage.getItem("wishlist") == null) {
            localStorage.setItem("wishlist","[]")
        }

        setTimeout( ()=> {
            fetch("http://localhost:4003/products")
            .then((res) => {return res.json()})
            .then((data) => {
                console.log(data);
                setproducts(data);
                setpending(false)
                    })

            .catch((err)=> {console.log(err); 
                            seterror(err);
                            setpending(false)
                            })
                    },1000)
       
                },[])
    
    return(
        <div className="home">
            {error!= null && <h1>404 server!!! check your internet connection</h1>}
            { pending ===true && <h1>Loading......</h1>}

           { products &&  <ProductList products={products} typeOfProduct="All products"/> }

            { products && <ProductList products={products.filter((p) => { return p.product_name.includes("kurtha")})} typeOfProduct="Kurtha Collections"/>}

            {products && <ProductList products={products.filter((p)=>{return p.product_name.includes("top")})} typeOfProduct="Tops collections"/>}
            
            {/* {products && <ProductList products={products.filter((p)=>{return p.product_name.includes("sneaker")})} typeOfProduct="Shoes collections"/>} */}
            
            {products && <ProductList products={products.filter((r)=>{return r.rating >= 4.5 })} typeOfProduct="Top rated"/>}
        </div>

       

    )   







    
}
export default Homemyn