import React from 'react';
import img from '../../../images/about-one-img-1.png';

const Choose = () => {
    return (
        <div className="p-4 bg-success text-light">
            <h2>Why Choose Us</h2>
            <div className="text-start">
            <div className="row">
                <div className="col-md-6">
                    <div className="mt-5 pt-5">
                    <h6 className="mt-5">Let's Discover The World Together!</h6>
                    <p className="py-3 fw-light" >We are connected to over 500 airlines. Over the years, we have organized about 5000 tours at different times and in different locations.
                    We give the best price guarantee to our clients.The principals  Tour_Maker follows: </p>
                    <div className="fw-bold" style={{fontSize:"13px"}}>
                        <span><i class="fas fa-long-arrow-alt-right"></i> Diverse Destinations</span>
                        <br />
                        <span><i class="fas fa-long-arrow-alt-right"></i> Value for Money</span>
                        <br />
                        <span><i class="fas fa-long-arrow-alt-right"></i> Beautiful Places</span>
                        <br />
                        <span><i class="fas fa-long-arrow-alt-right"></i> Passionate Travel</span>
                    </div>
                    
                    </div>
                </div>
                <div className="col-md-6">
                    <img src={img} alt="" />
                </div>
            </div>
            </div>
        </div>
    );
};

export default Choose;