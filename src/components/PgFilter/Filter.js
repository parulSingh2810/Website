import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import "./Filter.css";
import Card from "../Card/Card";
import Navbar2 from "./Navbar2";

const Filter = () => {
  const catId = parseInt(useParams().id);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [sort, setSort] = useState(null);
  const [selectedSubCats, setSelectedSubCats] = useState([]);

  const handleChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    setSelectedSubCats(
      isChecked
        ? [...selectedSubCats, value]
        : selectedSubCats.filter((item) => item !== value)
    );
  };

  return (
    <div>
      <div className="products">
        <div className="left" style={{ backgroundColor: "whitesmoke" }}>
          <div className="filterItem ">
            <form className="d-flex align-items-center pt-5 pb-3">
              <input
                type="search"
                className="form-control me-2"
                placeholder="Search"
                style={{ width: "100px" }}
              />
              <button type="submit" className="btn btn-success ">
                Search
              </button>
            </form>

            <h5>&nbsp;&nbsp;&nbsp;Price per Month</h5>
            <ul class="filterList " style={{ listStyleType: "none" }}>
              <li class="">
                <span class="checkmarkOuter">
                  <input
                    type="checkbox"
                    style={{ marginRight: "10px", color: "white" }}
                    id="₹ 0 - ₹ 1500"
                  />

                  <label for="₹ 0 - ₹ 1500" style={{ color: "black" }}>
                    ₹ 0 &nbsp;-&nbsp; ₹ 1500
                  </label>
                </span>
              </li>
              <li class="">
                <span class="checkmarkOuter">
                  <input type="checkbox" id="₹ 1500 - ₹ 3000" />
                  <label for="₹ 1500 - ₹ 3000" style={{ color: "black" }}>
                    &nbsp;&nbsp;₹ 1500 &nbsp;-&nbsp; ₹ 3000
                  </label>
                </span>
              </li>
              <li class="">
                <span class="checkmarkOuter">
                  <input type="checkbox" id="₹ 3000 - ₹ 5000" />
                  <label for="₹ 3000 - ₹ 5000" style={{ color: "black" }}>
                    &nbsp;&nbsp;₹ 3000 &nbsp;-&nbsp; ₹ 5000
                  </label>
                </span>
              </li>
              <li class="">
                <span class="checkmarkOuter">
                  <input type="checkbox" id="₹ 5000 - ₹ 7000" />
                  <label for="₹5000 - ₹ 7000" style={{ color: "black" }}>
                    &nbsp;&nbsp;₹ 5000 &nbsp;-&nbsp; ₹ 7000
                  </label>
                </span>
              </li>
              <li class="">
                <span class="checkmarkOuter">
                  <input type="checkbox" id="₹ 7000 - ₹ 10000" />
                  <label for="₹ 7000 - ₹ 10000" style={{ color: "black" }}>
                    &nbsp;&nbsp;₹ 7000 &nbsp;-&nbsp; ₹ 10000
                  </label>
                </span>
              </li>
          
            </ul>
            {/* Property Type Filter */}
            <div className="mb-3">
              <label className="form-label">
                <h5>&nbsp;&nbsp;&nbsp;Property Type Filter:</h5>
              </label>
              <div>
                <label>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <input type="checkbox" value="PG" />
                  <span className="mx-2" style={{ color: "black" }}>
                    PG
                  </span>
                </label>
                <br></br>
                <label>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <input type="checkbox" value="Homestay" />
                  <span className="mx-2" style={{ color: "black" }}>
                    Homestay
                  </span>
                </label>
              </div>
            </div>

             {/*AC/NON AC */}
             <div className="mb-3">
              <label className="form-label">
                <h5>&nbsp;&nbsp;&nbsp;AC/NON AC:</h5>
              </label>
              <div>
                <label>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <input type="checkbox" value="AC" />
                  <span className="mx-2" style={{ color: "black" }}>
                    AC
                  </span>
                </label>
                <br></br>
                <label>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <input type="checkbox" value="NON AC" />
                  <span className="mx-2" style={{ color: "black" }}>
                    NON AC
                  </span>
                </label>
              </div>
            </div>


{/* Food Filter */}
<div className="mb-6">
              <label className="form-label">
                <h5>&nbsp;&nbsp;&nbsp;Food/Without Food</h5>
              </label>
              <div>
                <label>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <input type="Radio" value="Food" name="Food" />
                  <span className="mx-1" style={{ color: "black" }}>
                    Food
                  </span>
                </label>
                <br></br>
                <label>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <input type="Radio" value="Food" name="Food" />
                  <span className="mx-1" style={{ color: "black" }}>
                    Without Food
                  </span>
                </label>
              </div>
            </div>
{/* Gender Filter */}
            <div className="mb-6">
              <label className="form-label">
                <h5>&nbsp;&nbsp;&nbsp;Gender</h5>
              </label>
              <div>
                <label>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <input type="Radio" value="Male" name="gender" />
                  <span className="mx-1" style={{ color: "black" }}>
                    Male
                  </span>
                </label>
                <br></br>
                <label>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <input type="Radio" value="Female" name="gender" />
                  <span className="mx-1" style={{ color: "black" }}>
                    Female
                  </span>
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="right  ">
          <Card />
        </div>
      </div>
    </div>
  );
};

export default Filter;
