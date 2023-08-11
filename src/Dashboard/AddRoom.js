import React from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBRow,
  MDBInput,
  MDBFile

} from "mdb-react-ui-kit";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import NavbarDashboard from "./NavbarDashboard";
import ResponsiveDrawer from "./Sidebar";

function AddRoom() {

  const [formData, setFormData] = useState({
    HotelName:"",
    RoomNumber: "",
    RoomType: "",
    MaximumOccurance: "",
    BedType: "",
    PriceperNight: "",
    Amenities: "",
    roomDescription: "",
    availability: "",
    additionalNotes: "",
    roomImages: "",
  });

  const navigate = useNavigate();

  const changeHandler = (event) => {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  };

  const submitHandler =async (event) => {
    event.preventDefault();
     await axios
      .post("http://localhost:8000/Add-Room",formData)
      .then((res) => {
        toast.success("Account Created");
        console.log(res);
        console.log(formData);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <NavbarDashboard />
      <Box height={10} />
      <Box sx={{ display: "flex" }}>
        <ResponsiveDrawer />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
       <div>
        
       <MDBContainer>
            <MDBCol md="10">

      <form  onSubmit={submitHandler}>

    <MDBCard  style={{ marginTop:'100px',background: 'hsla(0, 0%, 100%, 0.8)'}}>
    <MDBCardBody className='p-11 justify-content-space-between overflow-auto'>

      <h2 className="fw-bold mb-5 text-center text-primary">Add Room</h2>

      <MDBRow>
        <MDBCol col='6'>
        <p className='p1'>Hotel Name<sub className="sub1">*</sub>
         </p> 
          <MDBInput wrapperClass='mb-4' label='Hotel name' type='text'   name="HotelName" value={formData.HotelName}  onChange={changeHandler} required />
        </MDBCol>

        <MDBCol col='8'>
        <p className='p1'>Room Number<sub className="sub1">*</sub>
         </p> 
          <MDBInput wrapperClass='mb-4' label='Room Number'  type='number'  name="RoomNumber" value={formData.RoomNumber}  onChange={changeHandler} required/>
        </MDBCol>
      </MDBRow>

        <MDBRow>
        <MDBCol col='12'>
        <p className='p1'>Room Type<sub className="sub1">*</sub>
         </p>
          <MDBInput wrapperClass='mb-4' label='Room Type'  type='text'  name="RoomType" value={formData.RoomType}  onChange={changeHandler} required/>
        </MDBCol> 

         <MDBCol col='6'>
        <p className='p1'>Maximum Occurance<sub className="sub1">*</sub>
         </p>
          <MDBInput wrapperClass='mb-4' label='Maximum Occurance' type='text'  name="MaximumOccurance" value={formData.MaximumOccurance}  onChange={changeHandler} required/>
        </MDBCol>
       </MDBRow> 

       <MDBRow>
        <MDBCol col='6'>
        <p className='p1'>Bed Type<sub className="sub1">*</sub>
         </p>
         
          <MDBInput wrapperClass='mb-4' label='Bed Type'  type='text'  name="BedType" value={formData.BedType}  onChange={changeHandler}  required/>
        </MDBCol>

       
      </MDBRow>
        
      <MDBRow>  
      <MDBCol col='6'>
      <p className='p3'>Price per Night<sub className="sub1">*</sub>
          </p>
      <MDBInput wrapperClass='mb-4' label='Price per Night'  type='number'  name="PriceperNight" value={formData.PriceperNight}  onChange={changeHandler} required/>
      </MDBCol>

      <MDBCol col='6'>
        <p className='p3'>Amenities<sub className="sub1">*</sub>
          </p>
         <MDBInput wrapperClass='mb-4' label='Amenities' type='text'  name="Amenities" value={formData.Amenities}  onChange={changeHandler} required/>
        </MDBCol>
       
       </MDBRow>
        <MDBRow>
          <MDBCol col='6'>
            <p> roomDescription <sub className="sub1">*</sub>
                </p>
            <MDBInput wrapperClass="mb-4"
                          label="roomDescription"
                          name="roomDescription"
                          
                          onChange={changeHandler}
                          value={formData.roomDescription}
                          type="text"
                          required
                      />
                      </MDBCol>

                      <MDBCol col='6'>
            <p> availability<sub className="sub1">*</sub>
                </p>
            <MDBInput wrapperClass="mb-4"
                          label="availability"
                          name="availability"
                          
                          onChange={changeHandler}
                          value={formData.availability}
                          type="date"
                          required
                      />

                      </MDBCol>
          </MDBRow>
            
                     
     <MDBRow>

     <MDBCol col='6'>
            <p> additionalNotes<sub className="sub1">*</sub>
                </p>
            <MDBInput wrapperClass="mb-4"
                          label="additionalNotes"
                          name="additionalNotes"
                          
                          onChange={changeHandler}
                          value={formData.additionalNotes}
                          type="text"
                          required
                      />

                      </MDBCol>


      <MDBCol col="6">
      
         
      <MDBFile label='Upload room images' text='file' id='File'  name="roomImages" value={formData.roomImages}  onChange={changeHandler} />
       </MDBCol>

       </MDBRow> 


                    <MDBBtn className="w-100 mb-4" size="md">
                      Add Room
                    </MDBBtn>
                  
                </MDBCardBody>
              </MDBCard>
              </form>
              </MDBCol>
            </MDBContainer>
           
         </div>
         
        </Box>
      </Box>
    </div>
  );
}

export default AddRoom;
