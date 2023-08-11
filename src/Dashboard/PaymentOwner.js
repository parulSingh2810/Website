import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
} from "mdb-react-ui-kit";
import NavbarDashboard from "./NavbarDashboard";
import ResponsiveDrawer from "./Sidebar";
import { Box } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-hot-toast";

const PaymentOwner = () => {

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    
  });

  const [guests, setGuests] = useState([]); // State to manage multiple guests

  const addGuest = () => {
    // Add the current formData to the guests list
    setGuests([...guests, formData]);
    // Reset the formData to clear the input fields
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
    });
  };

  const removeGuest = (index) => {
    const updatedGuests = guests.filter((_, i) => i !== index);
    setGuests(updatedGuests);
  };

  const changeHandler = (event) => {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    await axios
      .post("http://localhost:8000/Update-Profile", formData)
      .then((res) => {
        if (res.data === "account already created pls login") {
          toast.success("account already created pls login");
          return;
        }
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
      <Box height={100} />
      <Box sx={{ display: "flex" }}>
        <ResponsiveDrawer />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <div className="container ">
            <div className="row">
              <div className="col-md-8">
              <MDBCard className="mb-3">
  <MDBCardBody>
    <MDBCardTitle>Guest Payment detail </MDBCardTitle>
    <MDBCardText>
      <form onSubmit={submitHandler}>
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            name="firstName"
            onChange={changeHandler}
            value={formData.firstName}
            className="form-control"
            id="firstName"
            placeholder="Enter First Name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            name="lastName"
            onChange={changeHandler}
            value={formData.lastName}
            className="form-control"
            id="lastName"
            placeholder="Enter Last Name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            onChange={changeHandler}
            value={formData.email}
            className="form-control"
            id="email"
            placeholder="Enter Email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Contact Number</label>
          <input
            type="text"
            name="phone"
            onChange={changeHandler}
            value={formData.phone}
            className="form-control"
            id="phone"
            placeholder="Enter Contact Number"
          />
        </div>
        {/* Add other form fields and elements as needed */}
        <div className="text-center mt-3">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>

      <button onClick={addGuest} className="btn btn-danger mt-3">
              Add Guest
            </button>

            {/* Display added guests */}
            {guests.map((guest, index) => (
              <div key={index} className="mt-3">
                <h5>Guest {index + 1}</h5>

                <p>First Name: {guest.firstName}</p>
                <input
                type="text"
                name="firstName"
                onChange={changeHandler}
                value={formData.firstName}
                className="form-control"
                id="firstName"
                placeholder="Enter First Name"
              />
                <p>Last Name: {guest.lastName}</p>
                  <input
            type="text"
            name="lastName"
            onChange={changeHandler}
            value={formData.lastName}
            className="form-control"
            id="lastName"
            placeholder="Enter Last Name"
          />
                <p>Email: {guest.email}</p>
                <input
                type="email"
                name="email"
                onChange={changeHandler}
                value={formData.email}
                className="form-control"
                id="email"
                placeholder="Enter Email"
              />
                <p>Phone: {guest.phone}</p>
                <input
                type="text"
                name="phone"
                onChange={changeHandler}
                value={formData.phone}
                className="form-control"
                id="phone"
                placeholder="Enter Contact Number"
              />
               <div className="text-end mt-3">
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => removeGuest(index)}
                    >
                      Remove Guest
                    </button>
                  </div>
                
              </div>
            ))}
            
    </MDBCardText>
  </MDBCardBody>
</MDBCard>

              </div>
              <div className="col-md-4">
                <MDBCard className="mb-3">
                  <MDBCardBody>
                    <MDBCardTitle>Payment Option 2</MDBCardTitle>
                    <MDBCardText>
                      <form>
                        
                      </form>
                    </MDBCardText>
                  </MDBCardBody>
                </MDBCard>
              </div>
            </div>
          </div>
        </Box>
      </Box>
    </div>
  );
};

export default PaymentOwner;
