import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import {
    MDBCard,
    MDBRow,
    MDBCol,
    MDBCardBody,
    MDBInput,
    MDBIcon,
    MDBContainer,
    MDBBtn,
} from "mdb-react-ui-kit";


const User = ({ setIsLoggedIn }) =>  {

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        aadharNumber: "",
        acountType: "User"
      });
     
      const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);

    var email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;

    const changeHandler = (event) => {
            setFormData((prevData) => ({
                ...prevData,
                [event.target.name]: event.target.value,
            }))

        }

    const submitHandler = (event) => {
        event.preventDefault();
        if (!email_pattern.test(formData.email)) {
            alert('Email is not right formate')
            return;
        }
        else if (!password_pattern.test(formData.password)) {
            alert("passworsd must be contain atleast one lowercase,uppercase,one number and one spesial character and password length should be 8 to 15 degits")
            return;
        }
        else if (formData.confirmPassword !== formData.password) {
            alert('password not match !')
            return;
        }
        else {
            axios.post('http://localhost:8000/signup', formData)
                .then(res => {
                    setIsLoggedIn(true);
                    toast.success("Account Created");

                    console.log(formData);

                    navigate('/');
                })
                .catch(err => console.log(err));
        }
    }
   return(
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
          <span className="text-primary">  THikana....... </span>
        </h1>
  
        <p className="px-3" style={{ color: "hsl(217, 10%, 50.8%)" }}>
        Login and check your rewards and search Thikana
        </p>
      </MDBCol>
      <MDBCol md="6">
      <div>
    <form data-aos="fade-up" onSubmit={submitHandler}>
        <MDBCard className="my-8">
            <h2 className="text-primary">User Registration Form </h2>
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
                    <p>
                        Create Password<sub className="sub1">*</sub>
                    </p>
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

                    <span onClick={() => setShowPassword((prev) => !prev)}>
                        {showPassword ? (
                            <AiOutlineEyeInvisible className="icon1" />
                        ) : (
                            <AiOutlineEye className="icon1" />
                        )}
                    </span>
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
                <p className="llllll">

                </p>

                <MDBBtn className="w-100 mb-4" size="md">
                    sign up
                </MDBBtn>
                <div className="text-center">
                    <p>or sign up with:</p>

                    <MDBBtn
                        tag="a"
                        className="mx-4"
                        style={{ background: "#dd4b39", color: "white" }}
                    >
                        <MDBIcon fab icon="google" size="lg" />
                    </MDBBtn>
                </div>
            </MDBCardBody>
        </MDBCard>
    </form>
    </div>
    </MDBCol>
      </MDBRow>
    </MDBContainer>
   );
};

 export default User;