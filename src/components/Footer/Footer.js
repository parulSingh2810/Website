import React from 'react';

function Footer() {
  return (
    <div className='Container-fluid'>
<div className="container-fluid mt-10  text-white p-5" style={{backgroundColor:"#0C0A2B"}}>
    <div className="footer-content text-center mx-auto mb-2.5" style={{color:'white'}}>
        <div style={{color:"white",fontSize:"20px"}}><p>World's leading chain of PG's and Homestay's</p></div>
    </div>
    <hr className="footer-line"/>
    <div className="container text-center">
        <div className="row">
           
            <div className="col-lg-3 col-md-3 mx-auto text-white text-center">
                <div className="logo text-center  mx-auto  mt-3 mb-2 ">
                <p>
                    <img src="./imagess/logo-1.png" className="navbar-brand img-fluid mx-auto" height="60%"
                        width="70%" alt="Logo"/>
                        </p>
                <br></br> <p>
                {/* <div className="mt-4 text-white"> */}
                <a
        class="btn text-white btn-floating m-1"
        style={{backgroundColor: "#3b5998"}}
        href="#!"
        role="button"
        ><i class="fab fa-facebook-f"></i
      ></a>

      {/* <!-- Twitter --> */}
      <a
        class="btn text-white btn-floating m-1"
        style={{backgroundColor: "#55acee"}}
        href="#!"
        role="button"
        ><i class="fab fa-twitter"></i
      ></a>

      {/* <!-- Google --> */}
      <a
        class="btn text-white btn-floating m-1"
        style={{backgroundColor: "#dd4b39"}}
        href="#!"
        role="button"
        ><i class="fab fa-google"></i
      ></a>

      {/* <!-- Instagram --> */}
      <a
        class="btn text-white btn-floating m-1"
        style={{backgroundColor: "#ac2bac"}}
        href="#!"
        role="button"
        ><i class="fab fa-instagram"></i
      ></a>

      {/* <!-- Linkedin --> */}
      <a
        class="btn text-white btn-floating m-1"
        style={{backgroundColor: "#0082ca"}}
        href="#!"
        role="button"
        ><i class="fab fa-linkedin-in"></i
      ></a>
      {/* <!-- Github --> */}
      <a
        class="btn text-white btn-floating m-1"
        style={{backgroundColor: "#333333"}}
        href="#!"
        role="button"
        ><i class="fab fa-github"></i
      ></a></p></div>
                  </div>
                <div className="flex flex-column  col-lg-3 col-md-3 mx-auto my-3 ">
                <div className=''> 
                  
                  <p><a href='' className='text-white  mx-auto my-3' >HOME</a></p>
                
                  <p><a href='' className='text-white  mx-auto my-3'>About us</a></p>
                  
                  <p><a href='' className='text-white  mx-auto my-3'>Contact us</a></p>
                  
                  </div>
                
                </div>
            
            <div className="col-lg-3 col-md-3 mx-auto my-3 ">
                <p>Terms and Conditions</p>
                <p>Company</p>
                <p>Help</p> 
               
            </div>
            <div className="col-lg-3 col-md-3 mx-auto my-3 ">
                <p>Thikana is a worlds leading best
                    website to suggest best possible
                    pGS and Homestay nearby
                    and suggest best offers.</p>
            </div>
        </div>
    </div>
</div>

      
      {/* <div className="container-fluid">
        <footer className="text-white text-center text-lg-start bg-primary">
          <div className="container ">
            <div className="row mt-4">
              <div className="col-lg-4 col-md-12 mb-4 mb-md-0">
                <h3 className="text- mb-4">About company</h3>
                <p>
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
                  voluptatum deleniti atque corrupti.
                </p>
                <p>
                  Blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias.
                </p>
                <div className="mt-4">
                  <a type="button" className="btn btn-floating btn-primary btn-lg">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a type="button" className="btn btn-floating btn-primary btn-lg">
                    <i className="fab fa-dribbble"></i>
                  </a>
                  <a type="button" className="btn btn-floating btn-primary btn-lg">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a type="button" className="btn btn-floating btn-primary btn-lg">
                    <i className="fab fa-google-plus-g"></i>
                  </a>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                <h3 className="text mb-4 pb-1">Search something</h3>
                <div className="form-outline form-white mb-4">
                  <input type="text" id="formControlLg" className="form-control form-control-lg" />
                  <label htmlFor="formControlLg">Search</label>
                </div>
                <ul className="fa-ul" style={{ marginLeft: '1.65em' }}>
                  <li className="mb-3">
                    <span className="fa-li">
                      <i className="fas fa-home"></i>
                    </span>
                    <span className="ms-2">New York, NY 10012, US</span>
                  </li>
                  <li className="mb-3">
                    <span className="fa-li">
                      <i className="fas fa-envelope"></i>
                    </span>
                    <span className="ms-2">info@example.com</span>
                  </li>
                  <li className="mb-3">
                    <span className="fa-li">
                      <i className="fas fa-phone"></i>
                    </span>
                    <span className="ms-2">+ 01 234 567 88</span>
                  </li>
                  <li className="mb-3">
                    <span className="fa-li">
                      <i className="fas fa-print"></i>
                    </span>
                    <span className="ms-2">+ 01 234 567 89</span>
                  </li>
                </ul>
              </div>
              <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                <h3 className="text mb-4">Opening hours</h3>
                <table className="table text-center text-white">
                  <tbody className="font-weight-normal">
                    <tr>
                      <td>Mon - Thu:</td>
                      <td>8am - 9pm</td>
                    </tr>
                    <tr>
                      <td>Fri - Sat:</td>
                      <td>8am - 1am</td>
                    </tr>
                    <tr>
                      <td>Sunday:</td>
                      <td>9am - 10pm</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
            © 2021 Copyright:
            <a className="text-white" href="https://hmp/">
              Thikana.com
            </a>
          </div>
        </footer>
      </div> */}
    </div>
  );
}

export default Footer;
