import React from 'react';
import { useForm } from "react-hook-form";

const AddServices = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        fetch('http://localhost:5000/addServices', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result => {
            if(result.insertedId){
                alert("Successfully added the user");
                reset();
            }
        })
        
    }

    return (
        <div>
            <h1 className="mb-3 text-center text-success">Please Add a Service</h1>
            <div className="w-75 m-auto border p-2">
                <div className="pe-3">
                    <div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                   
                        <input {...register("name")} placeholder="Name" className="p-2 m-2 w-100"/>                      
                        <br />
                        <input {...register("date")} type="date" className="p-2 m-2 w-100"/>                      
                        <br />
                        <input {...register("description")} placeholder="Description" className="p-2 m-2 w-100"/>                      
                        <br />
                        <input {...register("image", { required: true })} placeholder="Image Link" className="p-2 m-2 w-100" />
                        <br/>
                        <input {...register("price", { required: true })} placeholder="Price" className="p-2 m-2 w-100" />
                        <br/>
                        <select {...register("catagory")} className="p-2 m-2 w-100">
                            <option value="Premium">Premium</option>
                            <option value="Classic">Classic</option>
                            <option value="Business">Business</option>
                        </select>
                        <br />
                        {errors.exampleRequired && <span>This field is required</span>}
                        
                        <input className="btn btn-success w-50" type="submit" />
                    </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddServices;