import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const AllServices = () => {

    const [services, setServices] = useState();

    useEffect( ()=>{
        fetch('https://damp-basin-52283.herokuapp.com/allServices')
        .then(res => res.json()
        .then(result => setServices(result)))
    }, [])

    return (
        <div id="services" className="px-2 py-5">
            <h2 className="text-success pb-3">Tour Plans</h2>
            <div className="row">
                {
                    services?.map( service => (
                        <div className="col-md-4 my-2">
                            <div className="card" >
                                    <img className="card-img-top" src={service?.image} alt="" />
                                <div className="card-body">
                                    <h5 className="card-title text-success">{service?.name}</h5>
                                    <h6 className="fs-6">{service?.catagory}</h6>
                                    <p className="fw-normal" style={{fontSize:"13px", marginBottom: "0"}}>{service.description}</p>
                                    <h4 className="text-danger fs-6 mb-2 mt-1">Cost: {service?.price}$ /per person</h4>
                                    <Link to={`/placeOrder/${service._id}`}>
                                    <button className="btn btn-success fw-bolder" style={{fontSize:"11px"}}>Add To Cart</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default AllServices;