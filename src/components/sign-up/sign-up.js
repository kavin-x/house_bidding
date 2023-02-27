import { useState } from "react";
import { createAuthUserWithEmailAndPassword } from "../../utils/firebase";
import './sign-up.css';
import "bootstrap/dist/css/bootstrap.min.css"


const defaultFormFields = {
    username : "",
    email: "",
    password: "",
    confirmPassword:""
}

function SignUp(){
    const [formFields,setFormFields] = useState(defaultFormFields);
    const {username,email,password,confirmPassword } = formFields;

    const handleChange = (event) => {
        const {name,value} = event.target;
        setFormFields({...formFields,[name]:value});
        console.log(formFields);
    }
     
    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleSubmit = async (event) => {
       event.preventDefault();
       if(password !== confirmPassword){
        alert("Confirm password and password are not matched");
       }
       try{
        await createAuthUserWithEmailAndPassword(email,password);
        resetFormFields();
       }catch(error){
        if(error.code === 'auth/email-already-in-use'){
            alert("Account is already in use");
          }else{
          console.log('user creation error',error);
          }
       }
    }

    return(
        <div className="Auth-form-container">
        <form className="Auth-form" onSubmit={handleSubmit}>
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign Up</h3>
            <div className="text-center">
              Already registered?{" "}
              <span className="link-primary">
                Sign In
              </span>
            </div>
            <div className="form-group mt-3">
              <label>Display Name</label>
              <input
                type="text"
                className="form-control mt-1"
                placeholder="Your Name"
                name="username"
                value={username}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group mt-3">
              <label>Email address</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="Email Address"
                name="email"
                value={email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Password"
                name="password"
                value={password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group mt-3">
              <label>Confirm Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Confirm Password"
                name="confirmPassword"
                value={confirmPassword}
                onChange={handleChange}
                required
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary" >
                Create
              </button>
            </div>
           
          </div>
        </form>
      </div>
    )
}

export default SignUp;

