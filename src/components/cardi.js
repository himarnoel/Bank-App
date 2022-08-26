
import React from 'react'
// import Card from 'react-bootstrap/Card';
import  bg  from "../Line 1.png";
import  bn  from "../Vector.png";

function Cardi() {
  return (
    <>
    <div class="card rounded-4 cari pb-1" style={{ width: '20rem', }}>
    <img src={bg} class="card-img mt-5 pt-5" alt="..."/>
  <div class="card-body card-img-overlay">
  <img src={bn} class="float-end ps-3 pe-3" alt="..."/>
  <p class="card-text tcari mt-3" >Savings Account </p>
    <h5 class="card-title fs-3  mb-3">$150,000.00</h5>
    <p class="card-text fs-5 mb-2 ">111 2222 333 444</p>
    <div className="row  ">
        <div className="col-5 mt-1 fw-3 ">

    <div className="tcari">
        Card holder
    </div>
    <div>Dolapo Emeka</div>

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