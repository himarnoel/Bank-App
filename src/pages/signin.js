import React from 'react'
import  bg  from "../logo2.png";
const Signin = () => {
    const Signin=()=>{
        
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
  <div class="col-12 col-md-12 mb-2">
    <input type="text" class="form-control" placeholder="First name" aria-label="First name"/>
  </div>
  <div class="col col-md-12 mb-2">
    <input type="text" class="form-control " placeholder="Last name" aria-label="Last name"/>
  </div>
  <div class="col col-md-12 mb-2">
    <input type="email" class="form-control" placeholder="Email" aria-label="Email"/>
  </div>
  <div class=" col-md-12 mb-2">
    <input type="password" class="form-control" placeholder="Password" aria-label="Password"/>
  </div>
  <div class="col col-md-12 mb-2">
    <input type="password" class="form-control" placeholder="Confrim-Password" aria-label="Password"/>
  </div>
  <div class="col-12 col-md-12 mb-2">
    <button className="btn btn-success col-12 btnd " onClick={()=>signin()}>Sign up</button>
  </div>
 <div className="text-warning  d-flex justify-content-center">
 <div className="me-2">
 <h6 clasName="text-danger ">Already have an account?</h6>
 </div>
 <div className="">
 <h6 clasName="text-danger col-lg-3">Login</h6>
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