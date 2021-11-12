import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";
import './PlaceOrder.css';

const PlaceOrder = () => {
    const { serviceId } = useParams();
    const [ service, setService ] = useState({});
    const email = sessionStorage.getItem("email");

    useEffect(()=>{
        fetch(`http://localhost:5000/singleService/${serviceId}`)
        .then(res => res.json())
        .then( data=> setService(data))
    }, []);

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        data.email = email;
        data.status = "Pending";

        fetch('http://localhost:5000/placeOrder', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result => {
            if(result.insertedId){
                alert("You have successfully completed your order.");
                reset();
            }
        })
    };

    return (
        <div>
            <div className="hero-img p-5 w-100">
                <h2 className="py-5 text-success"> Place Your Order Here </h2>
            </div>
            <div className="m-5">
                <div className="row">
                    <div className="col-md-6">
                        <div className="text-start">
                            <div className="card" style={{width: "23rem"}}>
                                    <img className="card-img-top" src={service?.image} alt="" />
                                <div className="card-body">
                                    <h5 className="card-title text-success">{service?.name}</h5>
                                    <h6 className="fs-6">{service?.catagory}</h6>
                                    <p className="fw-normal" style={{fontSize:"13px", marginBottom: "0"}}>{service.description}</p>
                                    <h4 className="text-danger fs-6 mb-2 mt-1">Cost: {service?.price}$ /per person</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="my-auto">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            
                            <input {...register("userName", { required: true })} placeholder="Enter Your Name" className="m-1 w-100"/>
                            <br/>
                            <input {...register("address", { required: true })} placeholder="Give Your Address" className="m-1 w-100"/>
                            <br />
                            <input {...register("Contact", { required: true })} placeholder="Phone/Mobile No" className="m-1 w-100"/>
                            <br/>
                            <input {...register("name", { required: true })} defaultValue={service.name} className="m-1 w-100"/>                      
                            <br />
                            <input {...register("date", { required: true })} defaultValue={service.date} className="m-1 w-100"/>                      
                            <br />
                            <input {...register("description", { required: true })} defaultValue={service.description} className="m-1 w-100"/>                      
                            <br />
                            <input {...register("image", { required: true })} defaultValue={service.image} className="m-1 w-100" />
                            <br/>
                            <input {...register("price", { required: true })} defaultValue={service.price} className="m-1 w-100" />
                            <br/>
                            <input {...register("catagory", { required: true })} defaultValue={service.catagory} className="m-1 w-100" />
                            <br/>
                            
                            {errors.exampleRequired && <span>This field is required</span>}
                            
                            <input className="btn btn-success w-100 ms-1 mt-2" type="submit" value="Place Your Order" />
                        </form>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default PlaceOrder;