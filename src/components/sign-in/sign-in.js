import { useState } from "react"
import { signInUserWithEmailAndPassword, signInWithGooglePopup, signOutUser } from "../../utils/firebase";
import GoogleButton from "react-google-button";
import "bootstrap/dist/css/bootstrap.min.css"
import './sign-in.css'

const defaultFormFields = {
    email: "",
    password: ""
}

function SignIn(){
    const [formFields,setFormFields] = useState(defaultFormFields);
    const { email,password } = formFields;
    const resetFormFields = () =>{
        setFormFields(defaultFormFields);
    }

    const handleChange = (event) => {
       const {name,value} = event.target;
       setFormFields({...formFields,[name]:value});
    }

    const handleSubmit = async(event) => {
       event.preventDefault();
       try{
        await signInUserWithEmailAndPassword(email,password);
        resetFormFields();
       }catch(error){
        switch (error.code) {
            case 'auth/wrong-password':
              alert('incorrect password for email');
              break;
            case 'auth/user-not-found':
              alert('no user associated with this email');
              break;
            default:
              console.log(error);
          }
       }
    }

    const signInPopUp = async() => {
      await signInWithGooglePopup();
    }
    
    return(
      <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={handleSubmit}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Enter email"
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
              placeholder="Enter password"
              value={password}
              name="password"
              onChange={handleChange}
              required
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Log In
            </button>
          </div>
          <p className="forgot-password text-right mt-2">
            Don't have an Account ?<a href="#"> Sign Up</a>
          </p>
          <div className="google">
          <p className="or">or</p>
          <div className="google-btn">
          <GoogleButton onClick={signInPopUp}></GoogleButton>
          </div>
          </div>
        </div>
      </form>
    </div>
    );
}

export default SignIn;