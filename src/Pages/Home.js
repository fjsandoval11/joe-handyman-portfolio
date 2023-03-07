import React from "react";
import "../Styles/Home.css";
import handyMan from '../Assets/handyMan.png'




const Home = () => {
  return (
    <div className="home">

      <div className="aboutContainer">

      <span className="title">
        <h1>Cruz HandyMan Services</h1>   
      </span>

        <span className="prompt">
          <p>Need something installed or repaired? Call Joe at: </p>

         <p className="phone"> 978-770-3287 </p>
         
        </span>
      </div>


 <div className="serviceBox">

{/* <div className="serviceTitle">

<h1>Services</h1>
</div> */}

<div className="services1">
<span>
<span>Painting </span>
<br/>
<span>Drywall and plaster repair </span>
<br/>
<span>Door and window repair </span>
<br/>
<span>Gutter repair </span>
<br/>
<span>Gutter cleaning </span>
<br/>
<span>Storm door installation</span>
<br/>
<span>Closet door installation</span>
</span>

</div>

<div className="imageContainer">

<img src={handyMan} />     
</div>

<div className="services2">

<span>
<span>Door locks and deadbolts</span>
<br/>
<span>Bathroom exhaust and fan installation</span>
<br/>
<span>Interior & exterior door installation</span>
<br/>
<span>Blinds & window treatment installation</span>
<br/>
<span>Closet shelving desgin & installation</span>
<br/>
<span>Wall shelving design and installation</span>
<br/>
<span>Storage solutions and shelving</span>
</span>

</div>

</div>

    </div>
    

    
  );
};

export default Home;
