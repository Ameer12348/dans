import React, { useEffect, useState } from 'react'
import { AiOutlineDelete } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const Cart = () => {
    const [cart,setCart] = useState([null])
    const [message1,setMessage] = useState('')
    const user = localStorage.getItem('user')
    const user1 =   JSON.parse(user)
    let total1 = 0
    useEffect(()=>{
        fetch(`https://backendserver.cyclic.app/${user1.userName}`).then(res=>res.json()).then(res=>alert(res.cart))
        console.log(cart);
    },[cart])
    const navigate = useNavigate()
  return (
    <div style={{minHeight:'70vh'}} className='container p-1 my-5 '>
        {cart.length>0? <table className='table text-center  w-100'>
            <thead >
                <tr >
                    <th>
                        Products
                    </th>
                    <th>
                        Quantity
                    </th>
                    <th>
                        Total
                    </th>
                </tr>
            </thead>
            <tbody>
            {
                cart.map(ele=>{
                    if (ele !== null) {
                        
                        const title = ele.title.length >=15 ? ele.title.slice(0,15) +'..':ele.title ;
                        const price =  ele.discount ? Math.round((ele.price - ele.price*(ele.discount/100))*10)/10 : ele.price;
                        const total = Math.round(ele.quantity * price*100)/100
                        total1+= total
                            return <tr key={ele.id}>
                                        <td className='d-flex'>
                                            <img src={ele.image} style={{width:'80px',height:'80px',objectFit:"contain"}} alt="" />
                                            <div className='ms-2 d-flex flex-column align-items-start'>
                                                <span>{title} </span>
                                                <span><del>${ele.price}</del>  <strong>Price:</strong> ${price} </span>
                                                <button style={{fontSize:'20px'}} className='border border text-danger' onClick={()=>{
                                                    const filtercart = cart.filter(elem=> ele._id !== elem._id)
                                                    fetch(`https://backendserver.cyclic.app/edituser/${user1.userName}`,{
                                                        method:'PUT',
                                                        body: JSON.stringify({cart:filtercart}),
                                                        headers: {'Content-Type': 'application/json'}
                                                    }).then(res=>res.json()).then(res=>{
                                                        if (res.message === 'updated') {
                                                            setMessage('item deleted successfully')  
                                                            toast('item deleted successfully', {
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
                                                    fetch(`https://backendserver.cyclic.app/getuser/${user1.userName}`).then(res=>res.json()).then(res=>setCart(res.cart))
                                                }}><AiOutlineDelete /></button>
                                                
                                            </div>
                                        </td>
                                        <td>
                                            {ele.quantity}
                                        </td>
                                        <td>
                                            ${total}
                                        </td>
                                    </tr>
                    }
                    
                })
            }
            </tbody>
            <tfoot>
            <tr>
            <th></th>
            <th></th>
            <th>${Math.round(total1*10)/10} </th>
            </tr>
            </tfoot>
        </table>:<h1 className='text-center m-5'>Your Cart is Empty</h1>}
        <ToastContainer/>

    
    </div>
  )
}

export default Cart