import React from "react";
// import "bootstrap/dist/css/bootstrap.css";
import "./about.css";
import Footer from "../footer/footer";


const Aboutus = () => {
    return(
        <>
      <div>
        <div className="about-section">
        <br></br>
          <h1>About Kydoos</h1>
          <p>Kydoos Preschool is one of the best model preschool in Vadodara. They provide best education for children from the ages of to until six.</p>
        </div>
        

    
      <div>
        <section className="section2" id="AboutUs">
          <table>
            <tbody><tr>
                <td>
                  <img src="https://images.unsplash.com/photo-1499083097717-a156f85f0516?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80" alt="AboutUs" />
                </td>
                <td>
                  <span className="title">Mission</span>
                  <span className="sub-title">Lorem ipsum dolor sit amet, consectetur adi</span>
                  <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</h5>
                  {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> */}
                  <br></br>
                  <a href="#OurMission" className="btn1">Vision</a> 
                </td>
              </tr>
            </tbody></table>
        </section>
        <section className="section3" id="OurMission">
          <table>
            <tbody><tr>
                <td>
                  <span className="title">Vision</span>
                  <span className="sub-title">Lorem ipsum dolor sit amet, consectetur adi</span>
                  <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</h5>
                  {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> */}
                  
                </td>
                <td>
                  <img src="https://images.unsplash.com/photo-1499083097717-a156f85f0516?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80" alt="AboutUs" />
                </td>
              </tr>
            </tbody></table>
        </section>
      </div>
  


        <div className="row">
          <div className="column">
          <h2>PRINCIPAL'S WELCOME</h2>
              <img src="https://www.lcps.org/cms/lib/VA01000195/Centricity/Domain/18566/bitmoji.png" alt="Jane" style={{width: '50%',height:'192.5px'}} />
              <div className="container"> 
                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                <h5>- A.B.C</h5>
                <p></p>
                <a href="https://mail.google.com/" button className="btn1">abc@gmail.com</a>
               </div> 
            </div>
          <div className="column">
          <h2>CO-FOUNDER MESSAGE</h2>
              <img src="https://i.pinimg.com/474x/6d/0e/05/6d0e052a59840858186a37ba74de24b3.jpg" alt="Mike" style={{width: '50%', height:'192.5px'}} />
              <div className="container">
                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                <h5>- A.B.C</h5>
                <p></p>
                <a href="https://mail.google.com/" button className="btn1">abc@gmail.com</a>
              </div>
          </div>

        </div> 
<p></p>
{/* 
About Faculty */}
        
      {/* </div> */}
</div>
       <Footer/>
        </>
    )
}

export default Aboutus;