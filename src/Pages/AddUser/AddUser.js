import React from 'react';
import { useForm } from "react-hook-form";
import "./AddUser.css"
const AddUser = () => {
    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data =>{
          fetch('https://bloodcurdling-nightmare-55136.herokuapp.com/services',{
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
    }
    return (
        <div className="add-user">
            <h1>Please Add User</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("name", { required: true, maxLength: 100 })} placeholder="Name" />
            <input {...register("img")}  placeholder="image url"/>
            <textarea {...register("text")} placeholder="text"/>
            <textarea {...register("description")} placeholder="Description" />
            <input type="number" {...register("price")} placeholder="price"/>
            <input type="submit" />
            </form>
        </div>
    );
};

export default AddUser;
