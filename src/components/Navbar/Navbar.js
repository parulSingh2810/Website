import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { toast } from "react-hot-toast";

import './Navbar.css'
import { Avatar, Box, Menu, Typography } from "@mui/material";
import { MenuItem, styled } from "@material-ui/core";


const Navbar = (props) => {
  let isLoggedIn = props.isLoggedIn;
  let setIsLoggedIn = props.setIsLoggedIn;

  const UserBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "5px",
    
   
  }));
  const [open, setOpen] = useState(false);
  return (
    <div >
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <div className="d-flex align-items-center">
            <img
              src="./imagess/logo-1.png"
              alt="Logo"
              style={{ height: "50px", width: "150px" }}/>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
           
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink to="/" className="nav-link">
                <button  className="btn2" type = "button" >Home</button>
                </NavLink>
              </li>

              {!isLoggedIn && (
                <li className="nav-item">
                  <Link to="/signup" className="nav-link">
                    <button className="btn2" type ="button">Sign Up</button>
                  </Link>
                </li>
              )}

              {!isLoggedIn && (
                <li className="nav-item">
                  <Link to="/login" className="nav-link">
                   <button className="btn2"  type = "button"> Login </button>
                  </Link>
                </li>
              )}
              <li className="nav-item">
                <Link to="/login" className="nav-link"> 
                  <button className="btn2" type = "button"> +AddListing </button>
                </Link>
              </li>
                
            
                 <li class="nav-item">
                 <UserBox onClick={(e) => setOpen(true)}>
                  <Avatar
                   sx={{ width: 40, height: 40 ,top: 13 }}
                    src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                   />
                
                 </UserBox>
                  <Menu
                  id="demo-positioned-menu"
                 aria-labelledby="demo-positioned-button"
              open={open}
               onClose={(e) => setOpen(false)}
             anchorOrigin={{
                vertical: "top",
               horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      > 
      <Link to="/edit-profile">
        <MenuItem>Profile</MenuItem>
        </Link>
        <Link to='/profile'>
        <MenuItem>My account</MenuItem>
        </Link>
        <Link to='/'>
        <MenuItem >Logout</MenuItem>
        </Link>
      </Menu>
            
           
       
          </li>
            
              {isLoggedIn && (
                <li className="nav-item">
                  <Link to="/" className="nav-link">
                    <button
                      size="sm"
                      onClick={() => {
                        setIsLoggedIn(false);
                        toast.success("Logged Out");
                      }}
                    >
                      Logout
                    </button>
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
