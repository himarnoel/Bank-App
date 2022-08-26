import React from 'react'

const Table = () => {
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
  <tr>
  <td>1</td>
  <td>
    22/03/2022
   </td>
  <td>  <button className="btn btn-danger rounded-5 bg-danger">Debit</button> </td>
  <td>School fees</td>
  <td>$240</td>
  <td>$900,00</td>
  </tr>
  <tr>
  <td>2</td>
  <td>
    22/03/2022
   </td>
  <td>  <button className="btn btn-success rounded-5 bg-success">credit</button> </td>
  <td>School fees</td>
  <td>$240</td>
  <td>$900,00</td>
  </tr><tr>

  <td>3</td>
  <td>
    22/03/2022
   </td>
  <td>  <button className="btn btn-danger rounded-5 bg-danger">Debit</button> </td>
  <td>School fees</td>
  <td>$240</td>
  <td>$900,00</td>
  </tr><tr>
  <td>4</td>
  <td>
    22/03/2022
   </td>
  <td>  <button className="btn btn-danger rounded-5 bg-danger">Debit</button> </td>
  <td>School fees</td>
  <td>$240</td>
  <td>$900,00</td>
  </tr>
  </tbody>
</table>
</div>
        
    </div>
  )
}

export default Table