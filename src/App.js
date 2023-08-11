import React from "react";

import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import Login from "./pages/Login";
import './App.css'
import Signup from "./pages/Signup";
import Addlisting from "./pages/Addlisting";
import MMain from "./pages/MMain";
import Owner from "./components/Form/Owner";
import Update from "./components/Form/Update";
import ChangePassword from "./components/Form/ChangePassword";
import Updateprofile from "./Dashboard/Updateprofile";
import AddRoom from "./Dashboard/AddRoom";
import Dashboard from "./Dashboard/Dashboard";
import AddAmeniteties from "./Dashboard/AddAmaniteties";
import AddHotels from "./Dashboard/AddHotels";
import AddCustomers from "./Dashboard/AddCustomers";
import PaymentOwner from "./Dashboard/PaymentOwner";
import SingleUser from "./Dashboard/SingleUser" ;
import UserMain from "./UserDashboard/UserMain";
import PgFilter from "./components/PgFilter/PgFilter";
import Nonregistraion from "./components/Form/Nonregistraion";
import DetailPG from "./components/PgFilter/DetailPG";
import Userdata from "./Dashboard/Userdata";
import AddPg from "./Dashboard/AddPg";
import HMFilter from "./components/HmFilter/Filter";
import SearchBar from "./SearchBar";




function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isEmail, setIsEmail] = useState(false);

  return (
    <div>
      <Routes>
        <Route path="/" element={<MMain />}></Route>
        <Route
          path="/login"
          element={<Login setIsLoggedIn={setIsLoggedIn} />}
        ></Route>
        <Route
          path="/signup"
          element={<Signup setIsLoggedIn={setIsLoggedIn} />}
        ></Route>
        <Route exact path="/Add-Customer" element={<AddCustomers />}></Route>
        <Route path="/Add-Hotel" element={<AddHotels />}></Route>
        <Route path="/Profile-Update" element={<Updateprofile />}></Route>
        <Route path="/Add-Amaniteties" element={<AddAmeniteties />}></Route>
        <Route path="/customer-details" element={<SingleUser/>}></Route>
        <Route
          path="/update"
          element={<Update setIsLoggedIn={setIsEmail} />}
        ></Route>
        <Route path="/update-password" element={<ChangePassword />}></Route>
        <Route
          path="/owner-signup"
          element={<Owner setIsLoggedIn={setIsLoggedIn} />}
        ></Route>
        <Route path="/dashboard-owner" element={<Dashboard />}></Route>
        <Route path="/addlisting" element={<Addlisting />}></Route>
        <Route path="/Add-Room" element={<AddRoom />}></Route>
        <Route path="/payment-owner" element={<PaymentOwner />}></Route>
        <Route path='/edit-profile' element={<UserMain/>}></Route>
        
         <Route path='/PG' element={<PgFilter/>}></Route>
         <Route path='/HM' element={<HMFilter/>}></Route>
         <Route path="/non-registered-pg" element={<Nonregistraion setIsLoggedIn={setIsLoggedIn}/>}></Route>
        <Route path="/Add-PG" element={<AddPg/>}></Route>
          <Route path="/detailspg" element={<DetailPG/>}></Route>
          <Route path="/details" element={<Userdata/>}></Route>
      </Routes>
     <SearchBar/>
    </div>
  );
}
export default App;
