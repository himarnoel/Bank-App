import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import Toaster from './../components/toast';


const Withdral = () => {

  const [show, setShow] = useState(false);
  const [fail, setfail] = useState(false);
  const [bal, setbal] = useState(false);

  const [name, setname] = useState("")
  const [acc, setacc] = useState("")
  const [amt, setamt] = useState("");
  const [det, setdet] = useState("");


  let i=JSON.parse(localStorage.index);
  let fetchedData=JSON.parse(localStorage.users);
    useEffect(() => {
        setname(fetchedData[i].Fname+" "+fetchedData[i].Lname)
        setacc(fetchedData[i].acct)
    }, []);
  const withdraw=()=>{
    if(amt!="" && det!="" ){
   if(fetchedData[i].acctbal>=amt){
    let today = new Date();
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    let date = today.getFullYear()+'/'+(today.getMonth()+1)+'/'+today.getDate();
    fetchedData[i].acctbal=parseInt(fetchedData[i].acctbal)-parseInt(amt);

    let obj={name:fetchedData[i].Fname, amount:amt, time,date};

    let hisobj={amount:amt,type:"credit",date,details:det,bal:fetchedData[i].acctbal};
    fetchedData[i].withdraw=[...fetchedData[i].withdraw,obj];
    fetchedData[i].accthis=[...fetchedData[i].accthis,hisobj];
    localStorage.users=JSON.stringify(fetchedData);
    setdet("")
    setamt("")
    setShow(true);
   }else{
    setbal(true)
    
   }
    }else{
      setfail(true);
  
    }
  }
  return (
    <div> <div class="card text-white car mb-3 mx-auto my-auto ps-3 pe-3 pb-3" style={{width:"22rem"}}>
    <div class="card-header fs-1">Withdraw</div>
    <div class="card-body">
  
      <p class="card-text">
        <div className="row justify-content-center flex-column">
        <label htmlFor="">Name</label>
          <div className="col-12 mb-3"><input type="text" className="form-control" value={name} disabled/>
          </div>
          <label htmlFor="" >Account number</label>
          <div className="col-12 mb-3"><input type="text" className="form-control" value={acc} disabled/>
          </div>
          <label htmlFor="">Details</label>
          <div className="col-12 mb-3"><input type="text" className="form-control"  value={det} placeholder="For recharge card? or what?" onChange={(e)=>setdet(e.target.value)}/>
          </div>
          <label htmlFor="">Amount</label>
          <div className="col-12 mb-4"><input type="text" className="form-control" value={amt} placeholder="Amount" onChange={(e)=>setamt(e.target.value)}/>
          </div>
          <div className="col-12 col-lg-12  "><button className="btn btnd btn-success w-100" onClick={()=>withdraw()}>Withdraw</button></div>
        </div>
      </p>
    </div>
  </div>
  <Toaster show={fail} setShow={setfail} head="Empty fields" tail="Ensure you fill up the field" bg="danger" color="text-light  fs-5 mx-auto"/>
  <Toaster show={bal} setShow={setbal} head="Insufficient balance" tail="Enter amount within your balance" bg="warning" color="text-dark fs-5 mx-auto"/>
  <Toaster show={show} setShow={setShow} head="🥳Withdrawal was successful" tail="Take your cash" bg="success" color="text-lightfs-5 mx-auto"/>
  </div>
  )
}

export default Withdral