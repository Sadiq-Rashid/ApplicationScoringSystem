import React, { useEffect, useState } from 'react';
import './application.css';
import { useNavigate } from 'react-router-dom';
import { API_BASE_URL } from '../../apiConfig';
import { useParams } from 'react-router-dom';
import Card from 'antd/es/card/Card';

const UpdateApplication = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [application, setApplication] = useState({})
  const navigate = useNavigate();
  const params = useParams()

  const loggedInUser = localStorage.getItem('userId')
  const [formData, setFormData] = useState({
    user: loggedInUser,
    email: "",
    fullName: "",
    registrationDate: "",
    dateOfBirth: "",
    phoneNumber: "",
    gender: "",
    country: "",
    education_level: "",
    graduationDate: "",
    employmentStatus: "",
    experienceYears: "",
    doYouHaveCompany: "",
    yourBusinessName: "",
    yourBusinessStage: "",
    DateOfYourBusinessEstablishment: "",
    totalFoundersInYourBusiness: ""
  });


  const getApplication = async() => {
    try {
        const response = await fetch(`${API_BASE_URL}/escalelabs/applications/${params.id}`)
        const data = await response.json()
        console.log(data)
        setFormData(data)

    } catch(error) {
        console.log("an error ocuured while updating data", error)
    }
}

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(`${API_BASE_URL}/escalelabs/update_application/${params.id}/`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setLoading(true);
        setTimeout(() => {
          navigate('/main/applications');
        }, 5000);
        setMessage("Application successful");
      } else {
        setMessage("Error: Username already exists or passwords do not match");
      }
    } catch (error) {
      setMessage("An error occurred while sending application");
    }
  };

  setTimeout(() => {
    setMessage('');
  }, 3000);


  useEffect(() => {
        getApplication()
  }, [params.id])

  return (
    <div className='application'>
      <div className='application__container'>
      <Card
        title="Application Form"
        bordered={false}
        style={{
          width: "100%",
        }}

     
      >

        <form onSubmit={handleSubmit} className='application__fields'>

        <div style={{width: '100%', display: 'none' }}> {/* Hiding the user input field */}
          <label>User</label>
          <input
            placeholder='user'
            className='input__style'
            type='text'
            name='user'
            value={formData.user}
            onChange={handleChange}
          />   
         </div>


          <div style={{width: '100%'}}>
          <label>Email address</label>
          <input
            placeholder='Email'
            className='input__style'
            type='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
          />   
         </div>  
         

         <div>
            <label>Enter Your Full Name</label>
            <input
                placeholder='Full Name'
                className='input__style'
                type='text'
                name='fullName'
                value={formData.fullName}
                onChange={handleChange}
            />
         </div>


            <div>
                <label>Registration Date</label>
                <input
                placeholder='Registration Date'
                className='input__style'
                type='date'
                name='registrationDate'
                value={formData.registrationDate}
                onChange={handleChange}
            />
            </div>


            <div>
                <label>Enter Date of Birth</label>
                    <input
                    placeholder='Date of Birth'
                    className='input__style'
                    type='date'
                    name='dateOfBirth'
                    value={formData.dateOfBirth}
                    onChange={handleChange}
                />

            </div>


         <div>
            <label>Phone Number</label>
         <input
            placeholder='Phone Number'
            className='input__style'
            type='tel'
            name='phoneNumber'
            value={formData.phoneNumber}
            onChange={handleChange}
          />

         </div>


         <div>
            <label>Gender</label>
         <select
                className='input__style'
                name='gender'
                value={formData.gender}
                onChange={handleChange}
                >
                <option value="" disabled>Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
            </select>
         </div>

          
    <div>
        <label>Enter country</label>

        <input
            placeholder='Country'
            className='input__style'
            type='text'
            name='country'
            value={formData.country}
            onChange={handleChange}
          />
    </div>

    <div>
        <label>Enter your education level</label>
        <select
            className='input__style'
            name='education_level'
            value={formData.education_level}
            onChange={handleChange}
            >
            <option value="" disabled>Select Education Level</option>
            <option value="Primary level">Primary level</option>
            <option value="Secondary level">Secondary level</option>
            <option value="Tartiary level">Tartiary level</option>
        </select>
    </div>
          
       
    <div>
        <label>Graduation Date</label>

        <input
            placeholder='Graduation Date'
            className='input__style'
            type='date'
            name='graduationDate'
            value={formData.graduationDate}
            onChange={handleChange}
          />
    </div>
         
        <div>
            <label>Employment status</label>

            <select
            className='input__style'
            name='employmentStatus'
            value={formData.employmentStatus}
            onChange={handleChange}
            >
            <option value="" disabled>Select Employment Status</option>
            <option value="Employed">Employed</option>
            <option value="Unemployed">Unemployed</option>
            <option value="Self-employed">Self-employed</option>
        </select>
        </div>
       
        <div>
            <label>Years of Experience</label>

            <input
            placeholder='Experience Years'
            className='input__style'
            type='number'
            name='experienceYears'
            value={formData.experienceYears}
            onChange={handleChange}
          />
        </div>

        
        <div>
            <label>Do you have a company?</label>
            <select
             className='input__style'
             type='text'
             name='doYouHaveCompany'
             value={formData.doYouHaveCompany}
             onChange={handleChange}
            >
            <option value="" disabled>Do you have a company ?</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
            
        </select>
        </div>
          
          
        <div>
            <label>Your business Name</label>

            <input
            placeholder='Your Business Name'
            className='input__style'
            type='text'
            name='yourBusinessName'
            value={formData.yourBusinessName}
            onChange={handleChange}
          />
        </div>

        <div>
            <label>which stage is your busuness ? </label>
            <select
            className='input__style'
            name='yourBusinessStage'
            value={formData.yourBusinessStage}
            onChange={handleChange}
            >
            <option value="" disabled>Select Business Stage</option>
            <option value="Start up">Start up</option>
            <option value="Growth">Growth</option>
            <option value="Marturity">Marturity</option>
            <option value="Renewal">Renewal</option>
            <option value="Decline">Decline</option>
        </select>
        </div>
          
        
        <div>
            <label>Date your business was established</label>

            <input
            placeholder='Date of Your Business Establishment'
            className='input__style'
            type='date'
            name='DateOfYourBusinessEstablishment'
            value={formData.DateOfYourBusinessEstablishment}
            onChange={handleChange}
          />
        </div>

        <div >
            <label>Total Founders in Your Business</label>
            <input
            placeholder='Total Founders in Your Business'
            className='input__style'
            type='number'
            name='totalFoundersInYourBusiness'
            value={formData.totalFoundersInYourBusiness}
            onChange={handleChange}
          />
        </div>
         
      

          {loading ? (
            <button className="buttonload button">
              <i className="fa fa-circle-o-notch fa-spin"></i> Updating
            </button>
          ) : (
            <button type='submit' className='button'>Update</button>
          )}

        </form>

        {message && (
          <p className={`message ${message.includes('error') ? 'error' : 'success'}`}>
            {message}
          </p>
        )}
        </Card>
      </div>
    </div>
  );
}

export default UpdateApplication;
