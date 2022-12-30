// import { deleteModel } from 'mongoose';
import React, { useState } from 'react';

const LoginPage = () => {
    const [email , setEmail] =useState("");
    const [emailError , setEmailError] = useState("");

    const [password , setPassword] = useState("");
    const [passwordError , setPasswordError] = useState("");

    const [successMsg,setSuccessMsg]  = useState("");

    const handleEmailChange = (e) =>{
        setSuccessMsg("");
        setEmailError("");
        setEmail(e.target.value);

    }
    
    const handlePasswordChange = (e)=>{
        setSuccessMsg("");
        setPasswordError("");
        setPasswordError(e.target.value);

    }

    const handleFormSubmit = (e) =>{
        e.preventDefault()
        //checking if email is empty
        if(email==""){
            const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
            if(emailRegex.test(email)){
                setEmailError("");
                if(email==="admin@deleteModel.com"){
                    setEmailError("");
                    if(password==="demo"){
                        setSuccessMsg("You are successfully logged in");

                    }
                    else{
                        setPasswordError("password does not match with email address");
                    }

                }
                else{
                    setEmailError("email does not match our database")
                }

            }else{
                setEmailError("Invalid Email");
            }

        }
        else{
            setEmailError("Email Required");
        }

        if(password==""){

        }
        else{
            setPasswordError("Password Required");
        }
        
        

    }

  return (
    <div className='wrapper'>
         
    <h1>Welcome To Login</h1>
    {/* {successMsg&&<div className='success-msg'>{successMsg}</div>} */}
    <form className='form-group form' autoComplete='off' onSubmit={handleFormSubmit}>
    {successMsg&&<>
    <div className='success-msg'>{successMsg}</div>
    </>}
        <label>Email:</label>
        <input type="text" className='form-control custom-input' placeholder='Enter your Email Address' onChange={handleEmailChange} value={email}/>
        {emailError && <div className='error-msg'>{emailError}</div>}
        <br></br>

        <label>Password:</label>
        <input type="password" className='form-control custom-input' placeholder='Enter your Password' onChange={handlePasswordChange} value={password}/>
        {passwordError && <div className='error-msg'>{passwordError}</div>}
        <br></br>
        <button type='submit' className='btn btn-success btn-lg style={{width:100+%}}'>Login</button>


    </form>
      
    </div>
  )
}

export default LoginPage;
