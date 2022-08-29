import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import Toaster from './../components/toast';

const Transfer = () => {

  const [show, setShow] = useState(false);
  const [fail, setfail] = useState(false);
  const [bal, setbal] = useState(false);
const [you, setyou] = useState(false);
const [valid, setvalid] = useState(false);



    const [name, setname] = useState("")
    const [acc, setacc] = useState("")
    let i=JSON.parse(localStorage.index);
    let fetchedData=JSON.parse(localStorage.users);
    const [trans, settrans] = useState('');
    const [acct, setacct] = useState('');
    const [ben, setben] = useState('');
    const [det, setdet] = useState('');
      useEffect(() => {
          setname(fetchedData[i].Fname+" "+fetchedData[i].Lname)
          setacc(fetchedData[i].acct)
      }, []);
    

     

      const check=(e)=>{
        for (let index = 0; index < fetchedData.length; index++) {   
    console.log(index);
            if (fetchedData[index].acct==acct) {
            let val=fetchedData[index].Fname+" "+fetchedData[index].Lname
            console.log(fetchedData[index].Fname)
          setben(val)
          break;
            }else{
            setben("Not found")
            console.log(index);
           
            }
        }
      }

const transfer=()=>{

   if(trans!==""&& acct!==""){
    let today = new Date();
    for (let index = 0; index <  fetchedData.length; index++) {
        if (fetchedData[index].acct==acct) {
            setben(fetchedData[index].Fname+" "+fetchedData[index].Lname)
            if(fetchedData[i].acctbal>=trans){
                if (fetchedData[i].acct!=acct) {
            fetchedData[index].acctbal=parseInt(fetchedData[index].acctbal)+parseInt(trans); //transfer
            fetchedData[i].acctbal= parseInt(fetchedData[i].acctbal)-parseInt(trans);//deduct
            let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
            let date = today.getFullYear()+'/'+(today.getMonth()+1)+'/'+today.getDate();

            let sendobj={name:fetchedData[i].Fname, amountsent:trans, time,date, benefiacct:acct};//sender
            fetchedData[i].transfer=[...fetchedData[i].transfer,sendobj];//sender

        
            let robj={name:fetchedData[i].Fname, amount:trans, time,date}; //reciever
            fetchedData[index].deposit=[... fetchedData[index].deposit, robj]

            let hisobj={amount:trans,type:"Credit",date,details:det, bal:fetchedData[i].acctbal}//;sender history
            fetchedData[i].accthis=[...fetchedData[i].accthis,hisobj];//sender history

            let hisrobj={amount:trans,type:"Debit",date,details:det, bal:fetchedData[index].acctbal}//;re history
            fetchedData[index].accthis=[...fetchedData[index].accthis,hisrobj];//sender history

            localStorage.users=JSON.stringify(fetchedData);
            setShow(true);
                }else{
                 setyou(true)
                }
            }else{
            setbal(true)
            }
            break;
        }else{
            setvalid(true)
        }
        
    }
  
   }else{
   setfail(true)
   }
}

  return (
    <div> <div class="card text-white car mb-3 mx-auto my-auto ps-3 pe-3 pb-3" style={{width:"22rem"}}>
    <div class="card-header fs-1">Transfer</div>
    <div class="card-body">
      <p class="card-text">
        <div className="row justify-content-center flex-column">
          <div className="col-12 mb-4">
          <label htmlFor="">Name</label>
            <input type="text" className="form-control" value={name} disabled/></div>
          <div className="col-12 mb-4"> <label htmlFor="">Account number</label><input type="text" className="form-control" value={acc} disabled /></div>
          <div className="col-12 mb-4"> <label htmlFor="">Beneficary acct no</label><input type="number" className="form-control" value={acct} placeholder="Beneficary acct no" onChange={(e)=>setacct(e.target.value)} /></div>
          <div className="col-12 mb-4"><label htmlFor="">Beneficary name</label><input type="text" className="form-control" value={ben}     placeholder="Beneficary name"disabled/></div>
          <div className="col-12 mb-4"><label htmlFor="">Amount</label><input type="text" className="form-control" placeholder="Amount" onChange={(e)=>settrans(e.target.value)}/></div>
          <div className="col-12 mb-4"><label htmlFor="">Details</label><input type="text" className="form-control" placeholder="details" value={det} onChange={(e)=>setdet(e.target.value)}/></div>
          <div className="col-12 col-lg-12 mb-2 "><button className="btn btn-primary w-100" onClick={()=>check()}>Check Account number</button></div>
          <div className="col-12 col-lg-12  "><button className="btn btnd btn-success w-100" onClick={()=>transfer()}>Transfer</button></div>
        </div>
      </p>
    </div>
  </div>
  <Toaster show={bal} setShow={setbal} head="Insufficient balance" tail="Enter amount within your balance" bg="warning" color="text-dark fs-5 mx-auto"/>
  <Toaster show={you} setShow={setyou} head="Not possible" tail="You can't send to yourself" bg="warning" color="text-dark fs-5 mx-auto"/>
  <Toaster show={fail} setShow={setfail} head="Empty fields" tail="Ensure you fill up the field" bg="danger" color="text-light  fs-5 mx-auto"/>
  <Toaster show={fail} setShow={setfail} head="Invalid Account" tail="Account does not exist" bg="danger" color="text-light  fs-5 mx-auto"/>
  <Toaster show={bal} setShow={setbal} head="Insufficient balance" tail="Enter amount within your balance" bg="warning" color="text-dark fs-5 mx-auto"/>
  <Toaster show={show} setShow={setShow} head="🥳Transfer was successful" tail="Money was sent" bg="success" color="text-lightfs-5 mx-auto"/>
  </div>
  )
}

export default Transfer