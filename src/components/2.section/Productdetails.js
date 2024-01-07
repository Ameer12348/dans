import React, { useRef, useState } from 'react'
import  './Productdetails.scss'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from 'react-helmet';

const Productdetails = ({productdetail,userDetail}) => {
    const cartbtn = useRef()
    const user = localStorage.getItem('user')
    const user1 =   JSON.parse(user)
    const price =  productdetail.discount ? Math.round((productdetail.price - productdetail.price*(productdetail.discount/100))*10)/10 : productdetail.price;
    const [quantity, setQuantity] = useState(0)
    const rating = Math.round(productdetail.rating.rate*10)/10
    const ratingloader = Math.floor(productdetail.rating.rate)
        const rateloop = [0,1,2,3,4]
        let ratecounter = 0
  return (
    <div className='container'>
    <Helmet>
    <meta name='description' content={productdetail.description}/>
    <title> Dans {productdetail.title} </title>
    </Helmet>
        <div className="row mt-5">
            <div className='col-sm-4 position-relative' >
                <img  src={productdetail.image}  className='w-100  img-detail' alt="" />
                {productdetail.discount ?<span className="position-absolute discount-view rounded rounded-pill bg-warning bg-gradient text-dark">-{productdetail.discount}%</span>:<></>}
            </div>
            <div className='col-sm-8'>
                <h4 style={{fontWeight:'600'}}>{productdetail.category} </h4>

                <h3 className='my-5' >{productdetail.discount ? <><del style={{fontSize:'12px'}}>${productdetail.price}</del> ${price}</>:<>${price}</>}  </h3>
                <div className='d-flex'> 
                    <div class="btn-group" role="group" aria-label="Basic outlined example">
                        <button type="button" class="btn btn-outline-success" onClick={()=>{quantity>0?setQuantity(quantity-1):setQuantity(quantity)}}>-</button>
                        <button type="button" class="btn  border border-1 border-success" style={{cursor:'default'}} >{quantity}</button>

                        <button type="button" class="btn btn-outline-success" onClick={()=>{quantity<9?setQuantity(quantity+1):setQuantity(quantity)}}>+</button>
                    </div>
                    <button ref={cartbtn} className='btn  btn-success mx-3 ' onClick={()=>{
                        if (quantity>0) {
                            cartbtn.current.innerHTML = '<div id="cart-loader" ></div>'
                            
                            fetch(`https://backend-ten-mocha.vercel.app/edituser/${user1.userName}`,{
                                method:'PUT',
                                body: JSON.stringify({cart:[...userDetail.cart,{quantity:quantity,...productdetail}]}),
                                headers: {'Content-Type': 'application/json'}
                            }).then(res=>res.json()).then(res=>{
                            cartbtn.current.innerHTML = 'Add to Cart'
                                if (res.message === 'updated') {
                                    toast('item added to cart successfully', {
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
                                else{
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
                                }

                            })
                            
                        }
                    }}>Add to Cart</button>
                </div>
                <p className='mt-5' style={{fontSize:'13px'}}><span>{rating}</span> {
                    rateloop.map(ele=>{
                      if (ratecounter < ratingloader) {
                        
                        ratecounter++
                        return <i key={ele} className="fa-solid fa-star" style={{backgroundColor:'yellow'}}> </i>
                      }else{
                        return <i className="fa-solid fa-star"> </i>
  
                      }
                    })
                  }<span>({productdetail.rating.count})</span></p>
                <h5 >{productdetail.title} </h5>
                <p>{productdetail.description} </p>
            </div>
        </div>
        <ToastContainer/>
    </div>

  )
}

export default Productdetails