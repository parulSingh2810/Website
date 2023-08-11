import React, { useState } from 'react'
import { toast } from 'react-hot-toast';

import {useNavigate } from 'react-router-dom';
import './Templete.css'
import { MDBCard, MDBCol, MDBCardBody, MDBInput, MDBBtn} from 'mdb-react-ui-kit';
import axios from 'axios';

function Update({setIsEmail}) {


    const navigate = useNavigate();

    const [email, setEmail]= useState("");
    
  
   
    var email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
    
  
    const submitHandler= (event) =>{
      event.preventDefault();
      if (!email_pattern.test(email)) {
           alert('Email is not right formate')
      
       }
       else{
         axios.post('http://localhost:8000/update',{email})
        .then (res => {
          if(res.data === "email found"){ 
            setIsEmail=email;  
             navigate('/update-password')
             
        }
      else{
        toast.success(res.data);
      } })

        .catch(err => console.log(err));
  
       }
   }
  

  return (
    <form data-aos='fade-up' action='' method='POST'onSubmit={submitHandler}>
    <MDBCard className='my-5'>

      <MDBCardBody className='p-5'>
        <MDBCol col='6'>
          <p>
            Email Address<sub className='sub1'>*</sub>
          </p>
          <MDBInput wrapperClass='mb-4  w-50' required label='Enter Your Email' id='email' type='email'
            onChange={e=> setEmail(e.target.value)}
            placeholder='Enter email id'
            name='email'
          
            />

         <MDBBtn className='w-30 mb-4' size='md'>
             verify it
          </MDBBtn>
         
        
        </MDBCol>
        </MDBCardBody>
        </MDBCard>
        </form>

  );
}

export default Update;