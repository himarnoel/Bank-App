import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import Toaster from './../components/toast';

const Fund = () => {
//Toat
const [show, setShow] = useState(false);
const [fail, setfail] = useState(false);
const [value, setvalue] = useState("")


const [name, setname] = useState("")
const [acc, setacc] = useState("acc")
let i=JSON.parse(localStorage.index);
let fetchedData=JSON.parse(localStorage.users);
const [depo, setdepo] = useState('');
const [det, setdet] = useState('');


  useEffect(() => {
      setname(fetchedData[i].Fname+" "+fetchedData[i].Lname)
      setacc(fetchedData[i].acct)
  }, []);



const depositi=()=>{
  
if(depo!==''&&det!==""){
  let today = new Date();
  fetchedData[i].acctbal=parseInt(fetchedData[i].acctbal)+parseInt(depo);
let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
let date = today.getFullYear()+'/'+(today.getMonth()+1)+'/'+today.getDate();
let obj={name:fetchedData[i].Fname, amount:depo, time,date};
fetchedData[i].deposit=[...fetchedData[i].deposit,obj]
let hisobj={amount:depo,type:"debit",date,details:det,bal:fetchedData[i].acctbal};
fetchedData[i].accthis=[...fetchedData[i].accthis,hisobj];
localStorage.users=JSON.stringify(fetchedData);
setdepo('');
setdet('');
setShow(true);
}else{

// alert("Fill ups space")
setfail(true);
}
}


  return (
    <div>
      <div class="card text-white car mb-3 mx-auto my-auto ps-3 pe-3 pb-3" style={{width:"22rem"}}>
  <div class="card-header fs-1">Deposit</div>
  <div class="card-body">
    <p class="card-text">
      <div className="row justify-content-center flex-column">
        <div className="col-12 mb-4"><label htmlFor="">Name</label><input type="text" className="form-control" value={name} disabled/></div>
        <div className="col-12 mb-4"><label htmlFor="">Account number</label><input type="text" className="form-control" value={acc} disabled/></div>
        <div className="col-12 mb-4"><label htmlFor="">Details</label><input type="text" className="form-control" placeholder="details" value={det} onChange={(e)=>setdet(e.target.value)}/></div>
        <div className="col-12 mb-4"><label htmlFor="">amount</label><input type="text" className="form-control" placeholder="Amount to be Deposited" value={depo} onChange={(e)=>setdepo(e.target.value)}/></div>
        <div className="col-12 col-lg-12  "><button className="btn btnd btn-success w-100" onClick={()=>depositi()}>Deposit</button></div>
      </div>
    </p>
  </div>
</div>
<Toaster show={fail} setShow={setfail} head="Empty fields" tail="Ensure you fill up the field" bg="danger" color="text-dark fs-5 mx-auto"/>
<Toaster show={show} setShow={setShow} head="🥳Deposit was successful🥳" tail="Check account money has been added" bg="success" color="text-dark fs-5 mx-auto"/>
    </div>
  )
}

export default Fund