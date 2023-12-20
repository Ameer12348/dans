import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import './Products.scss'

const Category = () => {
    const [data, setData] = useState([]);
    let counter = 0;
    const [loader, setLoader] = useState(10);
    const param = useParams()
    console.log(param);
    useEffect(() => {
      fetch(`https://backendserver.cyclic.app/products/category/${param.category}`)
        .then((res) => res.json())
        .then((res) => setData(res));
    }, [loader,param.category]);
    
    return (
      <div className="container my-5" style={{minHeight:'50vh'}}>
      <div className="row row-cols-1 row-cols-sm-2 g-5 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
      {
        data.map(ele=>{
          const title = ele.title.length >=20 ? ele.title.slice(0,20) +'...':ele.title ;
          const price =  ele.discount ? Math.round((ele.price - ele.price*(ele.discount/100))*10)/10 : ele.price;
  
              if (counter < loader) {
              counter ++;
              return(
                <div className="  col p-2">
                <Link key={ele._id}  className="product-view product-card border border-1 p-2 text-decoration-none position-relative  d-flex flex-column align-items-center text-dark"  to={`/details/${ele._id}`}>

                <div className="product-image-div">
                <img src={ele.image} className="w-100 h-100 object-fit-contain"  alt={title}/>    
                </div>
                {ele.discount ?<span className="position-absolute discount-view rounded rounded-pill bg-warning bg-gradient text-dark">-{ele.discount}%</span>:<></>}
                <span style={{fontSize:'12px'}}>{ele.category} </span>
                <p style={{fontSize:'16px'}}>{title} </p>
                <h4 style={{fontSize:'16px'}}>{ele.discount ? <><del style={{fontSize:'12px'}}>${ele.price}</del> ${price}</>:<>${price}</>} </h4>
                </Link></div>
  
              )
                  
              } else {
  
                   return<></>
              }
          })
        
      }    
      </div>
      <div className="d-flex justify-content-center">
      {
          data.length > loader ? <button className="loader-btn fs-5 my-5 " onClick={()=>{setLoader(loader+10)}}>Load More</button>: <></>
      }
      </div>
      </div>
    );
}

export default Category