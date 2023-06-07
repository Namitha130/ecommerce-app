//! --------------------------Myntra shopping cart----------------------------------
import './App.css';

import Homemyn from './myntrashopping/Homemyn';
import LoginMyntra from './myntrashopping/LoginMyntra';
import SignupMyntra from './myntrashopping/SignupMyntra';
import Navmyn from './myntrashopping/Navmyn';
import ProductDetails from './myntrashopping/ProductDetails';
import ProfileMyn from './myntrashopping/ProfileMyn';

import WishList from './myntrashopping/WishList';
import './myntrashopping/styles/MyntraStyles.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom';

function App() 
{
  return (
      <BrowserRouter>
      <Navmyn/>
          <div className="App">
            <Routes>
                <Route path="/" element={<Homemyn/>}></Route>
                <Route path="/profilemyn" element={<ProfileMyn/>}></Route>
                <Route path="/wishlist" element={<WishList/>}></Route>
                <Route path="/productdetails/:id" element={<ProductDetails/>}></Route>
                <Route path="/login" element={<LoginMyntra/>}></Route>
                <Route path="/signup" element={<SignupMyntra/>}/>
            </Routes>
          
        </div> 
      </BrowserRouter>  
  );
}


//! -----------------------------------spotify webpage---------------------


// import WheatherFetch from './wheatherapp/WheatherFetch';

// function App() {
//   return (
//     <div className="App">
         
//           <WheatherFetch/>
//     </div>
//   );
// }
export default App;
