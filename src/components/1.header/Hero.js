import { useEffect } from 'react'
import './Hero.scss'
import glide from '@glidejs/glide'

const Hero = () => {
useEffect(()=>{
  new glide('.glide',{
    gap:0,
    perView:1,
    autoplay:3000,
    animationDuration:1000,
    animationTimingFunc:'linear',
    hoverpause:false

  },[]).mount()
})
  
  return (
<div classname="container">
  <div className="hero">
    <div className="glide" id="glide_1">
      <div className="glide__track" data-glide-el="track">
        <ul className="glide__slides">
          <li className="glide__slide">
            <div className="center">
              <div className="left">
                <span className>New Inspiration 2020</span>
                <h1 className>NEW COLLECTION!</h1>
                <p>Trending from men's and women's  style collection</p>
              </div>
              <div className="right">
              </div>
            </div>
          </li>
          <li className="glide__slide">
            <div className="center">
              <div className="left">
                <span>New Inspiration 2020</span>
                <h1>THE PERFECT MATCH!</h1>
                <p>Trending from men's and women's  style collection</p>
              </div>
              <div className="right">
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>

  )
}

export default Hero
