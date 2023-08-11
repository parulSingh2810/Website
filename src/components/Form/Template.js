import React from "react";
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";

const Template = ({
  tittle,
  tittle2,
  desc1,
  desc2,
  formtype,
  setIsLoggedIn,
}) => {
  return (
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
            {tittle}
            <br />
            <span className="text-primary">{tittle2} </span>
          </h1>

          <p className="px-3" style={{ color: "hsl(217, 10%, 50.8%)" }}>
            {desc2}
          </p>
        </MDBCol>
        <MDBCol md="6">
          {formtype === "signup" ? (
            <SignupForm setIsLoggedIn={setIsLoggedIn} />
          ) : (
            <LoginForm setIsLoggedIn={setIsLoggedIn} />
          )}
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Template;
