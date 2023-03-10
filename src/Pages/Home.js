import React from "react";
import { serviceList2, serviceList1 } from "../Helpers/ServiceList";
import "../Styles/Home.css";
import handyMan from "../Assets/handyMan.png";

const Home = () => {
  return (
    <div className="home">
      <div className="aboutContainer">
        <span className="title">
          <h1>Cruz HandyMan Services</h1>
        </span>

        <span className="prompt">
          <p>Need something installed or repaired? Call Joe at: </p>

          <a className="phone" href="tel: 574-333-9616"> 978-770-3287 </a>

          <p>Or send us an email at: </p>

          <a className="email" onClick={()=> window.location.href = "mailto:cruzhandymanservices70@gmail.com?subject=Service"}>cruzhandymanservices70@gmail.com</a>
        </span>
      </div>

      <div className="serviceBox">
        <div className="services1">
          <span>
            {serviceList1.map((service) => (
              <ul>{service}</ul>
            ))}
          </span>
        </div>

        <div className="imageContainer">
          <img src={handyMan} />
        </div>

        <div className="services2">
          <span>
            {serviceList2.map((service) => (
              <ul>{service}</ul>
            ))}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Home;
