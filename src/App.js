import React from 'react'
import Header from './components/1.header/Header'
import Hero from './components/1.header/Hero'
import { Route, Routes } from 'react-router-dom'
import Products from './components/2.section/Products'
import Details from './components/2.section/Details'
import Cart from './components/2.section/Cart'
import Category from './components/2.section/Category'
import Footer from './components/3.footer/Footer'
import Signup from './components/2.section/Signup'
import Login from './components/2.section/Login'
import Search from './components/2.section/Search'
import Protect from './components/Protect'

const App = () => {
  return (
    <div className="main-wrapper">
    <Header/>
    <Routes>
      <Route path='/' element={<> <Hero/><h1 className='mt-3' style={{fontSize:'30px',textAlign:'center'}}>New Arrivals</h1><p className='mb-5' style={{fontSize:'16px',textAlign:'center'}}>All the latest picked from designer of our store</p><Products/><Footer/></>} /> 
          <Route element={<Protect/>}>
          <Route path='/details/:id' element={<Details/>}/>
          <Route path='/cart' element={<><Cart/><Footer/></>} />

          </Route>
          
          <Route path='/search/:name' element={<><Search /><Footer/></>} />
          <Route path='/categories/:category' element={<><Category/><Footer/></>} />
          <Route path='/signup' element={<><Signup/><Footer/></>}/>
          <Route path='/login' element={<><Login/><Footer/></>}/>

    </Routes>

    
    </div>
  )
}

export default App