import React, { useState } from 'react'
import { toast } from 'react-hot-toast';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import './Templete.css'
import { MDBCard, MDBCol, MDBCardBody, MDBInput, MDBBtn } from 'mdb-react-ui-kit';
import axios from 'axios';

function ChangePassword(props) {
  let isEmail = props.isEmail;
  const navigate = useNavigate();
   const email= isEmail;

  const [password, setPassword]= useState("");

  const [confirmPassword, setConfirmPassword]= useState("");

  

  const [showPassword, setShowPassword] = useState(false);
  
  var password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/ ;
  
 
  
   
  

  const submitHandler= (event) =>{
    event.preventDefault();
    if (!password_pattern.test(password)) {
        alert("passworsd must be contain atleast one lowercase,uppercase,one number and one spesial character and password length should be 8 to 15 degits")

     }
     else{
       axios.put('http://localhost:8000/update-password',{password,email})
      .then (res => {
          toast.success("password set suucefull");
          console.log(password);
          
          navigate("/login");
      
   })
      .catch(err => console.log(err));

     }
 }

  return (
    <form data-aos='fade-up' action='' method='POST' onSubmit={submitHandler}>
      <MDBCard className='my-6 mx-7'>

        <MDBCardBody className='p-7'>
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
            <MDBInput wrapperClass='mb-4 ' required type={showPassword ? ("text") : ("password")} value={password}
                onChange={e=> setPassword(e.target.value)} label='Enter Password' id='password'

              placeholder='Enter Password' name='password'

            />
          
         
          
          </MDBCol>

          <MDBCol col="6">
                    <p>
                        Confirm Password<sub className="sub1">*</sub>
                    </p>

                    <MDBInput
                        required
                        wrapperClass="mb-4"
                        type={showPassword ? "text" : "password"}
                        name="confirmPassword"
                        onChange={e=> setConfirmPassword(e.target.value)}
                        label="Password"
                        id="confirmPassword"
                        placeholder="Enter confirm  Password"
                        value={confirmPassword}
                    />
                </MDBCol>

                <MDBBtn className='w-30 mb-4' size='md'>
                update
          </MDBBtn>
  
        </MDBCardBody>
      </MDBCard>
    </form>

  )
}

export default ChangePassword;