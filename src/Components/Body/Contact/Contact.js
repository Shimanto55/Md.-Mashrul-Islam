import React from "react";
import "./Contact.css";
import SocialContact from "../../common/social-contact/index";
import Separator from "../../common/separator/index";
function Contact() {
  return (
    <div className="contact">
      <Separator />
      <label className="section-title">Contact</label>
      <div className="contact-container">
        <div className="contact-left">
          <p>Want to get in touch? Contact me on any of the platform or call me at</p>
          <h3>+8801874840033</h3>
          <SocialContact />
        </div>
        <div className="download">
          <a download href={require("../../../assets/resume.pdf").default}>
            <i class="fi-rr-cloud-download download-icon" />
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
