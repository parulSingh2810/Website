import React from 'react'
import Template from '../components/Form/Template'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'

const Login = ({ setIsLoggedIn }) => {
  return (
    <div>
      <Navbar/>
      <Template
        tittle="Welcom Back !"
        tittle2="Thikana User"
        desc1="Serach your Thikana anywhere & anytime for your Help  "
        desc2="Now Ready to enter on Thikana "
        formtype="login"
        setIsLoggedIn={setIsLoggedIn}


      />

      <Footer />
    </div>
  )

}

export default Login