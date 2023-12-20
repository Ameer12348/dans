import React, { useState } from 'react'
import  './Productdetails.scss'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const Productdetails = ({productdetail,userDetail}) => {
    const user = localStorage.getItem('user')
    const user1 =   JSON.parse(user)
    const price =  productdetail.discount ? Math.round((productdetail.price - productdetail.price*(productdetail.discount/100))*10)/10 : productdetail.price;
    const [quantity, setQuantity] = useState(0)
  return (
    <div className='container'>
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
                    <button className='btn  btn-success mx-3' onClick={()=>{
                        if (quantity>0) {
                            
                            fetch(`https://backendserver.cyclic.app/edituser/${user1.userName}`,{
                                method:'PUT',
                                body: JSON.stringify({cart:[...userDetail.cart,{quantity:quantity,...productdetail}]}),
                                headers: {'Content-Type': 'application/json'}
                            }).then(res=>res.json()).then(res=>{
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
                <h5 className='mt-5'>{productdetail.title} </h5>
                <p>{productdetail.description} </p>
            </div>
        </div>
        <ToastContainer/>
    </div>

  )
}

export default Productdetails