import { useState } from "react";
import { createAuthUserWithEmailAndPassword } from "../../utils/firebase";


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
         const { user } = await createAuthUserWithEmailAndPassword(email,password);
         console.log(user);
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
        <div>
            <form onSubmit={handleSubmit}>
            <input type="text"  placeholder="User Name" name="username" value={username} onChange={handleChange} required></input>
            <input type="text"  placeholder="Email" name="email" value={email} onChange={handleChange} required></input>
            <input type="password" placeholder="Password" name="password" value={password} onChange={handleChange} required></input>
            <input type="password" placeholder="Confirm Password" name="confirmPassword" value={confirmPassword} onChange={handleChange} required></input>
            <button type="submit">submit</button>
            </form>
        </div>
    )
}

export default SignUp;

