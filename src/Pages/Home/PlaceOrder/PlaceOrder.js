import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import axios from 'axios';
import { useForm } from "react-hook-form";
import "./PlaceOrder.css"
const PlaceOrder = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    const {users,email}=useAuth();
    const {orderName}=useParams();
    const [details,setDetails]=useState([]);
    const [singleOrder,setSingleOrder]=useState({});
    useEffect(()=>{
        fetch("/services.json")
        .then(res=>res.json())
        .then(data =>setDetails(data))
    },[])
    useEffect(()=>{
        const foundDetails =details.find(orderDetails=>orderDetails.name==orderName)
        console.log(foundDetails);
        setSingleOrder(foundDetails)
    },[details])
    return (
        <>
        <div className="row ">
            <div className="col-lg-6">
            <div className="container details">
            <div className="mt-5 row">
                <div className="col-lg-8 col-md-8 col-sm-12 col-12">
                <h2>{singleOrder?.name}</h2>
                <img className="img-fluid" src={singleOrder?.img} alt="" />
                </div>
                <div className="mt-5 text-start">
                    <h4>Price:${singleOrder?.price}</h4> <br />
                    {singleOrder?.description}
                </div>
            </div>
        </div>
            </div>
            <div className="col-lg-6 booking text-secondary add1-user">
                <h4>Ordered By:{users?.displayName}</h4>
                <h4>Email:{users?.email}</h4>
                <form className="add-user" onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 100 })} placeholder="Name" />
                <input {...register("img")}  placeholder="Personal Photo"/>
                <textarea {...register("text")} placeholder="Address"/>
                <textarea {...register("description")} placeholder="Description" />
                <input type="number" {...register("price")} placeholder="Phone Number"/>
                <input type="submit" />
                </form>
            </div>
        </div>
        
        </>
    );
};

export default PlaceOrder;