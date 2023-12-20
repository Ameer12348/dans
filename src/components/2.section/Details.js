import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Productdetails from './Productdetails'

const Details = () => {
    const [product,setProduct]  = useState('')
    const [userDetail,setUserDetail] = useState('')
    const user = localStorage.getItem('user');
    const user1 =   JSON.parse(user);
    const {id} = useParams()
    useEffect(()=>{
        fetch(`https://backendserver.cyclic.app/products/${id}`).then(res=>res.json()).then(result=>setProduct(result))
        fetch(`https://backendserver.cyclic.app/getuser/${user1.userName}`).then(res=>res.json()).then(result=>setUserDetail(result))
    },[])
  return (
    <>
    {
        product && userDetail ? <Productdetails userDetail={userDetail} productdetail={product} /> : <></>
    }
    </>
  )
}

export default Details