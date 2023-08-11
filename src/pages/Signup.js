import React from "react";
import Template from "../components/Form/Template";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";


const Signup = ({ setIsLoggedIn }) => {
  return (
    <div>
      <Navbar/>
      <Template
        tittle="WELCOME on ! "
        tittle2="  THikana......."
        desc1="Login and check your rewards and search Thikana "
        desc2="Create Id and Search Thikana in any city any Time "
        formtype="signup"
        setIsLoggedIn={setIsLoggedIn}
      />

      <Footer />
    </div>
  );
};

export default Signup;
