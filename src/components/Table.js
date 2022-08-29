import React from 'react'

const Table = () => {
  
  let i=JSON.parse(localStorage.index);
  let fetchedData=JSON.parse(localStorage.users);
  let bg="btn text-light rounded-5 bg-danger"
  let bgs="btn text-light rounded-5 bg-success"
  return (
    <div>
<div className="table-responsive">
<table className="table table-bordered align-middle ">
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
        { fetchedData[i].accthis[(fetchedData[i].accthis.length-1)-ind].date}
       </td>
      <td>  <button className={fetchedData[i].accthis[(fetchedData[i].accthis.length-1)-ind].type=="credit"?bg:bgs}>{fetchedData[i].accthis[(fetchedData[i].accthis.length-1)-ind].type}</button> </td>
      <td>{fetchedData[i].accthis[(fetchedData[i].accthis.length-1)-ind].details}</td>
      <td>${fetchedData[i].accthis[(fetchedData[i].accthis.length-1)-ind].amount}</td>
      <td>${fetchedData[i].accthis[(fetchedData[i].accthis.length-1)-ind].bal}</td>
      </tr>
    ))
 
 
}
  </tbody>
</table>
</div>
        
    </div>
  )
}

export default Table