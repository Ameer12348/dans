import React, {   useRef} from "react";
import "./Header.scss";
import { Link, useNavigate } from "react-router-dom";
import { LuUser2 } from "react-icons/lu";
import { IoSearchOutline,IoCartOutline } from "react-icons/io5";
import { HiMiniBars3BottomLeft } from "react-icons/hi2";




const Header = () => {
  const navcollapse = useRef()
  const search  = useRef()
  let collapser = 0;
  let searchcollapser = 0 ;
  const user = localStorage.getItem('user')
  const user1 =   JSON.parse(user)
  const navigate = useNavigate()
  
  
  
  

  return (
    <>
      <header>
        {/*---------------------  top navigation bar start ---------------------*/}
        <div className="top-nav  bg-gradient">
          <div className="container d-flex justify-content-center justify-content-md-between align-items-center p-1">
            <a href="tel:+923254430008" className="text-decoration-none  text-light">
              <p className="m-0 ">Order Online Or Call Us</p>
            </a>
            <ul className="d-md-flex align-md-items-center my-0 d-none">
              <li className="list-unstyled">
                <Link  to={""} className="text-decoration-none  text-light  px-2">
                  About us
                </Link>
              </li>
              <li className="list-unstyled">
                <Link to={""} className="text-decoration-none  text-light px-2">
                  Faq
                </Link>
              </li>
              <li className="list-unstyled">
                <Link to={""} className="text-decoration-none  text-light px-2">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {/*---------------------  top navigation bar end ---------------------*/}

        {/*---------------------  main navigation bar start ---------------------*/}
        <div className="main-nav">
            <nav className="container justify-content-between align-items-center d-flex position-relative px-4">
                <Link to='/'  className="text-decoration-none text-dark "><h1 className="logo">Dans</h1></Link>
                <div ref={navcollapse} className="d-flex justify-content-between align-items-start align-items-md-center flex-grow-1 nav-links">
                  <ul className=" d-flex  m-0 align-items-start align-items-md-center ">
                    <li className="list-unstyled">
                      <Link to="/" className="text-decoration-none text-dark p-2" >Home</Link>
                    </li>
                    <li style={{zIndex:20000}} className="list-unstyled position-relative" >
                      <button  className="text-decoration-none text-dark border-0 p-2 category-btn " style={{backgroundColor:'white'}} >Category</button>
                        <div className="d-flex  flex-column gap-0  left-0 top-100 ps-2 category-div" style={{backgroundColor:'white',cursor:'pointer',zIndex:'1000'}}>
                          <li className="m-0 py-1 ms-3 ">
                              <Link to="/categories/men's-clothing" className="text-decoration-none m-0 py-2  text-dark">Men's Clothing</Link>
                          </li>
                          <li className="m-0 py-1 ms-3">
                              <Link to="/categories/women's-clothing" className="text-decoration-none m-0 py-2  text-dark">Women's Clothing</Link>
                          </li>
                          <li className="m-0 py-1 ms-3">
                              <Link to="/categories/jewelery" className="text-decoration-none m-0 py-2  text-dark">Jewelery</Link>
                          </li>
                          <li className="m-0 py-1 ms-3">
                              <Link to="/categories/electronics" className="text-decoration-none m-0 py-2  text-dark">Electronics</Link>
                          </li>
                          <li className="m-0 py-1 ms-3">
                              <Link to="/categories/smartphones" className="text-decoration-none m-0 py-2  text-dark">Smartphones</Link>
                          </li>
                          <li className="m-0 py-1 ms-3">
                              <Link to="/categories/laptops" className="text-decoration-none m-0 py-2  text-dark">Laptops</Link>
                          </li>
                          <li className="m-0 py-1 ms-3">
                              <Link to="/categories/fragrances" className="text-decoration-none m-0 py-2  text-dark">Fragrances</Link>
                          </li>
                          <li className="m-0 py-1 ms-3">
                              <Link to="/categories/skincare" className="text-decoration-none m-0 py-2  text-dark">Skincare</Link>
                          </li>
                          <li className="m-0 py-1 ms-3">
                              <Link to="/categories/groceries" className="text-decoration-none m-0 py-2  text-dark">Groceries</Link>
                          </li>
                          <li className="m-0 py-1 ms-3">
                              <Link to="/categories/home-decoration" className="text-decoration-none m-0 py-2  text-dark">Home decoration</Link>
                          </li>
                        </div>
                    </li>
                    <li className="list-unstyled">
                      <Link to="" className="text-decoration-none text-dark p-2" >Term</Link>
                    </li>
                    <li className="list-unstyled">
                      <Link to="" className="text-decoration-none text-dark p-2" >About</Link>
                    </li>
                    <li className="list-unstyled">
                      <Link to="" className="text-decoration-none text-dark p-2" >Contact</Link>
                    </li>                    
                  </ul>
                  <div className="d-flex align-items-start align-items-md-center flex-column flex-md-row ">
                    <div className="d-flex icons align-items-center ">
                      <button className="text-dark px-2" onClick={()=>{

                        if (searchcollapser ===0) {
                          search.current.style = 'opacity:1;width:200px !important';
                          search.current.focus()
                          searchcollapser = 1
                        } else {
                          search.current.style = 'opacity:0;width:0px !important'
                          searchcollapser = 0
                          
                        }


                      }} style={{backgroundColor:'white'}}><IoSearchOutline/></button>
                      <Link className="text-dark px-2 text-decoration-none" to="/cart" ><span ><IoCartOutline  /></span> </Link>
                      </div>
                      <button style={{zIndex:'1000',backgroundColor:'white'}}  className="d-flex flex-column text-dark position-relative px-2 border-0 border" to=""> {!user? <Link to='/login' className="text-decoration-none text-dark " style={{fontSize:'25px'}}><LuUser2 /></Link>: <><button style={{fontSize:'16px',backgroundColor:'white'}} className="username-button border-0">{user1.userName} </button> <div className="logout-div position-absolute top-100 left-0 logout-btn ps-0 d-flex justify-content-start pt-3 " ><button style={{fontSize:'16px',zIndex:'2000'}} className="btn btn-danger  " onClick={()=>{localStorage.removeItem('user');navigate('/')}}  >Logout</button></div>  </> }</button>
                    <input onKeyUp={(e)=>{
                      if (e.key === 'Enter') {
                        navigate(`/search/${search.current.value}`)
                        
                      }
                    }} type="text" ref={search}  className=" ms-2 border border-1 border-dark rounded h-100 px-2 py-1 mt-1 search-field"  placeholder="Search"/>
                  </div>
                </div>
                <div className="d-md-none">
                <HiMiniBars3BottomLeft onClick={()=>{
                  if (collapser === 0 ) {
                    navcollapse.current.style = 'width:220px;box-shadow:5px 0px 10px rgba(0, 0, 0, 0.307) !important;left:0px;'
                    collapser =1
                  } else {
                    navcollapse.current.style = 'width:0px ;box-shadow:none !important;left:-220px;'
                    collapser = 0
                  }
                }}  style={{fontSize:'30px',cursor:'pointer'}}/>

                </div>
            </nav>
        </div>
        {/*---------------------  main navigation bar end ---------------------*/}


      </header>
    </>
  );
};

export default Header;
