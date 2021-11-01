import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
const EditUser = () => {
    const {id}=useParams();
    console.log(id)
    const [user,setUser]=useState({})
    const {users,email}=useAuth();
   
    useEffect(() => {
        fetch(`https://bloodcurdling-nightmare-55136.herokuapp.com/orders/${id}`)
        .then(res=>res.json())
        .then(data =>setUser(data))
        
    }, [])
   const handleName=e=>{
       const updateName = e.target.value;
       const udpateUser ={name:updateName , email:user?.email, address:user?.address, city:user?.city, phoneNumber:user?.phoneNumber}
       setUser(udpateUser)
   }
   const handleEmail=e=>{
    const updateEmail = e.target.value;
    const udpateUser ={name:user?.name , email:updateEmail, address:user?.address, city:user?.city, phoneNumber:user?.phoneNumber}
    setUser(udpateUser)
   }
   const handleAddress=e=>{
    const updateAddress = e.target.value;
    const udpateUser ={name:user?.name , email:user?.email, address:updateAddress, city:user?.city, phoneNumber:user?.phoneNumber}
    setUser(udpateUser)
   }
   const handleCity=e=>{
    const updateCity = e.target.value;
    const udpateUser ={name:user?.name  , email:user?.email, address:user?.address, city:updateCity , phoneNumber:user?.phoneNumber}
    setUser(udpateUser)
   }
   const handlePhoneNumber=e=>{
    const updateNumber = e.target.value;
    const udpateUser ={name:user?.name  , email:user?.email, address:user?.address, city:user?.city, phoneNumber:updateNumber}
    setUser(udpateUser)
   }

 const handleSubmit =e=>{
     const url=`https://bloodcurdling-nightmare-55136.herokuapp.com/orders/${id}`
     fetch(url,{
        method:'PUT',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(user)
     })
     .then(res=>res.json())
     .then(data=>{
        if(data.modifiedCount>0){
            alert("updated successfully")
     }
      
        })
        e.preventDefault();
        
        
 }
    return (
        <div  className="col-lg-12 booking text-secondary add1-user">
        <form className="add-user" onSubmit={handleSubmit}>
          <input type="text" placeholder="Name" onChange={handleName} value={user?.name||''} />
          <input type="email"  onChange={handleEmail}  placeholder="Personal email" value={user?.email ||''}/>
          <textarea type="text" onChange={handleAddress} placeholder="Address" value={user?.address ||''}/>
          <textarea type="text"  onChange={handleCity} placeholder="City" value={user?.city ||''} />
          <input type="number" onChange={handlePhoneNumber} placeholder="Phone Number" value={user?.phoneNumber ||''}/>
          {/* <Link className="w-100" to={`/myorders/update/${users.displayName}`}> */}
            <input type="Submit"/>
              {/* </Link> */}
      </form>
</div>
    );
};

export default EditUser;
