import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";
import useAuth from '../../../hooks/useAuth';
import "./PlaceOrder.css"
const PlaceOrder = () => {
    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data =>{
        fetch('https://bloodcurdling-nightmare-55136.herokuapp.com/orders',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.insertedId){
                alert("Inserted successfully")
            }
            console.log(data)
        })
        
    };
    const {users,email}=useAuth();
    const [details,setDetails]=useState({});
    const { serviceId } = useParams();
    useEffect(()=>{
                fetch(`https://bloodcurdling-nightmare-55136.herokuapp.com/services/${ serviceId}`)
                .then(res=>res.json())
                .then(data =>setDetails(data))
            },[])
    return (
        <div>
        {/* <h1>{serviceId}</h1>
        <p>{details.name}</p> */}
             <div className="row ">
                <div className="col-lg-6">
                  <div className="container details">
                    <div className="mt-5 row">
                        <div className="col-lg-8 col-md-8 col-sm-12 col-12">
                          <h2>{details?.name}</h2>
                            <img className="img-fluid" src={details?.img} alt="" />
                          </div>
                          <div className="mt-5 text-start">
                            <h4>Price:${details?.price}</h4> <br />
                             {details?.description}
                          </div>
                        </div>
                    </div>
                  </div>
                <div className="col-lg-6 booking text-secondary add1-user">
                 <h4>Ordered By:{users?.displayName}</h4>
                 <h4>Email:{users?.email}</h4>
                 {/* <img src={users?.photoURL} alt="" srcset="" /> */}
                  <form className="add-user" onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("name", { required: true, maxLength: 100 })} placeholder="Name" value={users?.displayName} />
                    <input {...register("email")}  placeholder="Personal email" value={users?.email}/>
                    <input {...register("img")}  placeholder="Your Photo" value={users?.photoURL}/>
                    <textarea {...register("address")} placeholder="Address"/>
                    <textarea {...register("city")} placeholder="City" />
                    <input type="number" {...register("phoneNumber")} placeholder="Phone Number"/>
                    <input {...register("productName", { required: true, maxLength: 200 })} placeholder="Name" value={details?.name} />
                    <input {...register("productImg")}  placeholder="Product Photo" value={details?.img}/>
                    <input type="number" {...register("productPrice")} placeholder="Price" value={details?.price}/>
                    <textarea {...register("productDescription")} placeholder="Description" value={details?.description}/>
                    {/* <Link className="w-100" to={`/myorders/update/${users.displayName}`}> */}
                        <input type="Submit"/>
                        {/* </Link> */}
                </form>
               </div>
            </div> 
                
        </div>
    );
};

export default PlaceOrder;
