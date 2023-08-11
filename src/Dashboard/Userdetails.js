import React, { useEffect, useState } from 'react'
import {
  MDBBadge,
  MDBBtn,
  MDBTable,
  MDBTableHead,
  MDBTableBody,
} from "mdb-react-ui-kit";
import { Box } from '@mui/material';
import ResponsiveDrawer from './Sidebar';
import NavbarDashboard from './NavbarDashboard';


const Userdetails = () => {
const [ud,setUd]=useState([]);
useEffect(()=>{
    const getcategory=async()=>{
    const res= await fetch('http://localhost:8000/tabledata');
    const getdata = await res.json();
    setUd(getdata);
    }
    
    getcategory();

},[]);

  return (
<div>
<NavbarDashboard />
      <Box height={10} />
      <Box sx={{ display: "flex" }}>
        {/* <ResponsiveDrawer /> */}
        <Box component="main" >
  <div style={{ overflowX: 'auto', maxHeight: '310px' ,padding: '20px', margin: '20px', border: '0.5px '}}>
  <style>
        {`
          /* Hide the vertical scrollbar 
          ::-webkit-scrollbar {
            width: 0.5em;
          }

          ::-webkit-scrollbar-thumb {
            background-color: rgba(0, 0, 0, 0); /* Make the thumb transparent s
          }
        `}
</style>
      
<MDBTable align="center">
      <MDBTableHead>
      <tr>
      
      <th scope="col">Name</th>
      <th scope="col">Address</th>
      <th scope="col">room_number</th>
      <th scope="col">Mobilenumber</th>
      <th scope='col'>Ratting</th>
      <th scope="col">Actions</th>
    </tr>
      </MDBTableHead>
      <MDBTableBody>
      {
  ud.map((ans)=>(
    <tr key = {ans.id }>
        
          <td>
            <div className="d-flex align-items-center">
              <img
                src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                alt=""
                style={{ width: "45px", height: "45px" }}
                className="rounded-circle"
              />
               {/* {ans.firstName} */}
              <div className="ms-3">
                <p className="fw-bold mb-1">{ans.firstName} {ans.lastName}</p>
                <p className="text-muted mb-0">{ans.email}</p>
              </div>
            </div>
          </td>
          <td>
            <p className="fw-normal mb-1">{ans.address}</p>
            
          </td>
         
          <td>{ans.room_number}</td>
          <td>{ans.mobile_number}</td>
          <td>
            {ans.review}
          </td>
          <td>
            <MDBBtn className="button" color="black" rounded size="sm">
              Edit
            </MDBBtn>
          </td>

         
        </tr>
  )    
  )
  }
      </MDBTableBody>
    </MDBTable>
 </div>

  </Box>
  </Box>

  

</div>
  )
}

export default Userdetails