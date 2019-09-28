import React from 'react'
import android from "../assets/android-vector-logo.png";
import googleDrive from "../assets/Google.svg";
import google from "../assets/google-logor.svg";
import walmart from "../assets/walmart-new-vector-logo.png";
import elab from "../assets/elab.svg";
import mastercard from "../assets/mastercard.png";
import paypal from "../assets/paypal-logo-preview.png";
// import happy from "../assets/iconshappy.png";
// import man from "../assets/man.svg"
// import happy2 from "../assets/happy2.png"
// import Facebook from "../assets/inkedin.png"

function SeventhSection() {
    return (
        <div className ="container-fluid iconsContainer">
        <div className = "row text-center icons">
          <div className="col-lg-3 col-sm-6">
            <img src= {android} alt="androidIcon" className="w-50"/>
          </div>
          <div className="col-lg-3 col-sm-6">
          <img src= {googleDrive} alt="googl_drive" className="w-50"/>
          </div>
          <div className="col-lg-3 col-sm-6">
            <img src= {google} alt="google" className="w-50 pt-5"/>
          </div>
          <div className="col-lg-3 col-sm-6">
          <img src= {walmart} alt="walmalt" className="w-50"/>
          </div>
  
          <div className="col-lg-3 col-sm-6">
            <img src= {elab} alt="elab" className="w-50"/>
          </div>
          <div className="col-lg-3 col-sm-6">
          <img src= {mastercard} alt="mastercard" className="w-50"/>
          </div>
          <div className="col-lg-3 col-sm-6">
          <img src= {paypal} alt="walmalt" className="w-50"/>
          </div>
          <div className="col-lg-3 col-sm-6">
          <img src= {walmart} alt="walmalt" className="w-50"/>
          </div>
          
  
        </div>
  
      </div>
    )
}

export default SeventhSection
