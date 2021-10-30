import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Footer from '../../Footer/Footer';
import "./PlaceOrder.css"
const PlaceOrder = () => {
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
        <div className="container p-5 mt-5 mb-5 details">
            <div className="mt-5 row">
                <div className="col-lg-8 col-md-8 col-sm-12 col-12">
                <h1>{singleOrder?.name}</h1>
                <img className="img-fluid" src={singleOrder?.img} alt="" />
                </div>
                <div className="mt-5 text-start">
                    <h4>Price:${singleOrder?.price}</h4> <br />
                    {singleOrder?.description}
                </div>
            </div>
        </div>
        <Footer></Footer>
        </>
    );
};

export default PlaceOrder;