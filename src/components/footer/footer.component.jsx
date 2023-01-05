import React from "react";
import "./footer.styles.scss";
import { MdLocationOn } from "react-icons/md";
import {
  AiFillInstagram,
  AiFillYoutube,
  AiOutlineTwitter,
} from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { IoMdSend } from "react-icons/io";
import { RiVisaLine, RiMastercardFill, RiPaypalFill } from "react-icons/ri";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-content-container">
        <div className="section">
          <p className="footer-title">Corporate Info</p>
          <p>(+58) 000 295 386</p>
          <p>
            <MdLocationOn className="footer-icon-location" /> Brasil - Brasília
          </p>
        </div>
        <div className="section section-terms">
          <p className="terms footer-title">Terms Of Use</p>
          <p>Advertise With Us</p>
          <p>Privacy Policy</p>
        </div>{" "}
        <div className="section">
          <p className="footer-title">Follow Us</p>
          <div className="section-icon">
            <div className="icon-container">
              <AiFillInstagram className="footer-icon" />
            </div>{" "}
            <div className="icon-container">
              <AiFillYoutube className="footer-icon" />
            </div>{" "}
            <div className="icon-container">
              <AiOutlineTwitter className="footer-icon" />
            </div>{" "}
            <div className="icon-container">
              <FaFacebookF className="footer-icon" />
            </div>
          </div>
        </div>
        <div className="section section-newsletter">
          <p className="footer-title">SIGN UP TO NEWSLATTER</p>
          <p className="newsletter ">
            subscribe to our newsletter to get the latest news about our
            products, events and sales
          </p>
          <div className="input-container">
            <input className="input" placeholder="ENTER YOUR EMAIL ADDRESS" />
            <button className="newsletter-button">
              <IoMdSend className="footer-newsletter-icon" />
            </button>
          </div>
        </div>{" "}
        <div className="footer-copyright-container">
          <div className="copyright-container">
            <p>&#169; A.S Clothing - all rights reserved</p>
          </div>
          <div className="footer-payment-container">
            <div className="icon-container-payment">
              <RiVisaLine className="footer-payment-icon" />
            </div>
            <div className="icon-container-payment">
              <RiMastercardFill className="footer-payment-icon" />
            </div>
            <div className="icon-container-payment">
              <RiPaypalFill className="footer-payment-icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
