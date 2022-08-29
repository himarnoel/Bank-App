import React from 'react'
import  bg  from "../logo2.png";
import { useNavigate,Link } from 'react-router-dom';
import {useState} from "react"
const Signin = () => {
    const [email, setemail] = useState("");
    const [pass, setpass] = useState("");
    const navigate= useNavigate();
    const signin=()=>{

      if(email!==""&& pass!==""){
        let fetchedData=JSON.parse(localStorage.users);
        console.log( fetchedData);
      for (let index = 0; index < fetchedData.length; index++) {
        console.log(fetchedData[index]);
        if(fetchedData[index].email===email&&fetchedData[index].pass==pass){

       alert("good");
       localStorage.index=JSON.stringify(index);
       navigate("/home")
       break;
     }else{ 
       alert("Incorrect username or password")
       break;
     }
      }
      }else{
        alert("Fill up Empty Space")
      }
    }
  return (
    <div>
        <div>
      <div className="mf">
      <div class="card text-end bg-danger sgn shadow-lg rounded-3" style={{width: "20rem", }}>
  <div class="card-body">
  <div class="row flex-column gy-3 justify-content-center mb-2">
    <div className="h-100">
    <img src={bg} alt="" className="mx-auto img-fluid"/>
    </div>
  <div className="text-center">
  <h1 className="fs-3 text-light mb-2">ImarBank</h1>
  </div>
  <div className="text-start ms-1  fs-4 mb-1 txt">
    Signin
  </div>
  <div class="col col-md-12 mb-2">
    <input type="email" class="form-control" placeholder="Email" aria-label="Email" onChange={(e)=>setemail(e.target.value)}/>
  </div>
  <div class=" col-md-12 mb-2">
    <input type="password" class="form-control" placeholder="Password" aria-label="Password" onChange={(e)=>setpass(e.target.value)}/>
  </div>
  
  <div class="col-12 col-md-12 mb-2">
    <button className="btn btn-success col-12 btnd " onClick={()=>signin()}>Signin</button>
  </div>
 <div className="txt  d-flex justify-content-center">
 <div className="me-2">
 <h6 clasName="text-danger">Don't have an account?</h6>
 </div>
 <div className="">
 <h6 clasName="text-danger col-lg-3"><Link to="/">Signup</Link></h6>
 </div>
 </div>
</div>
  </div>
</div>

      </div>
    </div>
    </div>
  )
}

export default Signin