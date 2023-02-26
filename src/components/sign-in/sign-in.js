import { useState } from "react"
import { signInUserWithEmailAndPassword, signOutUser } from "../../utils/firebase";

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
    return(
       <div>
        <form onSubmit={handleSubmit}>
        <input type='text' name='email' value={email} onChange={handleChange} required></input>
        <input type='text' name='password' value={password} onChange={handleChange} required></input>
        <button type="submit">submit</button>
        </form>
       </div>
    );
}

export default SignIn;