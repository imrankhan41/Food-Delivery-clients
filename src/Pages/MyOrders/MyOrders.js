import React from 'react';
import { useParams } from 'react-router';
import "./MyOrders.css"
const MyOrders = () => {
    const {name}=useParams();
    return (
        <div className="My-orders">
            <h1>My All Orders</h1>
        </div>
    );
};

export default MyOrders;