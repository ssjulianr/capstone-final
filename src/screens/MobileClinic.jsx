import React from "react";
import Header from "../components/Header";
import "../styles/Health.css";

function MobileClinic() {
  return (
    <>
    <Header/>
    <div className="mobileclinic">
      <div className="mobile-clinic-container">
        <h1 className="mobile-header">Find a Mobile Clinic</h1>
        <p>Enter your address to find the closest mobile clinic to you.</p>
        <div className="embed-container">
          <iframe
            title="Capstone Philanthropy Map"
            src="//www.arcgis.com/apps/Embed/index.html?webmap=17fb17501cfe46fa8359e7e9d6184422&extent=-138.6174,15.1492,-51.8254,55.673&home=true&zoom=true&previewImage=false&scale=true&search=true&searchextent=true&details=true&legend=true&active_panel=details&basemap_gallery=true&disable_scroll=true&theme=dark"
            className="map-iframe"
          ></iframe>
        </div>
      </div>
    </div>
    </>
    
  );
}

export default MobileClinic;
