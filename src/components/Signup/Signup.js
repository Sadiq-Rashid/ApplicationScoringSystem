import React, { useState } from 'react'
import './signup.css'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
    const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState("")
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    username: "",
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    password2: ""
  })



  const handleChange = (event) => {
    const {name, value} = event.target;
    setFormData({
      ...formData, [name]: value
    })

  }


  const handleSubmit = async(event) => {
    event.preventDefault()

    try {

      const response = await fetch("http://127.0.0.1:8000/escalelabs/register/", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
  
        body: JSON.stringify(formData)
      })


      if(response.ok) {
        console.log("registration succesifull")
        setLoading(true)
        setTimeout(() => {
          navigate('../signin')
        }, 5000)
      
        setMessage("Registration succesifull")
      } else {
        console.log('server error occured while tring to register')
        setMessage(" error, Username already exists or passwords do not match")
      }

    } catch(error) {
      console.log('an error occured while signing up')
      setMessage("An error occured while registering ")
    }
  }


    setTimeout(() => {
      setMessage('')
    }, 3000);


    const signupNavigation = () => {
        navigate('./signin')
  }


  return (

    <div className=' signup'>
       <div className=' signup__container'>
    <div>
    <h2>Escale labs Sign up </h2>
     <img style={{width: '280px'}} src='/images/escale-labs.jpeg' alt='affam logo' />
    </div>

    

    <form onSubmit={handleSubmit}  className=' signup__fields'>
      
        <input
          placeholder=' username'
          className=' input__style'
          type='text'
          name='username'
          value={formData.username}
          onChange={handleChange}
        />

        <input
          placeholder=' first name'
          className=' input__style'
          type='text'
          name='first_name'
          value={formData.first_name}
          onChange={handleChange}
        />

        <input
          placeholder=' last name'
          className=' input__style'
          type='text'
          name='last_name'
          value={formData.last_name}
          onChange={handleChange}
        />

        <input
          placeholder=' email address'
          className=' input__style'
          type='email'
          name='email'
          value={formData.email}
          onChange={handleChange}
          
        />

        <input
          placeholder=' password'
          className=' input__style'
          type='password'
          name='password'
          value={formData.password}
          onChange={handleChange}
        />

        <input
          placeholder=' Repeat password'
          className=' input__style'
          type='password'
          name='password2'
          value={formData.password2}
          onChange={handleChange}
          />


{loading ? (
        <>
        <button className="buttonload button">
            <i className="fa fa-circle-o-notch fa-spin"></i>signing up
        </button>
        </> 
    ): <button type='submit' className=' button'>sign up</button>}
    

    </form>
     {message && (
          <p className={`message ${message.includes('error') ? 'error' : 'success'}`}>
            {message}
          </p>
        )}
   
  </div>
    </div>
   
  )
}

export default Signup