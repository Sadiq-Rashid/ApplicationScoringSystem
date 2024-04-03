import React, { useState, useEffect } from 'react';
import Spinner from './Spinner';

const Dashboard = () =>  {

  const [isLoading, setIsLaoding] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLaoding(false)
    }, 3000)
  })


    return (
      <div>
        <div className="content-wrapper">
          <div className="content-header">
            <div className="container-fluid">
              <div className="row mb-2">
                <div className="col-sm-6">
                  <h1 className="m-0">Dashboard</h1>
                </div>
                <div className="col-sm-6">
                  <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item"><a href="/main/dashboard">Home</a></li>
                    <li className="breadcrumb-item active">Dashboard v1</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>

          {isLoading ?  (
            <Spinner />
          ) : (
            <section className="content">
            <div className="container-fluid">
              <div className="row">
                
              </div>
            </div>
          </section>
          )}
          <section className="col-lg-5 connectedSortable"></section>
        </div>
      </div>
    );
  
}

export default Dashboard
