import React, { useState } from 'react'
import { toast } from 'react-hot-toast';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import './Templete.css'
import { MDBCard, MDBCol, MDBCardBody, MDBInput, MDBBtn } from 'mdb-react-ui-kit';
import axios from 'axios';




const LoginForm = ({ setIsLoggedIn }) => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "", password: ""
  });

  const [showPassword, setShowPassword] = useState(false);
  
  var email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  var password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/ ;
  
 
  const chaneHandler=(event) =>{
    setFormData(prev => (
      {
        ...prev,
        [event.target.name] : [event.target.value]
      }
    )
    )
  }
   
  

  const submitHandler= (event) =>{
    event.preventDefault();
    if (!email_pattern.test(formData.email)) {
         alert('Email is not right formate')
    
     }
     else if (!password_pattern.test(formData.password)) {
        alert("passworsd must be contain atleast one lowercase,uppercase,one number and one spesial character and password length should be 8 to 15 degits")

     }
     else{
       axios.post('http://localhost:8000/login',formData)
      .then (res => {
        if(res.data === "Success"){   
          setIsLoggedIn(true);
          toast.success("Loged in");
          console.log(formData);
         
          navigate("/");
      }
    else{
      toast.success(res.data.Error);
    } })
      .catch(err => console.log(err));

     }
 }

   
  return (
    <form data-aos='fade-up' action='' onSubmit={submitHandler}>
      <MDBCard className='my-5'>

        <MDBCardBody className='p-5'>
          <MDBCol col='6'>
            <p>
              Email Address<sub className='sub1'>*</sub>
            </p>

            <MDBInput wrapperClass='mb-4' required label='Enter Your Email' id='email' type='email' value={formData.email}
              onChange={chaneHandler}
              placeholder='Enter email id'
              name='email'
            
              />
           
          
          </MDBCol>

          <MDBCol col='6'>
          <div className="d-flex">
            <p>
              password<sub className='sub1'>*</sub>
            </p>

            <div className="mx-2" style={{justifyContent:"right-end" ,textAlign:"end"}}>
                    <span onClick={() => setShowPassword((prev) => !prev)}>
                        {showPassword ? (
                            <AiOutlineEyeInvisible className="icon1" />
                        ) : (
                            <AiOutlineEye className="icon1" />
                        )}
                    </span>
                    </div>
                    </div>
                    
            <MDBInput wrapperClass='mb-4' required type={showPassword ? ("text") : ("password")} value={formData.password}
              onChange={chaneHandler} label='Enter Password' id='password'

              placeholder='Enter Password' name='password'

            />
           
          
          </MDBCol>

          <div className='mb-4'>
            <Link to='/update'>

              <span className='di' > Forgot Password</span>

            </Link>
          </div>


          <MDBBtn className='btn1 w-60 mb-5' size='lg'>
            Sign in
          </MDBBtn>


          <div className="text-center">
            <p>Your have not register pls register now:</p>
           
    
          <Link to= '/signup'>
          <MDBBtn
          tag="a"
          className="btn1 w-20 mb-4" size="lg"
          style={{  color: "white" }}
        >
         
         signup
         
        </MDBBtn>
        </Link>
      </div>
        

         
        </MDBCardBody>
      </MDBCard>
    </form>
  )
}

export default LoginForm;