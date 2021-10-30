import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import "./AddUser.css"
const AddUser = () => {
    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data => {
        axios.post('http://localhost:5000/services', data)
        .then(res => {
            if (res.data.insertedId) {
                alert('added successfully');
                reset();
            }
        })
    };
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