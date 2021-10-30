import React from 'react';
import { FaFacebook, FaInstagram, FaLocationArrow, FaMailBulk, FaMailchimp, FaTwitter, FaVoicemail, FaWhatsapp } from "react-icons/fa";
import { Link } from 'react-router-dom';
import "./Footer.css"
const Footer = () => {
    return (
        <div className="p-4 row bg-light text-Dark footer">
            <div className="text-start col-lg-4 col-md-6 col-sm-12 col-12">
                <img className="mb-5 img-logo" src="https://i.ibb.co/tYRCCMy/food-logo-59-E5-A73-AFD-seeklogo-com.png" alt="" /> <br />
                <Link className="footer-link"to="/home"></Link> 
               <h6> <FaLocationArrow /> Level-4, 34, Sejan Point, Narsingdi, Dhaka</h6>
               <h6> <FaMailBulk /> Official-Email:<Link className="footer-link"to="/home">imranbutex41@gmail.com</Link> </h6>
               <h6> <FaVoicemail/> Help-line:<Link className="footer-link"to="/home">+880-1627421333</Link> </h6>
            </div>
            <div className="mt-5 col-lg-4 col-md-6 col-sm-12 col-12 text-start">
            <h6> About us</h6>
            <h6> Success</h6>
            <h6> Refund policy</h6>
            <h6> Terms and Conditions</h6>
            <h6> Privacy Policy</h6>
            <Link className="p-1 text-black"to="/home"> <FaFacebook/></Link> 
            <Link className="p-1 text-black"to="/home"> <FaTwitter/></Link> 
            <Link className="p-1 text-black"to="/home"> <FaInstagram/></Link> 
            <Link className="p-1 text-black"to="/home"> <FaWhatsapp/></Link> 
        
            </div>
            <div className="mt-5 col-lg-4 col-md-6 col-sm-12 col-12">
                <h4 className="text-start">Paymnet :</h4>
                <img className="img-fluid" src="https://i.ibb.co/jVBp03x/paycover-2.png" alt="" srcset="" />
                
            </div>
            <hr className="mt-5"/>
            <div className="col-lg-12">
            <h5>Copyright © 2021 Food-delivery website </h5>
            </div>
           
        </div>
    );
};

export default Footer;