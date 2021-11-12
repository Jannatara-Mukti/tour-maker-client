import React, { useEffect, useState } from 'react';
import './MyOrders.css';

const MyOrders = () => {

    const email = sessionStorage.getItem("email");
    const [services, setServices] = useState([]);
    const [control, setControl] = useState(false);

    useEffect(()=>{
        fetch(`http://localhost:5000/myOrders/${email}`)
        .then( res=> res.json())
        .then(data => setServices(data))
    }, [control]);

    const handleDelete = (id) =>{

        const proceed = window.confirm("Are You sure, you want to delete?");

        if(proceed){
            fetch(`http://localhost:5000/deleteOrder/${id}`, {
            method: 'DELETE'
            })
            .then(res=>res.json())
            .then(result=>{
                if(result.deletedCount > 0){
                    alert("The order has been successfully deleted.");
                    setControl(!control);
                }
            })
            }

    };

    return (
        <div>
            <div className="order-bg p-5 w-100">
                <h2 className="py-5 text-light"> My Orders </h2>
            </div>
            <div className="my-5 p-2">
                <div className="row">
                    {
                        services.map( service => (
                            <div className="col-md-4" key={service?._id}>
                                 <div className="card" style={{width: "18rem"}}>
                                    <img className="card-img-top" src={service?.image} alt="" />
                                <div className="card-body">
                                    <h5 className="card-title text-success">{service?.name}</h5>
                                    <h6 className="fs-6">{service?.catagory}</h6>
                                    <p className="fw-normal" style={{fontSize:"13px", marginBottom: "0"}}>{service.description}</p>
                                    <h4 className="text-danger fs-6 mb-2 mt-1">Cost: {service?.price}$ /per person</h4>
                                    <p style={{fontSize: '12px'}}>Tour Start Date: {service?.date}</p>
                                    <h6>Order Status: {service?.status}</h6>
                                    <hr />
                                    <h6>Customer Name: {service?.userName}</h6>
                                    <p style={{fontSize: '13px'}}>Email: {service?.email}</p>
                                    <button onClick={()=>handleDelete(service?._id)} style={{fontSize:"11px"}} className="btn btn-danger">Delete Order</button>
                                </div>
                            </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default MyOrders;