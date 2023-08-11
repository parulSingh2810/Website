import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBRow,
  MDBInput,
} from "mdb-react-ui-kit";
import "./Sidebar.css";
import ResponsiveDrawer from "./Sidebar";
import NavbarDashboard from "./NavbarDashboard";
import { Box } from "@mui/material";
import Footer from "../components/Footer/Footer";


function AddAmeniteties() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    HotelName: "",
    Amenityname: "",
     Capacity: "",
     Price: "",
     Roomdescription: "",
     Image: "",
     Availability: "",
     additionalnotes: "",
  });

  const changeHandler = (event) => {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    await axios
      .post("http://localhost:8000/Add-Amaniteties",formData)
      .then((res) => {
          console.log(res.data);
          toast.success("account created");
          navigate("/");
      })
      .catch((err) => console.log(err));
    
  }

  return (
    <div>
      <NavbarDashboard />
      <Box height={10} />
      <Box sx={{ display: "flex" }}>
        <ResponsiveDrawer />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          
          <form onSubmit={submitHandler}>
            <MDBContainer>
           
              <MDBCard
                style={{
                  marginTop: "100px",
                  background: "hsla(0, 0%, 100%, 8)",
                  backdropFilter: "blur(0px)",
                }}
              >
                <MDBCardBody className="p-10  justify-content-space-between">
               
                    <h2 className="fw-bold mb-5 text-primary text-center">
                      Add Amenity
                    </h2>

                     <MDBRow>
        <MDBCol col='6'>
        <p className='p1'>Hotel Name<sub className="sub1">*</sub>
         </p> 
          <MDBInput wrapperClass='mb-4' label='Hotel name' type='text'   name="HotelName" value={formData.HotelName}  onChange={changeHandler} required />
        </MDBCol>

        <MDBCol col='8'>
        <p className='p1'>Amenityname<sub className="sub1">*</sub>
         </p> 
          <MDBInput wrapperClass='mb-4' label='Amenityname'  type='text'  name="Amenityname" value={formData.Amenityname}  onChange={changeHandler} required/>
        </MDBCol>
      </MDBRow>                    
      <MDBRow>
                      <MDBCol col="8">
                        <p>Capacity </p>
                        <MDBInput
                          wrapperClass="mb-4"
                          label="Capacity "
                        
                          type="text"
                          name="Capacity"
                          value={formData.Capacity}
                          onChange={changeHandler}
                        />
                      </MDBCol>

                      <MDBCol col="8">
                        <p>Price </p>
                        <MDBInput
                          wrapperClass="mb-4"
                          label="Price"
                        
                          type="number"
                          name="Price"
                          value={formData.Price}
                          onChange={changeHandler}
                        />
                      </MDBCol>
                    </MDBRow>

                    <MDBRow>
                      <MDBCol md="6">
                        <p>Room Description</p>
                        <MDBInput
                          wrapperClass="mb-4"
                          required
                          label="Enter Amenity Description"
                          id="Amenity Description"
                          text='text'
                          placeholder="Enter Amenity Description"
                          name="Roomdescription"
                          value={formData.Roomdescription}
                          onChange={changeHandler}
                        />
                      </MDBCol>
                      <MDBCol md="6">
                        <p> Images</p>
                        <input
                          type="file"
                          className="form-control"
                          name="Image"
                          value={formData.Image}
                          onChange={changeHandler}
                        />
                      </MDBCol>
                    </MDBRow>
                    <MDBRow>
                      <MDBCol md="6">
                        <p>Availability</p>
                        <MDBInput
                          wrapperClass="mb-4"
                          required
                          type="date"
                          id="availability"
                          name="Availability"
                          value={formData.Availability}
                          onChange={changeHandler}
                        />
                      </MDBCol>
                      <MDBCol md="6">
                        <p>Additional Notes </p>
                        <MDBInput
                          wrapperClass="mb-4"
                          type="textarea"
                          rows="3"
                          id="additionalNotes"
                          placeholder="Enter Additional Notes"
                          name="additionalnotes"
                          value={formData.additionalnotes}
                          onChange={changeHandler}
                        />
                      </MDBCol>
                    </MDBRow>

                    <MDBBtn className="w-100 mb-4" size="md">
                      Add Amenity
                    </MDBBtn>
                  
                </MDBCardBody>
              </MDBCard>
            </MDBContainer>
            </form>
          
        </Box>
      </Box>
      
    </div>
  );
}

export default AddAmeniteties;
