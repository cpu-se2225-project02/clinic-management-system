import React, { ReactElement } from 'react'

export default function FinancePage() {
    return (
      <div className="FinancePage">
      <header>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossOrigin="anonymous" />
      </header>


      <div className="card">
        <div className="card-header">
          Finance Overview

        </div>
        <div className="card-body">
          <div className="card border-dark mb-3">
            <div className="card-body text-dark"> <span className="material-icons">payment</span>
              <h5 className="card-title">PAYMENT</h5>
              <p className="card-text">00.00 PHP</p>
            </div>
            <div className="btn-group" role="group" aria-label="Basic example">
              <button type="button" className="btn btn-primary">View Payment</button>
              <button type="button" className="btn btn-primary">Add Payment</button>
            </div>
          </div>
        </div>
        <div className="card-body">
          <div className="card border-dark mb-3">
            <div className="card-body text-dark"> <span className="material-icons">payment</span>
              <h5 className="card-title">PATIENT ACCOUNT</h5>
         
            </div>
    
              <button type="button" className="btn btn-primary">View Patient Accounts</button>
            </div>
          
        </div>
      </div>
    </div>




    );
  }