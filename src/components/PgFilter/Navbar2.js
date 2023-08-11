import { Home, Notifications } from "@mui/icons-material";
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  InputBase,
  Menu,
  MenuItem,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";

import React, { useState } from "react";
import { Link } from "react-router-dom";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
  color:"black"
}));

const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  alignItems: "center",
  gap: "20px",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));
const Navbar2 = () => {
  const [open, setOpen] = useState(false);
  return (
    <AppBar position="sticky" sx={{backgroundColor:"whitesmoke" ,width:"100%"}}>
      <StyledToolbar>
        <Typography sx={{ display: { xs: "none", sm: "block" } }}>
          <img src="./Imagess/logo-1.png" alt="" style={{width:'150px', height: '50px'}}/>
        </Typography>
        <Typography sx={{ display: { xs: "block", sm: "none" } }}>
          <img src="./Imagess/logo-1.png" alt="" style={{width:'80px', height: '35px'}}/>
        </Typography>
       
        <Search>
          <InputBase placeholder="search..." />
        </Search>
        <Icons style={{color: "blue"}}>
          <Link to='/' >
          <Badge >
            <Home />
          </Badge>
          </Link>
          <Badge badgeContent={2} color="error">
            <Notifications />
          </Badge>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            onClick={(e) => setOpen(true)}
          />
        </Icons>
        <UserBox onClick={(e) => setOpen(true)}>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
         
        </UserBox>
      </StyledToolbar>
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
    </AppBar>
  );
};

export default Navbar2;