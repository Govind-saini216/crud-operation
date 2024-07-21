/* eslint-disable no-unreachable */
import { Link } from "react-router-dom";
import { MdAutoDelete,MdEditSquare } from "react-icons/md";
import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

export default function User() {

    const[user ,setuser] = useState([]);

useEffect(()=>{
    const updatedval = async()=>{
       const resp = await axios.get('http://localhost:8000/api/getall');
       setuser(resp.data);
    }
updatedval()
},[])

const deletesuser = async(userid) =>{
 await axios.delete(`http://localhost:8000/api/delete/${userid}`)
 .then((response)=>{
           setuser((prevuser)=>prevuser.filter((user)=> userid !== user._id));
           toast.success(response.data.msg,{position:"top-right"});
 }).catch(error => console.log(error));
}


  return (
    <>
    <div className="bg-slate-100 px-80 my-32 w-full">

 <Link to="/add" className="bg-green-600 px-4 py-1 " >Add User</Link>

 <table className="border mt-5 border-black" border={1} cellPadding={10} cellSpacing={0}>
    <thead className="border border-black" >
        <tr className="bg-blue-600 text-white font-semibold" >
            <th className="border border-black" >Sr. no.</th>
            <th className="border border-black" >User Name</th>
            <th className="border border-black" >User Email</th>
            <th className="border border-black" >Actions</th>
        </tr>
    </thead>
    <tbody >

        {
            // eslint-disable-next-line no-unused-vars
            user.map((data,index)=>{
              return ( 
              // eslint-disable-next-line react/jsx-key
              <tr key={data._id}>
                   <td className="border border-black" >{index+1}</td>
                   <td className="border border-black" >{data.fname} {data.lname}</td>
                   <td className="border border-black" >{data.email}</td>
                   <td className="border border-black flex">
                       <button className="bg-red-600 px-4 py-1 text-white" onClick={()=>deletesuser(data._id)} ><MdAutoDelete/></button>
                   <Link to={`/edit/`+data._id} className="ml-5 px-4 py-[5px] bg-green-600 text-white"><MdEditSquare/></Link>
                </td>   
        </tr> 
        )
     })
        }
    </tbody>
 </table>


    </div>
    
    
    </>
  )
}
