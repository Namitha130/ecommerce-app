import { useRef,useState } from "react";
import { Link,useNavigate } from "react-router-dom";
const SignupMyntra = () => {

        let username =useRef();
        let email =useRef();
        let password =useRef();
        let phone =useRef();
        let address =useRef();
        let locality = useRef();
        let dob =useRef();

        let [verified,setverified] = useState(false);
        let navigate=useNavigate();

        let verifyEmail =() =>{
            setTimeout(()=>{
                setverified(true)
                
            },2000)
        }
let handleSignup = (e) =>{
    e.preventDefault();
    if (new Date() < new Date(dob.current.value)) {
        alert("Tnvalid birth date")
        return
    }

    let newUser = {
        username: username.current.value,
        email: email.current.value,
        phone: phone.current.value,
        password: password.current.value,
        address: address.current.value,
        locality: locality.current.value,
        dob: dob.current.value

    }
    console.log(newUser);
    fetch("http://localhost:4004/usersdata" ,
            {
                method: "POST",
                headers : {"Content-Type" : "application/json"},
                body: JSON.stringify(newUser)
            })
            .then(()=>{
                alert("Your successfully created an account");
                navigate("/login");
            })
  
}
    return (  
        <div className="body">
            <div className="signup-form">
                <h1>Signup</h1>
                <hr/>
        <form onSubmit={handleSignup}>
        
            <input type="text" placeholder="Username" ref={username} required />
            <input type="email" placeholder="Email address" ref={email} required/>
            <input type="password" placeholder="Password" ref={password} required/> 
            <input type="tel" placeholder="Phone number" ref={phone} maxlength="10" minlength="10" required/>
            <input type="date" placeholder="Date of Birth" ref={dob} required/>
            <input type="text" placeholder="Address" ref={address} required/>
            <input type="text" placeholder="Locality" ref={locality} required/>

            <input type="submit" value="Sign-up"/>
        </form>
        <span>verify email to submit the form</span>
        <br/>
              <button onClick={verifyEmail}>
                    Verify email
              </button>  
             
               <p> Already have an account? <Link to="/login" style={{color:" #fb0567"}}> Login </Link></p>
    </div> 
        </div>
    );
}
 
export default SignupMyntra;