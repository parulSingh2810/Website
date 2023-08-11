import React from "react";
import "./Card.css";

import { HiOutlineLocationMarker } from "react-icons/hi";
import { BsClipboardCheck } from "react-icons/bs";
import img from "../../imagess/1.jpg";
import img2 from "../../imagess/2.jpg";
import img3 from "../../imagess/3.jpg";
import img4 from "../../imagess/4.jpg";
import img5 from "../../imagess/5.jpg";
import img7 from "../../imagess/7.jpg";
import img6 from "../../imagess/6.jpg";
import img9 from "../../imagess/1.jpg";
import img8 from "../../imagess/8.jpg";
import img10 from "../../imagess/3.jpg";
import img11 from "../../imagess/1.jpg";
import img12 from "../../imagess/6.jpg";
import Aos from "aos";
import "aos/dist/aos.css";

import { useEffect } from "react";
import { Link } from "react-router-dom";

const Data = [
  {
    id: 1,
    imgSrc: img,
    destTitle: "xyz",
    location: "Bhimtal",
    rating: "Environment",
    user: "1300+",
    description:
      "xyz PG is one of the best PG in the Bhimtal nearest Lake of water. This place is know for its luxurious stays and study environment.",
  },
  {
    id: 2,
    imgSrc: img2,
    destTitle: "xyz",
    location: "Bhimtal",
    rating: "Environment",
    user: "1300+",
    description:
      "xyz PG is one of the best PG in the Bhimtal nearest Lake of water. This place is know for its luxurious stays and study environment.",
  },
  {
    id: 3,
    imgSrc: img3,
    destTitle: "xyz",
    location: "Bhimtal",
    rating: "Environment",
    user: "1300+",
    description:
      "xyz PG is one of the best PG in the Bhimtal nearest Lake of water. This place is know for its luxurious stays and study environment.",
  },
  {
    id: 4,
    imgSrc: img4,
    destTitle: "xyz",
    location: "Bhimtal",
    rating: "Environment",
    user: "1300+",
    description:
      "xyz PG is one of the best PG in the Bhimtal nearest Lake of water. This place is know for its luxurious stays and study environment.",
  },
  {
    id: 5,
    imgSrc: img5,
    destTitle: "xyz",
    location: "Bhimtal",
    rating: "Environment",
    user: "1300+",
    description:
      "xyz PG is one of the best PG in the Bhimtal nearest Lake of water. This place is know for its luxurious stays and study environment.",
  },
  {
    id: 6,
    imgSrc: img6,
    destTitle: "xyz",
    location: "Bhimtal",
    rating: "Environment",
    user: "1300+",
    description:
      "xyz PG is one of the best PG in the Bhimtal nearest Lake of water. This place is know for its luxurious stays and study environment.",
  },
  
 
];
const Card = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div>
    <section>
      <div className="main container section">
        <div className="secTitle">
          <h3 data-aos="fade-right" data-aos-duration="5000" className="title">
            Most rating PGs & Homestays
          </h3>
        </div>
        <div data-aos="fade-up" className="secContent grid">
          {Data.map(
            ({
              id,
              imgSrc,
              destTitle,
              location,
              rating,
              user,
              description,
            }) => {
              return (
                <div key={id} data-aos="fade-up" className="singleDestination">
                  <div className="imageDiv">
                    <img src={imgSrc} className="img1" alt={destTitle} />
                  </div>

                  <div className="cardInfo">
                    <h4 className="destTitle">{destTitle}</h4>
                    <span className="continent flex">
                      <HiOutlineLocationMarker className="icon" />
                      <span className="name">{location}</span>
                    </span>

                    <div className=" fees flex">
                      <div className="grade">
                        <span>
                          {rating}
                          <small className="small1">+3</small>
                        </span>
                      </div>
                      <div className="price">
                        <h5>{user}</h5>
                      </div>
                    </div>
                    <div className="desc">
                      <p>{description}</p>
                    </div>
                     <Link to="/detailspg">
                    <button className="btn1 flex">
                      DETAILS <BsClipboardCheck className="icon" />
                    </button>
                    </Link>
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>
    </section>

<section>
<div className="main container section">
  <div className="secTitle">
    <h3 data-aos="fade-right" data-aos-duration="5000" className="title">
      Top Most Homestays
    </h3>
  </div>
  <div data-aos="fade-up" className="secContent grid">
    {Data.map(
      ({
        id,
        imgSrc,
        destTitle,
        location,
        rating,
        user,
        description,
      }) => {
        return (
          <div key={id} data-aos="fade-up" className="singleDestination">
            <div className="imageDiv">
              <img src={imgSrc} className="img1" alt={destTitle} />
            </div>

            <div className="cardInfo">
              <h4 className="destTitle">{destTitle}</h4>
              <span className="continent flex">
                <HiOutlineLocationMarker className="icon" />
                <span className="name">{location}</span>
              </span>

              <div className=" fees flex">
                <div className="grade">
                  <span>
                    {rating}
                    <small className="small1">+3</small>
                  </span>
                </div>
                <div className="price">
                  <h5>{user}</h5>
                </div>
              </div>
              <div className="desc">
                <p>{description}</p>
              </div>
               <Link to="/detailspg">
              <button className="btn1 flex">
                DETAILS <BsClipboardCheck className="icon" />
              </button>
              </Link>
            </div>
          </div>
        );
      }
    )}
  </div>
</div>
</section>

<section>
      <div className="main container section">
        <div className="secTitle">
          <h3 data-aos="fade-right" data-aos-duration="5000" className="title">
           Top Most PGs
          </h3>
        </div>
        <div data-aos="fade-up" className="secContent grid">
          {Data.map(
            ({
              id,
              imgSrc,
              destTitle,
              location,
              rating,
              user,
              description,
            }) => {
              return (
                <div key={id} data-aos="fade-up" className="singleDestination">
                  <div className="imageDiv">
                    <img src={imgSrc} className="img1" alt={destTitle} />
                  </div>

                  <div className="cardInfo">
                    <h4 className="destTitle">{destTitle}</h4>
                    <span className="continent flex">
                      <HiOutlineLocationMarker className="icon" />
                      <span className="name">{location}</span>
                    </span>

                    <div className=" fees flex">
                      <div className="grade">
                        <span>
                          {rating}
                          <small className="small1">+3</small>
                        </span>
                      </div>
                      <div className="price">
                        <h5>{user}</h5>
                      </div>
                    </div>
                    <div className="desc">
                      <p>{description}</p>
                    </div>
                     <Link to="/detailspg">
                    <button className="btn1 flex">
                      DETAILS <BsClipboardCheck className="icon" />
                    </button>
                    </Link>
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>
    </section>

    </div>
  );
};

export default Card;
