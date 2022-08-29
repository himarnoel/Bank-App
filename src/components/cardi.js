
import React from 'react'
// import Card from 'react-bootstrap/Card';
import  bg  from "../Line 1.png";
import  bn  from "../Vector.png";

function Cardi(props) {
  return (
    <>
    <div className={props.cls}  style={{ width: '21rem', }}>
    <img src={bg} class="card-img mt-5 pt-5 mb-4" alt="..."/>
  <div class="card-body card-img-overlay">
  <img src={bn} class="float-end ps-3 mt-5 pe-3" alt="..."/>
  <p class="card-text tcari mt-3" >{props.type} Account </p>
    <h5 class="card-title fs-3  mb-3">${props.amt}</h5>
    <p class="card-text fs-5 mb-2 ">{props.acctno}</p>
    <div className="row  ">
        <div className="col-5 mt-1 fw-3 ">

    <div className="tcari">
        Card holder
    </div>
    <div className="fw-bold mb-5">{props.fn} {props.ln}</div>

        </div>
        <div className="col-3 mt-2">
          <h6 className="tcari">Expiry</h6>
          <h6>01/23</h6>
       
        </div>
        <div className="col-4">
            <br />
          
         <div className="fs-6 fw-bold mb-4"> Personal</div>
        </div>
    </div>
  </div>
</div>
    </>
  );
}

export default Cardi;

// 