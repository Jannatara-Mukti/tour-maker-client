import React from 'react';
import './Footer.css';
import img1 from '../../../images/footer/1.jpg';
import img2 from '../../../images/footer/2.jpg';
import img3 from '../../../images/footer/3.jpg';
import img4 from '../../../images/footer/4.jpg';
import img5 from '../../../images/footer/5.jpg';
import img6 from '../../../images/footer/6.jpg';


const Footer = () => {
    return (
        <div className="bg-success text-white px-4 pt-4 pb-2">
            <div className="row">
                <div className="col-md-4">
                    <div className="text-start mt-5">
                    <h6 style={{fontSize:"14px"}}>Contact Us</h6>
                    <p style={{fontSize:"12px", marginBottom:"15px"}}>Start a Tour Now</p>
                    <p className="" style={{fontSize:"11px", marginBottom:"5px"}}><i className="fas fa-map-marker-alt"></i>   House#7, Road#4, Dhanmondi, Dhaka-1205</p>
                    <p className="" style={{fontSize:"11px", marginBottom:"5px"}}><i className="fas fa-phone"></i>   <span>880 1624666000,</span>
                    <span>+880 1624888444,</span> 
                    <span>+880 1966177177</span></p>
                    <p className="" style={{fontSize:"11px", marginBottom:"5px"}}><i className="fas fa-envelope"></i>   learn.english@gmail.com</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="text-start my-5"> 
                        <h6 style={{fontSize:"14px"}}>NEWSLETTER</h6>
                        <p style={{fontSize:"12px", marginBottom:"10px"}}>Make a Tour with Tour_Maker. We promise to give you a memorable experience.</p>
                        <div className="d-flex justify-content">
                            <input className="form-control w-75 rounded-start" />
                            <span className="bg-white text-success px-1 pb-1 pt-2 rounded-end"><i class='fas fa-arrow-alt-circle-right'></i></span>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="instagram text-start text-sm-center">
                        <h6 style={{fontSize:"14px"}}>INSTAGRAM</h6>
                        <div>
                            <div className="row">
                                <div className="col-md-4 col-sm-2 m-0 p-0"><img className="w-100" src={img1} alt="" /></div>
                                <div className="col-md-4 col-sm-2 m-0 p-0"><img className="w-100" src={img2} alt="" /></div>
                                <div className="col-md-4 col-sm-2 m-0 p-0"><img className="w-100" src={img3} alt="" /></div>
                                <div className="col-md-4 col-sm-2 m-0 p-0"><img className="w-100" src={img4} alt="" /></div>
                                <div className="col-md-4 col-sm-2 m-0 p-0"><img className="w-100" src={img5} alt="" /></div>
                                <div className="col-md-4 col-sm-2 m-0 p-0"><img className="w-100" src={img6} alt="" /></div>
                            </div>
                        </div>
                    </div>
                </div>
         </div>
         <hr />
         <p className="" style={{fontSize:"14px", marginBottom:"5px"}}> &copy;Tour_Maker. All Rights Reserved</p>
         <div className="m-0 p-0">
             <span><i className="fab fa-facebook-square m-1 fs-5"></i></span>
             <span><i className="fab fa-twitter-square m-1 fs-5"></i></span>
             <span><i className="fab fa-instagram-square m-1 fs-5"></i></span>
         </div>
        </div>
    );
};

export default Footer;