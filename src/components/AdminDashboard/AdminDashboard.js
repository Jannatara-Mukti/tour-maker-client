import React, { useState } from 'react';
import './AdminDashboard.css';
import AddServices from '../AddServices/AddServices';
import ManageOrders from '../ManageOrders/ManageOrders';

const AdminDashboard = () => {

    const [control, setControl] = useState("addServices");

    return (
        <div>
            <div className="my-5">
                <h4>Welcome to Admin Dashboard</h4>
            </div>
            <div className="m-2">
                <div className="row">
                    <div className="col-md-4">
                        <div className="admin-menu bg-dark text-light py-5 " style={{width:"12rem"}}>
                            <li onClick={()=>setControl("addServices")} className="my-3">Add Services</li>
                            <li onClick={()=>setControl("manageOrders")} className="my-3">Manage All Orders</li>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div>
                            { control === "addServices" && <AddServices></AddServices> }
                            { control === "manageOrders" && <ManageOrders></ManageOrders> }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;