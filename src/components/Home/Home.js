import React ,{ useState }from "react";
import "./Home.css";
import background from "../../imagess/image.jpg";
import { GrLocation } from "react-icons/gr";
import { HiFilter } from "react-icons/hi";

import { AiOutlineHome } from "react-icons/ai";
import { MDBBtn } from "mdb-react-ui-kit";

import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import axios from 'axios';
// import { toast } from "react-hot-toast";
// import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  
 

  // const [formData, setFormData] = useState({
  //   search:"",
    


  // });
    
  // const changeHandler = (event) => {
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     [event.target.name]: event.target.value,
  //   }));
  // };
  
  // const submitHandler= (e) =>{
  //   e.preventDefault();
    
  //   axios.post('http://localhost:8000/searching',{Address,city})
  //   .then (res => {
  //     useEffect(()=>{
  //       const getcategory=async()=>{
  //       const getdata = res.json();
  //       setUd(getdata);
  //       }
  //       getcategory();
    
  //   },[]);
  // })}



  const submitHandler = (e) => {
    e.preventDefault();

    axios.post("http://localhost:8000/searchfetch", { search})
      .then((res) => {

        toast.success("Your Data is serached");
        console.log(res.data);
        // console.log(formData);

        navigate("/");
      })
      .catch((error) => {
        console.error("Error fetching search results:", error);
      });
  };

  return (
    <section
      className="home"
      style={{
        backgroundImage: `url(${background})`,
       
        marginTop: "-5px",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="homeContent ">
        <div data-aos="fade-up" className="text1-white">
          <MDBBtn className=" btn1 mx-2" tag="a" href="/PG">
            <AiOutlineHome className="icon" /> PayingGuest
          </MDBBtn>
          <MDBBtn className="btn1 mx-2" tag="a" href="/HM">
            <AiOutlineHome className="icon" /> HomeStays
          </MDBBtn>
        
        </div>

        <form data-aos='fade-up' action='' method='POST'onSubmit={submitHandler}>


        <div data-aos="fade-up" className="cardDiv grid">
          <div className="CityInput">
            <label htmlFor="city">Search Your Location</label>
            <div className="cityin flex">
              <div className="input flex">
                <input
                  className="input1"
                  type="text"
                  name= "search"
                  placeholder="Enter City here....."
                  // onChange={changeHandler}
                  // value= {formdata.search}
            
                />

                <GrLocation className="icon" />
              </div>
            </div>
          </div>

          <div className="dateInput">
            <label htmlFor="date">Select Your date: </label>
            <div className="datef  flex">
              <div className="input flex">
                <input className="input1" type="date" />
              </div>
            </div>
          </div>
          <div className="RoomType">
            <label htmlFor="Room">Choose Room-Type:</label>
            <div className="roomTy flex">
              <div className="input flex">
                <input type="checkbox" value="Single" />
                <label htmlFor="Room"> Single</label>
                <input className="input1" type="checkbox" value="Two-sharing" />
                <label className="input1" htmlfor="Room">
                  {" "}
                  Two-Sharing
                </label>
                <input
                  className="input1"
                  type="checkbox"
                  value="Three-Sharing"
                />
                <label htmlfor="Room"> Three-Sharing</label>
              </div>
            </div>
          </div>

          <div className="searchOptions flex">
            {/* <HiFilter className="icons" /> */}
            <button>Search</button>
          </div>
        </div>
        </form>
      </div>
    </section>
  );
};


export default Home;
