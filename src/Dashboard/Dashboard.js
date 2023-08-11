import React from 'react'
import Box from '@mui/material/Box';
import ResponsiveDrawer from './Sidebar'
import NavbarDashboard from './NavbarDashboard';
import  DashHome from './DashHome';
import Userdetails from './Userdetails';
import ChartOwner from './ChartOwner';
import Footer from '../components/Footer/Footer';




function Dashboard() {
  return (
    
 <div>
   
     <NavbarDashboard/>
     <Box height= {30}/>
     <Box sx={{display: 'flex'  }}>
     <ResponsiveDrawer/>     
     <Box component="main"  sx={{flexGrow: 1,p:3}}>
       <DashHome/>
       <Userdetails/>
       <ChartOwner/>
      
       
     </Box>
     </Box>
  
  

 </div>

  );
}

export default Dashboard