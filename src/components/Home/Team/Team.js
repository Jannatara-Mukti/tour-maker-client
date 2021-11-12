import React from 'react';
import img1 from '../../../images/team/team1.jpg';
import img2 from '../../../images/team/team2.jpg';
import img3 from '../../../images/team/team3.jpg';
import img4 from '../../../images/team/team4.jpg';

const Team = () => {
    return (
        <div className="py-5">
            <h2 className="text-success my-2">Meet Our Team Members</h2>
           
            <div className="p-4">
                <div className="row">
                    <div className="col-md-3">
                        <div className="card" style={{width:"13rem"}}>
                            <img src={img1} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title text-success">James Michael</h5>
                                <p style={{fontSize:"12px"}} className="card-text">James Michaelis an excellent tour guide. He has been working for 3 years at Tour_Maker. He has experience of being a guide for almost 250 tours.</p>
                                <a className="text-success"><i className="fab fa-facebook-square m-1 fs-4"></i></a>
                                <a className="text-success"><i className="fab fa-twitter-square m-1 fs-4"></i></a>
                                <a className="text-success"><i className="fab fa-instagram-square m-1 fs-4"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card" style={{width:"13rem"}}>
                            <img src={img2} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title text-success">William David</h5>
                                <p style={{fontSize:"12px"}} className="card-text">William David is an excellent tour guide. He has been working for 4 years at Tour_Maker. He has experience of being a guide for almost 300 tours.</p>
                                <a className="text-success"><i className="fab fa-facebook-square m-1 fs-4"></i></a>
                                <a className="text-success"><i className="fab fa-twitter-square m-1 fs-4"></i></a>
                                <a className="text-success"><i className="fab fa-instagram-square m-1 fs-4"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card" style={{width:"13rem"}}>
                            <img src={img3} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title text-success">Linda Elizabeth</h5>
                                <p style={{fontSize:"12px"}} className="card-text">Linda Elizabeth is an excellent tour guide. She has been working for 2.5 years at Tour_Maker. She has experience of being a guide for 200 tours.</p>
                                <a className="text-success"><i className="fab fa-facebook-square m-1 fs-4"></i></a>
                                <a className="text-success"><i className="fab fa-twitter-square m-1 fs-4"></i></a>
                                <a className="text-success"><i className="fab fa-instagram-square m-1 fs-4"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                    <div className="card" style={{width:"13rem"}}>
                            <img src={img4} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title text-success">John Daniel</h5>
                                <p style={{fontSize:"12px"}} className="card-text">John Daniel is an excellent tour guide. He has been working for 5 years at Tour_Maker. He has experience of being a guide for almost 450 tours.</p>
                                <a className="text-success"><i className="fab fa-facebook-square m-1 fs-4"></i></a>
                                <a className="text-success"><i className="fab fa-twitter-square m-1 fs-4"></i></a>
                                <a className="text-success"><i className="fab fa-instagram-square m-1 fs-4"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;