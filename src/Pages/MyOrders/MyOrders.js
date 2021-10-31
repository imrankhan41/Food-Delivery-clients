import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import "./MyOrders.css"
const MyOrders = () => {
   const [user,setUser]=useState([])
   useEffect(()=>{
       fetch('http://localhost:5000/orders')
       .then(res=>res.json())
       .then(data=>setUser(data))
   },[])
   const handleDeleteUser =id=>{
       const url=`http://localhost:5000/orders/${id}`
       fetch(url,{
           method:"DELETE"
       })
       .then(res=>res.json())
       .then(data=>{
           if(data.deletedCount>0){
               alert("deleted successfully")
               const reamainingUser =user.filter(userr=>userr._id!==id)
               setUser(reamainingUser)}
           })
       }
       
   
    return (
        <div className="My-orders">
            <h1>My All Orders</h1>
            <table className="table mx-3 ">
                <thead className="bg-secondary">
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">User Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">productName</th>
                    <th scope="col">phone number</th>
                    <th scope="col">Address</th>
                    <th scope="col">Action</th>
                   
                    </tr>
                </thead>
                <tbody>
                    {user.map((user,index)=>(
                         <tr>
                         <th scope="row">{index +1}</th>
                         <td>{user.name}</td>
                         <td>{user.email}</td>
                         <td>{user.productName}</td>
                         <td>{user.phoneNumber}</td>
                         <td>{user.address}</td>
                         <td>
                             <Link className="m-1 btn btn-primary" to={`/orders/${user._id}`}>View</Link>
                             {/* <Link className="m-2 btn btn-outline-primary" to={`/edituser/${user._id}`}>Edit</Link> */}
                             <Link className="btn btn-danger" onClick={()=>handleDeleteUser(user._id)}>Delete</Link>
                             </td>
                         </tr>
                    ))}
                </tbody>
                </table>
        </div>
    );
};

export default MyOrders;