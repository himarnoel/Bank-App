import React from 'react'
import  bg  from "../logo2.png";
import { useNavigate, Link } from 'react-router-dom';
import Signin from './signin';
import {useState,useEffect } from "react";
import Toaster from './../components/toast';
const signup = () => {
  const [Fname, setFname] = useState("");
  const [Lname, setLname] = useState("");
  const [email, setemail] = useState("");
  const [pass, setpass] = useState("");
  const [store, setStore] = useState([]);
 
  const [show, setShow] = useState(false);
  const navigate= useNavigate();

useEffect(() => {
if(localStorage.users){
  let setdata=JSON.parse(localStorage.users)
  setStore(setdata);
}else{
  setStore([]);
}
}, []);

  const signUp=async()=>{
    if(Fname!=""&&Lname!==""&&email!==""&&pass!==""){
      let obj={Fname, Lname, email, pass, acct:Math.floor(187000000+Math.random() * 1000000), accthis:[], acctbal:100 ,
        deposit:[], withdraw:[], transfer:[]};
     await setStore(()=>{
     let data= [...store, obj];
     localStorage.users=JSON.stringify(data);
      return data;
    });
    navigate("/Signin"); 
    }else{
      alert("fill up missing items")
    }
  }
 
  return (
    <div>
      <div className="mf">

      <div class="card text-end bg-danger sgn shadow-lg rounded-3" style={{width: "20rem", }}>
  <div class="card-body">
  <div class="row flex-column gy-3 justify-content-center mb-2">
    <div className="h-100">
    <img src={bg} alt="" className="mx-auto img-fluid"/>

    </div>

  <div className="text-center">
  <h1 className="fs-3 text-light ">ImarBank</h1>
  </div>
  <div className="text-start  ms-1 fs-4 mb-1 txt">
    Signup
  </div>
  <div class="col-12 col-md-12 mb-2">
    <input type="text" class="form-control" placeholder="First name" aria-label="First name" onChange={(e)=>setFname(e.target.value)}/>
  </div>
  <div class="col col-md-12 mb-2">
    <input type="text" class="form-control " placeholder="Last name" aria-label="Last name" onChange={(e)=>setLname(e.target.value)}/>
  </div>
  <div class="col col-md-12 mb-2">
    <input type="email" class="form-control" placeholder="Email" aria-label="Email" onChange={(e)=>setemail(e.target.value)}/>
  </div>
  <div class=" col-md-12 mb-2">
    <input type="password" class="form-control" placeholder="Password" aria-label="Password" onChange={(e)=>setpass(e.target.value)}/>
  </div>
  <div class="col col-md-12 mb-2">
    <input type="password" class="form-control" placeholder="Confrim-Password" aria-label="Password" onChange={(e)=>setpass(e.target.value)}/>
  </div>
  <div class="col-12 col-md-12 mb-2">
    <button className="btn btn-success col-12 btnd " onClick={()=>signUp()}>Sign up</button>
  </div>
 <div className="txt  d-flex justify-content-center">
 <div className="me-2">
 <h6 clasName="text-danger ">Already have an account?</h6>
 </div>
 <div className="">
 <h6 clasName="text-danger col-lg-3">< Link to="/Signin">Sign in</ Link></h6>
 </div>
 </div>
</div>
  </div>
</div>

      </div>
    </div>
  )
}

export default signup