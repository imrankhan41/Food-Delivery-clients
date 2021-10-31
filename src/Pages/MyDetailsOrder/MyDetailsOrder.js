import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import "./MyDetailsOrder.css"
const MyDetailsOrder = () => {
    const [user,setUser]=useState({});
    const {orderid}=useParams();
    useEffect(()=>{
        fetch(`http://localhost:5000/orders/${orderid}`)
        .then(res=>res.json())
        .then(data=>setUser(data))
    },[])
    return (
        <div className="row">
            <div className="col-lg-12">
                  <div className="container details">
                    <div className="mt-5 row">
                        <div className="col-lg-8 col-md-8 col-sm-12 col-12">
                          <h2>{user?.productName}</h2>
                            <img className="img-fluid" src={user?.productImg} alt="" />
                          </div>
                          <div className="mt-5 text-start">
                            <h4>Price:${user?.productPrice}</h4> <br />
                             {user?.productDescription}
                          </div>
                        </div>
                    </div>
                  </div>
        </div>
    );
};

export default MyDetailsOrder;