import React, { useEffect, useRef} from 'react'
import 'react-toastify/dist/ReactToastify.css';
import './Signup.scss'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
const Signup = () => {
  const input1 = useRef()
  const input2 = useRef()
  const input3 = useRef()
  const input4 = useRef()
  const togglepassword = useRef()
  const login = useRef()
  const navigate = useNavigate()
  useEffect(()=>{
    window.scrollTo(0,0)

  })
  return (
    <>
    <div className="container">
    <form className='login-form'>
    <h1>Signup</h1>
    <p>Already have an account?Signup or <Link to='/login'>Login</Link> </p>
    <div>
      <label htmlFor="username" className='d-block  '>Choose UserName</label>
      <input required ref={input1} type="text" className='d-block rounded border border-1 border-dark py-2' placeholder='username' id='username' />
    </div>
    <div>
      <label htmlFor="email" className='d-block  ' pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$">Enter your email</label>
      <input required ref={input2} type="email" className='d-block   rounded border border-1 border-dark py-2' placeholder='email' id='email' />
    </div>
    <div>
      <label htmlFor="pass1" className='d-block  '>Choose Password</label>
      <input required ref={input3}  type="password" className='d-block   rounded border border-1 border-dark py-2' placeholder='password' id='pass1' />  
    </div>
    <div>
      <label htmlFor="pass2" className='d-block  '>Re enter Password</label>
      <input required ref={input4} type="password" className='d-block   rounded border border-1 border-dark py-2' placeholder='password' id='pass2' />  
    </div>
    <div >
    <div className=' m-auto'  style={{width:'90%'}}>
    
    <input type="checkbox" ref={togglepassword} id='togglepass' onClick={()=>{
      if (togglepassword.current.checked) {
        input3.current.type = 'text'
        input4.current.type = 'text'
      }else{
        input3.current.type = 'password'
        input4.current.type = 'password'

      }
    }} className='p-2' style={{height:'16px',width:'16px'}} />
    <label htmlFor="togglepass" className='p-2'>show password</label>
    </div>
      <button type='submit' className='btn d-block mx-auto mt-3 w-25' ref={login} onClick={async(e)=>{
        login.current.innerHTML = '<div  id="login-loader"></div>' 

        e.preventDefault();
        if (input3.current.value === input4.current.value) {
       fetch('https://backend-ten-mocha.vercel.app/register',{
            method: 'POST',
            body:JSON.stringify({userName:input1.current.value,email:input2.current.value,password:input3.current.value}),
            headers: {'Content-Type': 'application/json'}
          }).then(res=>res.json()).then(res=>{
            if (res.message === 'registered successfully') {
              
              localStorage.setItem('user',JSON.stringify({userName:input1.current.value}))
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
            login.current.innerHTML = "Signup"
          }
            
            )
        }
        else{
          toast('your both passwords are not matching', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            })
        }

      }} style={{backgroundColor:'#6cbe02',color:'white'}}>Signup</button>
    </div>
    </form>
    <ToastContainer/>
    </div>
    </>
  )
}

export default Signup