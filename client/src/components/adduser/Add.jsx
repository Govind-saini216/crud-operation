import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import toast from "react-hot-toast";

export default function Add() {

    const data ={
        fname:"",
        lname:"",
        password:"",
        email:""
    }

    const [user , setUser] = useState(data);

    const navigate = useNavigate();

    const inputhandler = (e) =>{
        const {name,value} = e.target;
        setUser(
            {
            ...user,
            [name]:value}
            )}
            // console.log(user);


    const submithandle = async (e) =>{
         e.preventDefault();
         await axios.post('http://localhost:8000/api/create',user)
         .then((response)=>{
              console.log(response);
              toast.success(response.data.msg,{position:"top-right"})
              navigate("/")
         }).catch(error => console.log(error));

   
    }

  return (
    <>
       <div className="border border-black w-[300px] h-[400px] items-center mx-auto mt-20">
        <Link to="/" className="bg-yellow-600 px-5 py-1 " >Back</Link>
        <h3 className="text-center border text-white bg-slate-300 mt-2">Add New User</h3>
        <form className="py-7 space-y-6" onSubmit={submithandle}>
            <div>
            <label htmlFor="Fname" >First name</label>
            <input onChange={inputhandler} className="border ml-5 border-black" type="text" id="fname" name="fname" autoComplete="off" placeholder="First name" />
            </div>
            <div>
            <label htmlFor="lname" >Last name</label>
            <input onChange={inputhandler} className="border ml-5 border-black" type="text" id="lname" name="lname" autoComplete="off" placeholder="last name" />
            </div>
            <div>
            <label htmlFor="email" >email</label>
            <input onChange={inputhandler} className="border ml-14 border-black" type="email" id="email" name="email" autoComplete="off" placeholder="email" />
            </div>
            <div>
            <label htmlFor="password" >password</label>
            <input onChange={inputhandler} className="border ml-5 border-black" type="password" id="password" name="password" autoComplete="off" placeholder="password" />
            </div>
            <div className="flex items-center justify-center">
                <button className="bg-orange-100 px-5 py-1 text-center">Add User</button>
            </div>
        </form>
       </div>



    </>
  )
}
