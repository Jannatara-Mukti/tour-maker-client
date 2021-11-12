import React, { useEffect, useState } from 'react';

const ManageOrders = () => {

    const [orders, setOrders] = useState([]);
    const [status, setStatus] = useState("Approved");
    const [control, setControl] = useState(false);

    useEffect(()=>{
        fetch('https://damp-basin-52283.herokuapp.com/allOrders')
        .then(res => res.json())
        .then(result => setOrders(result))
    }, [control]);

    const handleUpdate = (id) =>{

    //     setStatus("Approved");
    //    console.log(status);
        const status = "Approved";

        fetch(`https://damp-basin-52283.herokuapp.com/updateStatus/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({status})
        })
        .then(res => res.json())
        .then(data=> {
            if(data.modifiedCount > 0){
                alert("Status updated successfully");
                setControl(!control);
            }
        })
    };

    const handleDelete = (id) =>{

        const proceed = window.confirm("Are You sure, you want to delete?");

        if(proceed){
            fetch(`https://damp-basin-52283.herokuapp.com/deleteOrder/${id}`, {
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
            <h3 className="py-2 text-success">Manage All Orders</h3>
            <div className="mt-3">
                <div className="row">
                    {
                        orders.map( order => (
                            <div className="col-md-4" key={order?._id}>
                               <div className="mb-2">
                               <div className="card">
                                    <img className="card-img-top" src={order?.image} alt="" />
                                <div className="card-body">
                                    <h5 className="card-title text-success" style={{fontSize:"14px"}}>{order?.name}</h5>
                                    <h6 className="fw-bold" style={{fontSize:"13px"}}>{order?.catagory}</h6>
                                    <h4 className="text-danger mt-1" style={{fontSize:"13px"}}>Cost: {order?.price}$ /per person</h4>
                                    <h6 style={{margin: "0"}}>Order Status: {order?.status}</h6>
                                    <hr className="py-0 my-1"/>
                                    <h6 style={{fontSize:"13px"}}>Customer Name: {order?.userName}</h6>
                                    <p style={{fontSize: '13px'}}>Email: {order?.email}</p>
                                    <button onClick={()=>handleDelete(order?._id)} style={{fontSize:"11px"}} className="btn btn-danger me-1">Delete</button>
                                    <button onClick={()=>handleUpdate(order?._id)} style={{fontSize:"11px"}} className="btn btn-warning">Update</button>
                                </div>
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

export default ManageOrders;