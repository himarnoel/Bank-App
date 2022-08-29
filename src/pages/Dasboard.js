import React from 'react'
import Cardi from './../components/cardi';
import chart from "../Chart.png"
import Divider from '@mui/material/Divider';
import Table from './../components/Table';
import { useEffect } from 'react';
import { useState } from 'react';
import Toaster from './../components/toast';

const Dashboard = () => {
  const [acc, setacc] = useState(0);
  const [amt, setamt] = useState(0);
  const [fn, setfn] = useState("");
  const [ln, setln] = useState("");

  useEffect(() => {
    let fetchedData=JSON.parse(localStorage.users);
    let i=JSON.parse(localStorage.index);
    for (let index = 0; index <  fetchedData.length; index++) {
      if(i==index){
        setln(fetchedData[index].Lname)
        setfn(fetchedData[index].Fname)
  setacc(fetchedData[index].acct);
  setamt(fetchedData[index].acctbal)
  console.log(i);
  break;
      }
    }
  }, []);
  return (
    <div>
      <h2 className="fs-4 ps-1">Account Balance</h2>
   
      <br />
     <div className="row gy-3 justify-content-center">
      <div className="col  col-lg-4 col-md-12">
      <Cardi acctno={acc} type="Current" cls={"cari card rounded-4  pb-1"} amt={amt} fn={fn} ln={ln}/>
      </div>
      <div className="col  col-lg-4 col-md-12">
      <Cardi acctno="1111 22222 222" type="Savings" cls={"cari1 card rounded-4  pb-1"} amt="150.00" fn={fn} ln={ln}/>   
      </div>
      <div className="col col-lg-4 col-md-12">
      <Cardi acctno="1111 22222 222" type="Saving" cls={"cari2 card rounded-4  pb-1"} amt="150.00" fn={fn} ln={ln}/>  
      </div>
     </div>
     <div cl assName="col-12 col-lg-12 col-md-12">
    <br />
     </div>
    <h2 className="fs-4 mt-2 ps-1 mb-4">Tranaction History</h2>
<Table/>
    </div>
  )
}

export default Dashboard