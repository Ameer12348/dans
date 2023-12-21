import React, { useEffect, useRef } from 'react'
import './Signup.scss'
import { ToastContainer, toast } from 'react-toastify'
import { Link, useNavigate } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';



const Login = () => {
    const input1 = useRef()
  const input2 = useRef()
  const navigate =  useNavigate()
  const togglepassword = useRef()
  const login = useRef()
  useEffect(()=>{
    window.scrollTo(0,0)
  })

  return (
    <div className="container">
    <form className='login-form'>
    <h1>Login</h1>
    <p>Do not have an account?Login or <Link to='/signup'>signup</Link> </p>
    <div>
      <label htmlFor="username" className='d-block  '>Choose UserName</label>
      <input required ref={input1} type="text" className='d-block rounded border border-1 border-dark py-2' placeholder='username' id='username' />
    </div>
    
    <div>
      <label htmlFor="pass1" className='d-block  '>Password</label>
      <input required ref={input2}   type="password" className='d-block   rounded border border-1 border-dark py-2' placeholder='password' id='pass1' />  
    </div>
    <div className=' m-auto'  style={{width:'90%'}}>
    
    <input type="checkbox" ref={togglepassword} id='togglepass' onClick={()=>{
      if (togglepassword.current.checked) {
        input2.current.type = 'text'
      }else{
        input2.current.type = 'password'

      }
    }} className='p-2' style={{height:'16px',width:'16px'}} />
    <label htmlFor="togglepass" className='p-2'>show password</label>
    </div>
    <div >
      <button type='submit' className='btn d-block mx-auto mt-3 w-25' ref={login} style={{backgroundColor:'#6cbe02',color:'white',textAlign:'center'}} onClick={(e)=>{
        login.current.innerHTML = '<div  id="login-loader"></div>' 
        e.preventDefault();
        fetch('https://backend-ten-mocha.vercel.app/login',{
            method:'PUT',
            body: JSON.stringify({userName:input1.current.value,password:input2.current.value}),
            headers: {'Content-Type': 'application/json'}
        }).then(res=>res.json()).then(res=>{
            if (res.message === 'Loged in') {
                localStorage.setItem('user', JSON.stringify({userName:input1.current.value}))
                navigate('/')
            }
            toast(res.message, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                })
                login.current.innerHTML = "Login"
        })
        
      }}>Login</button>
    </div>
    </form>
    <ToastContainer/>
    </div>
      )
}

export default Login