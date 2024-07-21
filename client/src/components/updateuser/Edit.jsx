import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function Edit() {

  const navigate = useNavigate()

  const data = {
    fname:"",
    lname:"",
    email:""
  }

  const [user,setuser] = useState(data);
  const {id} = useParams();

  const inputchangehandler = (e) =>{
const {name,value} = e.target ;
setuser({...user,[name]:value})
// console.log(user);
  }

  useEffect(()=>{
    axios.get(`http://localhost:8000/api/getone/${id}`)
    .then((responces)=>{
      setuser(responces.data);
    }).catch((error)=>{
        console.log(error);
    },[id]) 
  })


  const submitForm = async(e) =>{
      e.preventDefault();
      await axios.put(`http://localhost:8000/api/update/${id}`,user)
      .then((response)=>{
        toast.success(response.data.msg,{position:'top-right'});
        navigate('/');     

      }).catch(error => console.log(error));
  };
 


  return (
    <>
       <div className="border border-black w-[300px] h-[400px] items-center mx-auto mt-20">
        <Link to="/" className="bg-yellow-600 px-5 py-1 " >Back</Link>
        <h3 className="text-center border text-white bg-slate-300 mt-2">update User</h3>
        <form className="py-7 space-y-6" onSubmit={submitForm} >
            <div>
            <label htmlFor="fname" >First name</label>
            <input className="border ml-5 border-black" value={user.fname} onChange={inputchangehandler} type="text" id="fname" name="fname" autoComplete="off" placeholder="First name" />
            </div>
            <div>
            <label htmlFor="lname" >Last name</label>
            <input className="border ml-5 border-black" value={user.lname} onChange={inputchangehandler} type="text" id="lname" name="lname" autoComplete="off" placeholder="last name" />
            </div>
            <div>
            <label htmlFor="email" >email</label>
            <input className="border ml-14 border-black" value={user.email} onChange={inputchangehandler} type="email" id="email" name="email" autoComplete="off" placeholder="email" />
            </div>
          
            <div className="flex items-center justify-center">
                <button className="bg-orange-100 px-5 py-1 text-center">update User</button>
            </div>
        </form>
       </div>



    </>
  )
}
