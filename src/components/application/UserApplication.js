import React from "react";
import { useState, useEffect } from "react";
import { Button, Flex } from 'antd';

import DeleteConfirm from "../../common/DeleteConfirm";

import DataTable from "react-data-table-component";
import { API_BASE_URL } from "../../apiConfig";

const UserApplication = () => {
  const [applications, setApplications] = useState([]);
  const [applicationCount, setApplicationCount] = useState(0)
  const [selectedApplicationId, setSelectedApplicationId] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [searchText, setSearchText] = useState("");

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


   const userId = localStorage.getItem('userId')

  const getApplications = async () => {
    try {
     
      const response = await fetch(`${API_BASE_URL}/escalelabs/applications`); 
      const data = await response.json();
      setApplications(data.data);
      setApplicationCount(data.count)
    } catch (error) {
      console.log("error while fetching couapplicationsnties");
    }
  };

  useEffect(() => {
    setTimeout(() => {
      getApplications();
      //   setIsLoading(false)
    }, 1000);
  }, []);

  const handleDelete = (applicationId) => {
    setSelectedApplicationId(applicationId)
  }

  const handleSearch = (e) => {
    setSearchText(e.target.value);
  };

  // function convertToCSV(data) {
  //   const header = Object.keys(data[0]).join(",");
  //   const rows = data.map((row) => Object.values(row).join(","));
  //   return [header, ...rows].join("\n");
  // }
  const filteredApplications = applications.filter((application) => {
    return (
      application.fullName.toLowerCase().includes(searchText.toLowerCase()) ||
      application.email.toLowerCase().includes(searchText.toLowerCase()) ||
      application.country.toLowerCase().includes(searchText.toLowerCase())
    );
  });

  const handleConfirmDelete = async() => {
    try {
      const response = await fetch(`${API_BASE_URL}/ecalelabs/delete_application/${selectedApplicationId}`, {
        method: 'DELETE'
      })

      if(response.ok) {
        getApplications()
      } else {
        console.log('server error')
      }
    } catch(error) {
      console.log('An error occured while deleting application', error)
    }
    setTimeout(() => {
      setShow(false)
    }, 1000)

  }

  const columns = [
    {
      name: "Full Name",
      selector: (row) => `${row.fullName}`,
      sortable: true,
    },
    {
      name: "Email",
      selector: (row) => row.email,
      sortable: true,
    },
    {
      name: "Phone Number",
      selector: (row) => row.phoneNumber,
      sortable: true,
    },
    {
      name: "country",
      selector: (row) => row.country,
      sortable: true,
    },

    {
      name: "Gender",
      selector: (row) => row.gender,
      sortable: true,
    },

    {
        cell: row => <Button href={`/main/application_update/${row.id}`} type="primary" >Edit</Button>, 
        ignoreRowClick: true,
        allowOverflow: true,
        button: true
    },
    {
        cell: row => <Button  href={`/main/application_details/${row.id}`} type="primary" ghost>View</Button>, 
            
        ignoreRowClick: true,
        allowOverflow: true,
        button: true
    },
    {
        cell: row =>      <Button onClick={() => handleDelete(row.id)} type="primary" danger>Delete</Button>,   
        ignoreRowClick: true,
        allowOverflow: true,
        button: true
    },
    // {
    //   cell: (row) => (
    //     <div className="dropdown">
    //       <button
    //         className="btn  btn-sm text-xs"
    //         type="button"
    //         id={`dropdownMenuButton-${row.id}`}
    //         data-toggle="dropdown"
    //         aria-haspopup="true"
    //         aria-expanded="false"
    //       >
    //         <span className="fa fa-ellipsis-v"></span>
    //       </button>

    //       <Button type="primary">Primary Button</Button>
    //       <div
    //         className="dropdown-menu text-xs"
    //         aria-labelledby={`dropdownMenuButton-${row.id}`}
    //       >
    //         {/* {userRole === "admin" && ( */}
    //           <>
    //             <a className="text-white" href={`/main/county/${row.id}`}>
    //               <button className="dropdown-item ">View</button>
    //             </a>

    //             <a
    //               className="text-white"
    //               href={`/main/update_county/${row.id}`}
    //             >
    //               <button className="dropdown-item">Edit</button>
    //             </a>

    //             {/* <button
    //               className="dropdown-item"
    //               style={{ cursor: "pointer" }}
    //               onClick={() => {
    //                 handleDelete(row.id);
    //                 handleShow();
    //               }}
    //             >
    //               Delete
    //             </button> */}
    //           </>
    //         {/* )} */}
    //       </div>
    //     </div>
    //   ),
    //   ignoreRowClick: true,
    //   allowOverflow: true,
    //   button: true,
    //   minWidth: "60px", // Set a minimum width for the dropdown button
    // },
  ];

  return (
    <div className="content-wrapper mt-2">
     
      <section className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="card">
               
                <div className="card-body">
                  <div className="container mt-5">
                    <div className="container mt-5">
                      <div className="row">
                        <div className="col-sm-6">
                          <h3 className="card-title  text-primary text-bold">
                            List of Applications({applicationCount})
                          </h3>
                        </div>
                        <div className="col-sm-6 text-right">
                        <Button
                         type="primary" ghost
                         style={{ float: "right" }}
                            onClick={() => {
                              window.location.href = "/main/application";
                            }}
                         >New</Button>,   
                         
                          {/* {userRole === "admin" && (
                            <button
                              type="button"
                              className="btn btn-outline-primary btn-xs"
                              style={{ float: "right", marginRight: "10px" }}
                              onClick={() => {
                                const csv = counties.map((county) => ({
                                  Name: `${county.county_name}`,
                                  subCounty: county.longitude,
                                }));
                                const csvData = convertToCSV(csv);
                                const blob = new Blob([csvData], {
                                  type: "text/csv",
                                });
                                const url = window.URL.createObjectURL(blob);
                                const a = document.createElement("a");
                                a.setAttribute("href", url);
                                a.setAttribute("download", "users.csv");
                                a.click();
                              }}
                            >
                              Export to CSV
                            </button>
                          )} */}
                          <input
                            type="text"
         
                            placeholder="Search..."
                            value={searchText}
                            onChange={handleSearch}
                            style={{
                              width: "200px",
                              float: "right",
                              marginRight: "10px",
                              padding: " 6px",
                              border: 'solid 1px #cbd5e1',
                              borderRadius: "6px"
                            }}
                          />
                        </div>
                      </div>
                    </div>

                    <div >
                      <DataTable
                        columns={columns}
                        data={filteredApplications}
                        fixedHeader
                        responsive={true}
                        selectableRows
                        // progressPending={loading}
                        // onTableUpdate={() => setLoading(false)} // Reset loading state when table updates
                        striped // Enable row striping
                        highlightOnHover // Highlight row
                        pagination // Paginate
                      />
                    </div>
                  </div>

                  {show && (
                    <DeleteConfirm
                      handleConfirmDelete={handleConfirmDelete}
                      itemName={
                        applications.find(
                          (application) => application.id === selectedApplicationId
                        )?.application.fullName
                      }
                      handleClose={handleClose}
                      handleShow={handleShow}
                      show={show}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UserApplication;
