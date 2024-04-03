import React, { useState } from 'react'
import './signin.css'
import { redirect, useNavigate } from 'react-router-dom'
import { Button } from 'antd'




const Signin = () => {
    const navigate = useNavigate()
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    username: "",
    password: ""
  })

  const handleChange = (event) => {
    const {name, value} = event.target;
    setFormData({
      ...formData, [name]: value
    })

  }


  const signinNavigation = () => {
        navigate('../main/dashboard')
  }


  const handleSubmit = async(event) => {
    event.preventDefault()

    try {

      const response = await fetch("http://127.0.0.1:8000/escalelabs/login/", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
  
        body: JSON.stringify(formData)
      })


      if(response.ok) {

        const responseData = await response.json();
        
        const { access_token, role, username, userId } = responseData;
        localStorage.setItem('accessToken', access_token);
        // localStorage.setItem('userId', username)
        localStorage.setItem('role', role)
        localStorage.setItem('userId', userId)
        localStorage.setItem('username', username)
        console.log("login succesifull")
        setMessage("login succesifull")
        setLoading(true)
       

     

        setTimeout(() => {
          if(role === 'user') {
            navigate('../main/application') 
          } else if (role === 'admin') {
            navigate('../main/applications')
          }  else {
            navigate('./signup')
          }
          
      
        }, 3000);
      } else {
        console.log('server error occured while tring to login')
        setMessage("error! username or password is incorrect")
      }

    } catch(error) {
      console.log('an error occured while loggging in')
      setMessage("error! username or password is incorrect")
    }
  }

  setTimeout(() => {
    setMessage("")
    
  }, 3000);


  return (
    <div className='login'>
    <div className='login__container'>
 <div>
     <h2>Escale labs Sign in </h2>
     <img style={{width: '280px'}} src='/images/escale-labs.jpeg' alt='affam logo' />
 </div>

 <form onSubmit={handleSubmit}  className='login__fields'>
   
       <input
          placeholder=' username'
          className=' input__style'
          type='text'
          name='username'
          value={formData.username}
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

 
{loading ? (
        <>
        <button className="buttonload button">
            <i className="fa fa-circle-o-notch fa-spin"></i>signing in
        </button>
        </> 
    ): <button type='submit' className=' button'>sign in</button>}
    
    

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

export default Signin