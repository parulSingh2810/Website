import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBRow,
  MDBInput,
} from "mdb-react-ui-kit";
import axios from "axios";
import { React, useState } from "react";
import { toast } from "react-hot-toast";

import Box from "@mui/material/Box";
import { Link, useNavigate } from "react-router-dom";
import "./Sidebar.css";
import NavbarDashboard from "./NavbarDashboard";
import ResponsiveDrawer from "./Sidebar";

function AddHotels( ) {
  const [formData, setFormData] = useState({
    OwnerName:  "",
    Type:"",
    HotelName: "",
    state: "",
    RoomNumber: "",
    RoomType: "",
    Email: "",
    Pincode: "",
    AadharNumber: "",
  });

  const navigate = useNavigate();

  const changeHandler = (event) => {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  };

  const submitHandler = (event) => {
    event.preventDefault();
    
     axios.post("http://localhost:8000/Add-Hotel",formData)
      .then((res) => {
       
        toast.success("Your Data is added");
        console.log(res.data);
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
           <div className="d-grid gap-1 d-md-flex my-6 justify-content-md-end ">
             <Link to='/Add-PG' >
               <MDBBtn className="btn1">
                   ADD PG
             </MDBBtn>
              </Link>
              </div>
          <form  onSubmit={submitHandler}>
              <MDBCard
                style={{
                  background: "hsla(0, 0%, 100%, 0.8)",
                  backdropFilter: "blur(0px)",
                }}
              > 


                <MDBCardBody className="p-11  justify-content-space-between">
                    <h2 className="fw-bold mb-4 text-center text-primary">
                      Add Homestays
                    </h2>
                    <MDBRow>
                        <MDBCol col="6">
                          <p className="p1">
                          Homestay Name <sub className="sub1">*</sub>
                          </p>
                          <MDBInput
                            required
                            wrapperClass="mb-4"
                            label="Hotel Name"
                            name="HotelName"
                            type="text"
                            onChange={changeHandler}
                            value={formData.HotelName}
                           
                          />
                        </MDBCol>
                        <MDBCol col="8">
                          <p className="p3">
                            Email <sub className="sub1">*</sub>
                          </p>
                          <MDBInput
                            required
                            wrapperClass="mb-4"
                            label="Email"
                            name="Email"
                            type="email"
                            onChange={changeHandler}
                            value={formData.Email}
                            



                          />
                        </MDBCol>
                      </MDBRow>
                      <MDBRow>
                        <MDBCol col="8">
                          <p className="p1">
                            Address <sub className="sub1">*</sub>
                          </p>
                          <MDBInput
                            required
                            wrapperClass="mb-4"
                            label="Address"
                            name="Address"
                            onChange={changeHandler}
                            value={formData.Address}

                            type="text"
                           
                          />
                        </MDBCol>


                        <MDBCol col="8">
                          <p className="p1">
                            City <sub className="sub1">*</sub>
                          </p>
                          <MDBInput
                            required
                            wrapperClass="mb-4"
                            label="city "
                            name="city"
                            onChange={changeHandler}
                            value={formData.city}

                            type="text"
                            
                          />
                        </MDBCol>
                      </MDBRow>
                      <MDBRow>
                        <MDBCol col="8">
                          <p className="p1">
                            District <sub className="sub1">*</sub>
                          </p>
                          <MDBInput
                            required
                            wrapperClass="mb-4"
                            label="District "
                            name="District"
                            onChange={changeHandler}
                            value={formData.District}

                            type="text"
                            
                          />
                        </MDBCol>

                        <MDBCol col="8">
                          <p className="p1">
                            State <sub className="sub1">*</sub>
                          </p>
                          <MDBInput
                            required
                            wrapperClass="mb-4"
                            label="state "
                            name="state"
                            onChange={changeHandler}
                            value={formData.state}

                            type="text"
                            
                          />
                        </MDBCol>

                        <MDBCol col="6">
                          <p className="p1">
                            Pincode/Zipcode <sub className="sub1">*</sub>
                          </p>
                          <MDBInput
                            required
                            wrapperClass="mb-4"
                            label="Pincode"
                            name="Pincode"
                            onChange={changeHandler}
                            value={formData.Pincode}


                            type="number"
                            
                          />
                        </MDBCol>
                      </MDBRow>


                      <MDBRow>
                        <MDBCol col="8">
                          <p className="p1">
                            GST Number <sub className="sub1">*</sub>
                          </p>
                          <MDBInput
                            required
                            wrapperClass="mb-4"
                            label=" GST NUMBER"
                            name="GstNumber"
                            onChange={changeHandler}
                            value={formData.GstNumber}


                            type="text"
                          />
                        </MDBCol>

                        <MDBCol col="6">
                          <p className="p1">
                            PAN Number <sub className="sub1">*</sub>
                          </p>
                          <MDBInput
                            required
                            wrapperClass="mb-4"
                            label="PAN Number"
                            name="PanNumber"
                            onChange={changeHandler}
                            value={formData.PanNumber}

                            type="text"
                          />
                        </MDBCol>
                      </MDBRow>

                      <MDBRow>
                        <MDBCol size="">
                          <p className="p1">
                            Total Numbers of Room <sub className="sub1">*</sub>
                          </p>
                          <MDBInput
                            required
                            wrapperClass="mb-4"
                            label="Room Numbers"
                            name="RoomNumber"
                            onChange={changeHandler}
                            value={formData.RoomNumber}
                            type="text"/>
                        </MDBCol>
                       
                          <MDBCol size="3">

                          <p className="p1">
                            Room Type 
                          </p>

                          <MDBRow>
                            <MDBCol>
                            <MDBInput
                            
                            wrapperClass="mb-4"
                            label="Ac"
                            name="Ac"
                            onChange={changeHandler}
                            value={formData.ac}
                            type="text"/>
                            </MDBCol>
                            <MDBCol>
                            <MDBInput
                            
                            wrapperClass="mb-4"
                            label="Non-Ac"
                            name="non-Ac"
                            onChange={changeHandler}
                            value={formData.nonAc}
                            type="text"/>
                            </MDBCol>
                          </MDBRow>                      

                            

                         
                           
                           
                          </MDBCol>
                           <MDBCol size="6">
                              <p className="p1">
                                Contact Person <sub className="sub1">*</sub>
                              </p>
                              <MDBInput
                                required
                                wrapperClass="mb-4"
                                label="Contact Person "
                                name="ContactPerson"
                                onChange={changeHandler}
                                value={formData.ContactPerson}
                                type="text"/>
                          </MDBCol>                         
                      </MDBRow>
                    <div className="my-4">
                    <h6> Enter Single Sharing  Homestay Details </h6>
                    </div>  
                       <MDBRow>
                          <MDBCol size="6">
                            <p className="p1">Price (per month):</p>
                            <MDBInput
                              required
                              wrapperClass="mb-4"
                              label="Price"
                              name="price"
                              type="number"
                              // onChange={changeHandler}
                              // value={formData.price}
                            />
                            </MDBCol>
                    
                        <MDBCol size="6 mb-4">
                          <p className="p1 ">Upload Single room image:</p>
                          <input
                            type="file"
                            className="form-control"
                            name="documents"
                            // onChange={changeHandler}
                            multiple
                          />
                        </MDBCol>
                        </MDBRow>
                        <MDBRow>
                        
                        <MDBCol size="6 mb-4">
                            <p className="p1">Amenities:</p>
                            <textarea
                              className="form-control"
                              name="description"
                              onChange={changeHandler}
                              value={formData.description}
                              rows="4"
                            />
                          </MDBCol>
                          <MDBCol size="6 mb-4">
                            <p className="p1" > Homestay Details:</p>
                            <textarea
                              className="form-control"
                              name="description"
                              onChange={changeHandler}
                              value={formData.description}
                              rows="4"
                            />
                          </MDBCol>
                      </MDBRow>

                      <div className="my-4">
                    <h6> Enter Double Sharing  Homestay Details </h6>
                    </div>  
                       <MDBRow>
                          <MDBCol size="6">
                            <p className="p1">Price (per month):</p>
                            <MDBInput
                              required
                              wrapperClass="mb-4"
                              label="Price"
                              name="price"
                              type="number"
                              // onChange={changeHandler}
                              // value={formData.price}
                            />
                            </MDBCol>
                    
                        <MDBCol size="6 mb-4">
                          <p className="p1 ">Upload Double Sharing room image:</p>
                          <input
                            type="file"
                            className="form-control"
                            name="documents"
                            // onChange={changeHandler}
                            multiple
                          />
                        </MDBCol>
                        </MDBRow>
                        <MDBRow>
                        
                        <MDBCol size="6 mb-4">
                            <p className="p1">Amenities:</p>
                            <textarea
                              className="form-control"
                              name="description"
                              onChange={changeHandler}
                              value={formData.description}
                              rows="4"
                            />
                          </MDBCol>
                          <MDBCol size="6 mb-4">
                            <p className="p1">  Homestay Details:</p>
                            <textarea
                              className="form-control"
                              name="description"
                              onChange={changeHandler}
                              value={formData.description}
                              rows="4"
                            />
                          </MDBCol>
                      </MDBRow>


                      <div className="my-4">
                    <h6> Enter Triple Sharing  Homestay Details </h6>
                    </div>  
                       <MDBRow>
                          <MDBCol size="6">
                            <p className="p1">Price (per month):</p>
                            <MDBInput
                              required
                              wrapperClass="mb-4"
                              label="Price"
                              name="price"
                              type="number"
                              // onChange={changeHandler}
                              // value={formData.price}
                            />
                            </MDBCol>
                    
                        <MDBCol size="6 mb-4">
                          <p className="p1 ">Upload Triple Sharing room image:</p>
                          <input
                            type="file"
                            className="form-control"
                            name="documents"
                            // onChange={changeHandler}
                            multiple
                          />
                        </MDBCol>
                        </MDBRow>
                        <MDBRow>
                        
                        <MDBCol size="6 mb-4">
                            <p className="p1">Amenities:</p>
                            <textarea
                              className="form-control"
                              name="description"
                              onChange={changeHandler}
                              value={formData.description}
                              rows="4"
                            />
                          </MDBCol>
                          <MDBCol size="6 mb-4">
                            <p className="p1">  Homestay Details:</p>
                            <textarea
                              className="form-control"
                              name="description"
                              onChange={changeHandler}
                              value={formData.description}
                              rows="4"
                            />
                          </MDBCol>
                      </MDBRow>


                      <div className="my-4">
                    <h6> Enter Flatmate  Homestay Details </h6>
                    </div>  
                       <MDBRow>
                          <MDBCol size="6">
                            <p className="p1">Price (per month):</p>
                            <MDBInput
                              required
                              wrapperClass="mb-4"
                              label="Price"
                              name="price"
                              type="number"
                              // onChange={changeHandler}
                              // value={formData.price}
                            />
                            </MDBCol>
                    
                        <MDBCol size="6 mb-4">
                          <p className="p1 ">Upload image:</p>
                          <input
                            type="file"
                            className="form-control"
                            name="documents"
                            // onChange={changeHandler}
                            multiple
                          />
                        </MDBCol>
                        </MDBRow>
                        <MDBRow>
                        
                        <MDBCol size="6 mb-4">
                            <p className="p1">Amenities:</p>
                            <textarea
                              className="form-control"
                              name="description"
                              onChange={changeHandler}
                              value={formData.description}
                              rows="4"
                            />
                          </MDBCol>
                          <MDBCol size="6 mb-4">
                            <p className="p1">  Homestay Details:</p>
                            <textarea
                              className="form-control"
                              name="description"
                              onChange={changeHandler}
                              value={formData.description}
                              rows="4"
                            />
                          </MDBCol>
                      </MDBRow>




                    <MDBRow>
                        <MDBCol size="12 mb-4">
                          <p className="p1 ">Upload Property Documents:</p>
                          <input
                            type="file"
                            className="form-control"
                            name="images"
                            // onChange={changeHandler}
                            multiple
                          />
                        </MDBCol>
                    </MDBRow>





                    

                    
                    
                    
                    
                    
                    
                    <MDBBtn className="w-100 mb-4" size="md">
                      
                      Add Homestays 
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

export default AddHotels;
