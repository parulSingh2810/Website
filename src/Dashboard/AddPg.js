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

function AddPg() {
  const [formData, setFormData] = useState({
    
    PGName:"",
    email:"",
    Address:"",
    City:"",
    District:"",
    State :"",
    Pincode:"",
    GSTnumber:"",
    PanCardNo:"",
    TotalNoOfRooms:"",
    AC: "",
    NONAC: "",
    ContactPerson:"",
  //  Single sharing 
  SinglePrice:"",
  SingleImage:"",
  SingleAmenitiy:"",
  SingleDetails:"",
    // Double Sharing 

    DoublePrice:"",
    DoubleImage:"",
    DoubleAmanitiy:"",
    DoubleDetails:"",
    // Triple sharing

    TriplePrice:"",
    TripleImage:"",
    TripleAmenities:"",
    TripleDetails:"",

    //Flatmate

    FlatmatePrice:"",
    FlatmateImage:"",
    FlatmateAmenities:"",
    FlatmateDetails:"",
    
    PropertyDocuments:"",
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

    axios.post("http://localhost:8000/Add-PG", formData)
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
                  <Link to='/Add-Hotel' >
                    <MDBBtn className="btn1">
                      Homestay
                    </MDBBtn>
                  </Link>
                </div>
                <form onSubmit={submitHandler}>
                  <MDBCard
                    style={{
                      background: "hsla(0, 0%, 100%, 0.8)",
                    }}
                  >


                    <MDBCardBody className="p-11  justify-content-space-between">
                      <h2 className="fw-bold mb-5 text-center text-primary">
                        Add PG
                      </h2>

                      <MDBRow>
                        <MDBCol col="6">
                          <p className="p1">
                            Pg Name <sub className="sub1">*</sub>
                          </p>
                          <MDBInput
                            required
                            wrapperClass="mb-4"
                            label="PG Name"
                            name="PGName"
                            type="text"
                            onChange={changeHandler}
                            value={formData.PGName}
                           
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
                            name="email"
                            type="Email"
                            onChange={changeHandler}
                            value={formData.email}
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
                            name="City"
                            onChange={changeHandler}
                            value={formData.City}

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
                            name="State"
                            onChange={changeHandler}
                            value={formData.State}

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
                            type="number"
                            onChange={changeHandler}
                            value={formData.Pincode}

                           
                            
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
                            name="GSTnumber"
                            onChange={changeHandler}
                            value={formData.GSTnumber}
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
                            name="PanCardNo"
                            onChange={changeHandler}
                            value={formData.PanCardNo}

                            type="text"
                          />
                        </MDBCol>
                      </MDBRow>

                      <MDBRow>
                        <MDBCol size="3">
                          <p className="p1">
                            Total Numbers of Room <sub className="sub1">*</sub>
                          </p>
                          <MDBInput
                            required
                            wrapperClass="mb-4"
                            label="Room Numbers"
                            name="TotalNoOfRooms"
                            onChange={changeHandler}
                            value={formData.TotalNoOfRooms}
                            type="text"/>
                        </MDBCol>
                       
                        <MDBCol size="3">
                          <p className="p1">
                            Room Type <sub className="sub1">*</sub>
                          </p>

                          <MDBRow>
                              <MDBCol>
                                <MDBInput
                                 required
                                  wrapperClass="mb-4"
                                  label="AC"
                                  name="AC"
                                  onChange={changeHandler}
                                  value={formData.AC}
                                  type="text"
                                />
                              </MDBCol>
                              <MDBCol>
                                <MDBInput
                                  wrapperClass="mb-4"
                                  label="Non-AC"
                                  name="NONAC"
                                  type="text"
                                  onChange={changeHandler}
                                  value={formData.NONAC}
                                />
                              </MDBCol>
                            </MDBRow>
                        </MDBCol>                    

                           <MDBCol size="6">
                              <p className="p1">
                                Contact Number <sub className="sub1">*</sub>
                              </p>
                              <MDBInput
                                required
                                wrapperClass="mb-4"
                                label="Contact Person "
                                name="ContactPerson"
                                onChange={changeHandler}
                                value={formData.ContactPerson}
                                type="number"/>
                          </MDBCol>                         
                      </MDBRow>
                    <div className="my-4">
                    <h6> Enter Single Sharing PG Details </h6>
                    </div>  
                       <MDBRow>
                          <MDBCol size="6">
                            <p className="p1">Price (per month):</p>
                            <MDBInput
                              required
                              wrapperClass="mb-4"
                              label="Price"
                              name="SinglePrice"
                              type="number"
                              onChange={changeHandler}
                              value={formData.SinglePrice}
                            />
                            </MDBCol>
                    
                        <MDBCol size="6 mb-4">
                          <p className="p1 ">Upload Single room image:</p>
                          <input
                            type="file"
                            className="form-control"
                            name="SingleImage"
                            onChange={changeHandler}
                            value={formData.SingleImage}
                            multiple
                          />
                        </MDBCol>
                        </MDBRow>
                        <MDBRow>
                        
                        <MDBCol size="6 mb-4">
                            <p className="p1">Amenities:</p>
                            <textarea
                              className="form-control"
                              name="SingleAmenitiy"
                              onChange={changeHandler}
                              value={formData.SingleAmenitiy}
                              rows="4"
                              type="text"
                            />
                          </MDBCol>
                          <MDBCol size="6 mb-4">
                            <p className="p1">PG Details:</p>
                            <textarea
                              className="form-control"
                              name="SingleDetails"
                              onChange={changeHandler}
                              value={formData.SingleDetails}
                              rows="4"
                              type="text"
                            />
                          </MDBCol>
                      </MDBRow>

                      <div className="my-4">
                    <h6> Enter Double Sharing PG Details </h6>
                    </div>  
                       <MDBRow>
                          <MDBCol size="6">
                            <p className="p1">Price (per month):</p>
                            <MDBInput
                              required
                              wrapperClass="mb-4"
                              label="Price"
                              name="DoublePrice"
                              type="number"
                              onChange={changeHandler}
                              value={formData.DoublePrice}
                            />
                            </MDBCol>
                    
                        <MDBCol size="6 mb-4">
                          <p className="p1 ">Upload Double Sharing room image:</p>
                          <input
                            type="file"
                            className="form-control"
                            name="DoubleImage"
                            onChange={changeHandler}
                            value={formData.DoubleImage}
                            multiple
                          />
                        </MDBCol>
                        </MDBRow>
                        <MDBRow>
                        
                        <MDBCol size="6 mb-4">
                            <p className="p1">Amenities:</p>
                            <textarea
                              className="form-control"
                              name="DoubleAmanitiy"
                              onChange={changeHandler}
                              value={formData.DoubleAmanitiy}
                              rows="4"
                              type="text"
                            />
                          </MDBCol>
                          <MDBCol size="6 mb-4">
                            <p className="p1">PG Details:</p>
                            <textarea
                              className="form-control"
                              name="DoubleDetails"
                              onChange={changeHandler}
                              value={formData.DoubleDetails}
                              rows="4"
                              type="text"
                            />
                          </MDBCol>
                      </MDBRow>


                      <div className="my-4">
                    <h6> Enter Triple Sharing PG Details </h6>
                    </div>  
                       <MDBRow>
                          <MDBCol size="6">
                            <p className="p1">Price (per month):</p>
                            <MDBInput
                              required
                              wrapperClass="mb-4"
                              label="Price"
                              name="TriplePrice"
                              type="number"
                              onChange={changeHandler}
                              value={formData.TriplePrice}
                            />
                            </MDBCol>
                    
                        <MDBCol size="6 mb-4">
                          <p className="p1 ">Upload Triple Sharing room image:</p>
                          <input
                            type="file"
                            className="form-control"
                            name="TripleImage"
                            onChange={changeHandler}
                            value={formData.TripleImage}

                            multiple
                          />
                        </MDBCol>
                        </MDBRow>
                        <MDBRow>
                        
                        <MDBCol size="6 mb-4">
                            <p className="p1">Amenities:</p>
                            <textarea
                              className="form-control"
                              name="TripleAmenities"
                              onChange={changeHandler}
                              value={formData.TripleAmenities}
                              rows="4"
                              type="text"
                            />
                          </MDBCol>
                          <MDBCol size="6 mb-4">
                            <p className="p1">PG Details:</p>
                            <textarea
                              className="form-control"
                              name="TripleDetails"
                              onChange={changeHandler}
                              value={formData.TripleDetails}
                              rows="4"
                              type="text"
                            />
                          </MDBCol>
                      </MDBRow>


                      <div className="my-4">
                    <h6> Enter Flatmate PG Details </h6>
                    </div>  
                       <MDBRow>
                          <MDBCol size="6">
                            <p className="p1">Price (per month):</p>
                            <MDBInput
                              required
                              wrapperClass="mb-4"
                              label="Price"
                              name="FlatmatePrice"
                             type="number"
                               onChange={changeHandler}
                              value={formData.FlatmatePrice}
                            />
                            </MDBCol>
                    
                        <MDBCol size="6 mb-4">
                          <p className="p1 ">Upload image:</p>
                          <input
                            type="file"
                            className="form-control"
                            name="FlatmateImage"
                             onChange={changeHandler}
                             value={formData.FlatmateImage}

                            multiple
                          />
                        </MDBCol>
                        </MDBRow>
                        <MDBRow>
                        
                        <MDBCol size="6 mb-4">
                            <p className="p1">Amenities:</p>
                            <textarea
                              className="form-control"
                              name="FlatmateAmenities"
                              onChange={changeHandler}
                              value={formData.FlatmateAmenities}
                              rows="4"
                              type="text"
                            />
                          </MDBCol>
                          <MDBCol size="6 mb-4">
                            <p className="p1">PG Details:</p>
                            <textarea
                              className="form-control"
                              name="FlatmateDetails"
                              onChange={changeHandler}
                              value={formData.FlatmateDetails}
                              rows="4"
                              type="text"
                            />
                          </MDBCol>
                      </MDBRow>




                    <MDBRow>
                        <MDBCol size="12 mb-4">
                          <p className="p1 ">Upload Property Documents:  <sub className="sub1">*</sub>
                          </p> 
                          <input
                          required
                            type="file"
                            className="form-control"
                            name="PropertyDocuments"
                             onChange={changeHandler}
                             value={formData.PropertyDocuments}

                            multiple
                          />
                        </MDBCol>
                    </MDBRow>



                    <MDBBtn className="w-100 mb-4" size="md">

                      Add PG
                    </MDBBtn>

                  </MDBCardBody>
                </MDBCard>

              </form>

            </MDBCol>
          </MDBContainer>


        </div>
      </Box>
    </Box>
    </div >

    );
}

export default AddPg;
