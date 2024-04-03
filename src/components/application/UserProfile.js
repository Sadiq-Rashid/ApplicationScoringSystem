import React, { useEffect, useState } from "react";
import Card from "antd/es/card/Card";
import { API_BASE_URL } from "../../apiConfig";
import { useParams } from "react-router-dom";
import './application.css';
import { Button } from "antd";



const UserProfile = () => {

    const [application, setApplication] = useState({})
    const params = useParams()
    const [users, setUsers] = useState([])
    const [userData, setUserData] = useState({})

    const username = localStorage.getItem('username')


    const getUsers = async() => {
      try {

        const response = await fetch(`${API_BASE_URL}/escalelabs/users/`)
        const data = await response.json()
        console.log("users", data)

        const filteredUserProfile = data.filter((user) => user.username === username)
        console.log("filtered profile", filteredUserProfile)
        setUsers(filteredUserProfile)

      } catch(error) {
        console.log('An error occured while retrieving user data')
      }
    }


    const token = localStorage.getItem('accessToken')


    const getApplication = async() => {
        try {
            const response = await fetch(`${API_BASE_URL}/escalelabs/applications/`, {
              headers: {
                'Authorization': `Bearer ${token}`
              }
            })
            const data = await response.json()
            setApplication(data.data)
            console.log(data.data)

        } catch(error) {
            console.log('An error occured while fetching applicat details')
        }
    }
    

    console.log(username)
    const filteredUserProfile = users.filter((user) => user.username = username)
    console.log(filteredUserProfile)
    


    useEffect(() => {
        getApplication()
        getUsers()
    }, [params.id])



  return (
    <div className=" container " >

      {users?.map((user) => (
           <Card
           title="Applicant Details"
           bordered={false}
           style={{
             width: "100%",
           }}
   
        
         >
           <div className="applicant_details">
            <div>
            <i className="fa fa-user-circle" style={{ width: '70%', fontSize: '100px' }}   aria-hidden="true"></i>
            </div>
               <div>
                <p><strong>First Name: </strong>{user.username}</p>
                   <p><strong>First Name: </strong>{user.first_name}</p>
                   <p><strong>Last Name: </strong>{user.last_name}</p>
                   <p><strong>Email Address: </strong>{user.email}</p>
                  
                   <p><strong>Registration Date: </strong>{user.date_joined}</p>
                   
               </div>
   
              
               
           
    
           </div>
         
           <Button type="primary" href={`/main/applications`}>Go back</Button>
           
         </Card>
     
      ))}
    
          
     
    </div>
  );
};

export default UserProfile;
