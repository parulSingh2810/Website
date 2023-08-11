import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBRow,
  MDBInput,
  MDBFile,
  
}
from 'mdb-react-ui-kit';
import Box from '@mui/material/Box';
import './Sidebar.css'
import NavbarDashboard from './NavbarDashboard';
import ResponsiveDrawer from './Sidebar';

function AddCustomers( ) {
  const navigate= useNavigate();
const [formData, setFormData] = useState({
  FirstName: "",
  LastName: "",
  Mobilenumber: "",
   DOB:"",
  Gender:"",
  RoomNo:"",
  Roomtype:"",
  Address:"",
   email:"", 
  
});

const changeHandler=(event)=>{
  setFormData((prevData) => ({
  ...prevData,
[event.target.name]: event.target.value,
}))
}
const submitHandler= async (event)=>{
  event.preventDefault();
await axios.post('http://localhost:8000/Add-Customer',formData)
.then (res => {
  console.log(res.data);
    toast.success("details updated");
    navigate('/dashboard-owner')
  
   
})
 .catch(err => console.log(err));
 
}


  return (
    <div>
    <NavbarDashboard/>
     <Box height= {10}/>
     <Box sx={{ display: 'flex' }}>
     <ResponsiveDrawer/>
      <Box component="main" sx={{flexGrow: 1,p:3}}>

    
    <form onSubmit={submitHandler}>
    <MDBContainer fluid >
    <MDBCard  style={{marginTop: '100px', background: 'hsla(0, 0%, 100%, 0.8)', backdropFilter: 'blur(20px)'}}>
    <MDBCardBody className='p-10 justify-content-space-between'>

      <h2 className="fw-bold mb-5 text-center text-primary">Customer  Details</h2>

      <MDBRow>
        <MDBCol col='6'>
        <p className='p1'>First Name<sub className="sub1">*</sub>
         </p> 
          <MDBInput wrapperClass='mb-4' label='First name' type='text'   name="FirstName" value={formData.FirstName}  onChange={changeHandler} required />
        </MDBCol>

        <MDBCol col='8'>
        <p className='p1'>Last Name<sub className="sub1">*</sub>
         </p> 
          <MDBInput wrapperClass='mb-4' label='Last name'  type='text'  name="LastName" value={formData.LastName}  onChange={changeHandler} required/>
        </MDBCol>
      </MDBRow>

        <MDBRow>
        <MDBCol col='12'>
        <p className='p1'>Mobile number<sub className="sub1">*</sub>
         </p>
          <MDBInput wrapperClass='mb-4' label='mobile number'  type='number'  name="Mobilenumber" value={formData.Mobilenumber}  onChange={changeHandler} required/>
        </MDBCol> 

         <MDBCol col='8'>
        <p className='p1'>DOB<sub className="sub1">*</sub>
         </p>
          <MDBInput wrapperClass='mb-4' label='DOB' type='date'  name="DOB" value={formData.DOB}  onChange={changeHandler} required/>
        </MDBCol>
       </MDBRow> 


      <div className="row">
        <div className="col-lg-6">
        <p className='p1'>Gender<sub className="sub1">*</sub>
         </p>
          <select className ="select select-initialized  required value={formData.Gender}  onChange={changeHandler} " style={{width: "100%",height:"35px" , borderColor:"lightgrey",borderRadius:"4px",}}>
          <option value="1">Male</option>
          <option value="2">Female</option>
          <option value="3">Other</option>    
             
        </select>
    

        </div>
       
       <div className="col-lg-6 md-12 sm-12 ">
       <div className="row">
  
        <div className="col-lg-6 md-12 sm-12">
        <p className='p1'>Room Number<sub className="sub1">*</sub>
         </p>
          <MDBInput wrapperClass='mb-4' label='Room Number'  type='number'  name="RoomNo" value={formData.RoomNo}  onChange={changeHandler}  required/>
        </div>
        <div className="col-lg-6 md-12 sm-12">
        <p className='p1'>Room Type<sub className="sub1">*</sub>
         </p>
          <MDBInput wrapperClass='mb-4' label='room Type '  type='text'  name="Roomtype" value={formData.Roomtype}  onChange={changeHandler} required/>
        
        </div>
        </div>
        </div>

        </div>
      
        
       
        
    <div className="row">  
      <div className="col-lg-6 md-6 sm-12">
      <p className='p3'>Address<sub className="sub1">*</sub>
          </p>
      <MDBInput wrapperClass='mb-4' label='Address'  type='text'  name="Address" value={formData.Address}  onChange={changeHandler} required/>
      </div>

      <div className=" col-lg-6 md-6 sm-12" >
          <p className='p3'>Email<sub className="sub1">*</sub>
          </p>
         <MDBInput wrapperClass='mb-4' label='Email' type='email'  name="email" value={formData.email}  onChange={changeHandler} required/>
        </div>
    </div>

      
      <MDBBtn className='w-100 mt-4 mb-4' size='md'>Add Customer Details</MDBBtn>
      
      
    </MDBCardBody>
  </MDBCard>
  </MDBContainer>
  </form>
  </Box>
  </Box>
  </div>

);
}

export default AddCustomers;



