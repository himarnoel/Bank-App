import React from 'react'
import { useState } from 'react';

const Transactions =()=> {
      
  let i=JSON.parse(localStorage.index);
  let fetchedData=JSON.parse(localStorage.users);
  let bg="btn text-light rounded-5 bg-danger"
  let bgs="btn text-light rounded-5 bg-success"


  const [tab, settab] = useState("table-responsive w-100 h-75");
  const [dep, setdep] = useState("table-responsive w-100 h-75 d-none");
  const [change, setchange] = useState(fetchedData[i].deposit);
  const [name, setname] = useState("");

  const depo=(val,nm)=>{
  setchange(val)
  setdep("table-responsive w-100 h-75 ")
  settab("table-responsive w-100 h-75 d-none")
  setname(nm);
  }
let inde=0;
  const his=()=>{
   settab("table-responsive w-100 h-75");
   setdep("table-responsive w-100 h-75 d-none");
  }
  
  return (
    <div>

        <div className="row justify-content-center mb-3">
        <div className="col-3">
            <button className="btn btn-danger w-100" onClick={()=>his()}>All History</button>
            </div>
            <div className="col-3">
            <button className="btn btn-primary w-100" onClick={()=>depo(fetchedData[i].deposit,"Deposit")}>Deposit</button>
            </div>
            <div className="col-3">
                <button className="btn btn-secondary w-100" onClick={()=>depo(fetchedData[i].transfer, "Transfer")}>Transfer</button></div>
            <div className="col-3"><button className="btn btn-info w-100" onClick={()=>depo(fetchedData[i].withdraw,"Withdraw")}>Withdraw</button></div>
        </div>
        
      <div className={tab}>
      <h2 className="mt-2 mb-2 fs-2"> All History</h2>
<table className="table table-bordered align-middle fs-4 ">
<thead>
  <tr>
  <th>S/N</th>
  <th>Date</th>
  <th>Type</th>
  <th>Details</th>
  <th>Amount</th>
  <th>Balance</th>
  </tr>
</thead>
  <tbody>
  {

    fetchedData[i].accthis.map((data,ind)=>(
      <tr>
      <td>{ind+1}</td>
      <td>
        {  fetchedData[i].accthis[(fetchedData[i].accthis.length-1)-ind].date}
       </td>
      <td>  <button className={fetchedData[i].accthis[(fetchedData[i].accthis.length-1)-ind].type=="credit"?bg:bgs}>{ fetchedData[i].accthis[(fetchedData[i].accthis.length-1)-ind].type}</button> </td>
      <td>{fetchedData[i].accthis[(fetchedData[i].accthis.length-1)-ind].details}</td>
      <td>${ fetchedData[i].accthis[(fetchedData[i].accthis.length-1)-ind].amount}</td>
      <td>${ fetchedData[i].accthis[(fetchedData[i].accthis.length-1)-ind].bal}</td>
      </tr>
    ))

  

 
}
  </tbody>
</table>
</div>

<div className={dep}>
<h2 className="mt-2 mb-2 fs-2">{name}</h2>
<table className="table table-bordered align-middle fs-4 ">
<thead>
  <tr>
  <th>S/N</th>
  <th>Date</th>
  <th>Time</th>
  <th>Name</th>
  <th>Amount</th>
  </tr>
</thead>
  <tbody>
  {
    change.map((data,i)=>(
      <tr>
      <td>{i+1}</td>
      <td>
        {change[(change.length-1)-i].date}
       </td>
      <td>  <button className={data.type=='credit'?bg:bgs}>{change[(change.length-1)-i].time}</button> </td>
      <td>{change[(change.length-1)-i].name}</td>
      <td>${change[(change.length-1)-i].amount}</td>

      </tr>
    ))
 
 
}
  </tbody>
</table>
</div>
    </div>
  )
}


export default Transactions