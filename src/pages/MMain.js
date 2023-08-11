import React from 'react'
import Home from '../components/Home/Home'
import Card from '../components/Card/Card'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'


function MMain({isLoggedIn,setIsLoggedIn}) {
  return (
    <div>
      
    {/* <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />  */}
     <Navbar/>
     <Home/> 
     <Card/> 
     <Footer/>


    </div>
  )
}

export default MMain