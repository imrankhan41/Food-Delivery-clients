import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../hooks/useAuth';

const EditUser = () => {
    const [user,setUser]=useState({})
    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data =>{
        console.log(data)
    }
   const handleName=e=>{
       setUser({...user,[e.target.name]:e.target.value});
   }
   const handleEmail=e=>{
       
   }
   const handleAddress=e=>{
       
   }
   const handleCity=e=>{
       
   }
   const handlePhoneNumber=e=>{
       
   }
    const {users,email}=useAuth();
    return (
        <div  className="col-lg-12 booking text-secondary add1-user">
                  <form className="add-user" onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("name", { required: true, maxLength: 100 })} placeholder="Name" onChange={handleName} value={users?.displayName ||''} />
                    <input {...register("email")} onChange={handleEmail}  placeholder="Personal email" value={users?.email ||''}/>
                    <textarea {...register("address")} onChange={handleAddress} placeholder="Address" value={users?.address ||''}/>
                    <textarea {...register("city")} onChange={handleCity} placeholder="City" value={users?.city ||''} />
                    <input type="number" {...register("phoneNumber")} onChange={handlePhoneNumber} placeholder="Phone Number" value={users?.number ||''}/>
                    {/* <Link className="w-100" to={`/myorders/update/${users.displayName}`}> */}
                        <input type="Submit"/>
                        {/* </Link> */}
                </form>
        </div>
    );
};

export default EditUser;