import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import axios from 'axios';
import {
  MDBCard,
  MDBRow,
  MDBCol,
  MDBCardBody,
  MDBFile,
  MDBInput,
  MDBContainer,

  MDBBtn,
} from "mdb-react-ui-kit";
import Navbar from "../Navbar/Navbar";

function Nonregistraion({ setIsLoggedIn }){

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    aadharNumber: "",
    fileUpload: "",
    acountType: "Owner",
  });
   
   const navigate =useNavigate();

  const [showPassword, setShowPassword] = useState(false);



  var email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  var password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/ ;

  const changeHandler=(event)=>{
          setFormData((prevData) => ({
          ...prevData,
      [event.target.name]: event.target.value,
    }))
  }
    
  const submitHandler= async (event)=>{
      event.preventDefault();

      if (!email_pattern.test(formData.email)) {
        alert('Email is not right formate')
        return ;
    }
    else if (!password_pattern.test(formData.password)) {
       alert("passworsd must be contain atleast one lowercase,uppercase,one number and one spesial character and password length should be 8 to 15 degits")
              return;
    }   
    else if (formData.confirmPassword !== formData.password) {
      alert('password not match !')
        return ;
  }
  else{
    await axios.post('http://localhost:8000/non-registered-pg',formData)
    .then (res => {
      if(res.data === "account already created pls login"){
        toast.success("account already created pls login");
        return ;
    }
     

      setIsLoggedIn(true);
      toast.success("Account Created");
        console.log(res);
       console.log(formData);

        navigate('/');
    
    })
  
     .catch(err => console.log(err));
  }
  }
return (
  <div>
    <Navbar/>
  <MDBContainer fluid className="p-4">
  <MDBRow>
    <MDBCol
     md="6"
     className="text-center text-md-start d-flex flex-column justify-content-center"
   >
     <h1
       data-aos="fade-up"
       className="my-5 display-3 fw-bold ls-tight px-3"
     >
        WELCOME on ! 
        <br />
        <span className="text-primary"> THikana....... </span>
      </h1>

      <p className="px-3" style={{ color: "hsl(217, 10%, 50.8%)" }}>
      Login and check your rewards and search Thikana
      </p>
    </MDBCol>
    <MDBCol md="6">
    <div className="d-grid gap-2 d-md-flex justify-content-md-end ">
         <Link to='/signup' >
        <MDBBtn className="btn1">
          User
        </MDBBtn>
        </Link>
      </div>
  <form data-aos="fade-up" onSubmit={submitHandler}>
  <MDBCard className="my-4 ">
    <h2 className="text-primary mx-4 mb-1 p-3">Owner Registration Form </h2>
    <MDBCardBody className="p-5">
      <MDBRow>
        <MDBCol col="6">
          <p>
            First Name<sub className="sub1">*</sub>
          </p>
          <MDBInput
            wrapperClass="mb-4"
            required
            label="Enter First-name"
            name="firstName"
            onChange={changeHandler}
            id="firstName"
            placeholder="Enter First Name"
            value={formData.firstName}
          />
        </MDBCol>

        <MDBCol col="6">
          <p>
            Last Name<sub className="sub1">*</sub>
          </p>
          <MDBInput
            wrapperClass="mb-4"
            required
            type="text"
            label="Enter Last-name"
            name="lastName"
            onChange={changeHandler}
            id="lastName"
            placeholder="Enter Last Name"
            value={formData.lastName}
          />
        </MDBCol>
      </MDBRow>

      <MDBCol col="6">
        <p>
          Email Address<sub className="sub1">*</sub>
        </p>
        <MDBInput
          required
          wrapperClass="mb-4"
          label="Enter Your Email"
          id="email"
          type="email"
          name="email"
          onChange={changeHandler}
          placeholder="Enter Email Address"
          value={formData.email}
        />
      </MDBCol>
      <MDBCol col="6">
      <div className="d-flex">
        <p>
          Create Password<sub className="sub1">*</sub>
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
        <MDBInput
          required
          wrapperClass="mb-4"
          type={showPassword ? "text" : "password"}
          name="password"
          onChange={changeHandler}
          label="Enter Password"
          id="password"
          placeholder="Enter  Password"
          value={formData.password}
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
          onChange={changeHandler}
          label="Password"
          id="confirmPassword"
          placeholder="Enter confirm  Password"
          value={formData.confirmPassword}
        />
      </MDBCol>
      <MDBCol col="6">
        <p>
          Aadhar Number <sub className="sub1">*</sub>
        </p>

        <MDBInput
          required
          wrapperClass="mb-4"
          type="number"
          name="aadharNumber"
          onChange={changeHandler}
          label="Number"
          id="aadharNumber"
          placeholder="Enter Aadhar Number"
          value={formData.aadharNumber}
        />
      </MDBCol>

     
      <MDBCol col="6">
        <p>
          Upload Property Document <sub className="sub1">*</sub>
        </p>
        <MDBFile
          required
          wrapperClass="mb-4"
          id="customFile"
          name="fileUpload"
          onChange={changeHandler}
          value={formData.fileUpload}
        />
      </MDBCol>
      <p className="llllll">
        
      </p>

      <MDBBtn className="btn1 w-70 mb-5" size="lg">
        sign up
      </MDBBtn>

      <div className="text-center">
        <p>you have already an account pls login:</p>
        
        <Link to= '/login'>
        <MDBBtn
          tag="a"
          className="btn1 w-20 mb-4" size="lg"
          style={{  color: "white" }}
        >
         
         Login
         
        </MDBBtn>
        </Link>
      </div>
          <p  style={{ textDecoration: 'underline' }}> 
            <Link to ='/owner-signup'>You have  Register number of  your pg / HomeStay pls click on this </Link> 
            </p>
      <div>

      </div>
    </MDBCardBody>
  </MDBCard>
</form>
</MDBCol>
      </MDBRow>
    </MDBContainer>
    </div>
);
};
 export default Nonregistraion;