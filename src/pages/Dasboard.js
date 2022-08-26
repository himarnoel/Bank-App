import React from 'react'
import Cardi from './../components/cardi';
import chart from "../Chart.png"
import Divider from '@mui/material/Divider';
import Table from './../components/Table';

const Dashboard = () => {
  return (
    <div>
      <h2 className="fs-2 ps-1">Account Balance</h2>
      <br />
     <div className="row gy-3 justify-content-center">
      <div className="col  col-lg-4 col-md-12">
      <Cardi/>
      </div>
      <div className="col  col-lg-4 col-md-12">
      <Cardi/>   
  
      </div>
      <div className="col col-lg-4 col-md-12">
      <Cardi/>  
      </div>
     </div>

     <div cl assName="col-12 col-lg-12 col-md-12">
    <br />
     </div>
     <br />
<Table/>
    </div>
  )
}

export default Dashboard