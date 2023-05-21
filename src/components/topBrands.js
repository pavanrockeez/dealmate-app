import React from 'react'
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import brand_logo from '../assets/img/puma_brand.svg';
const TopBrands = () => {
  const brands = [
    {
      id:1,
      name:'puma',
      image: brand_logo
    },
    {
      id:2,
      name:'puma',
      image: brand_logo
    },
    {
      id:3,
      name:'puma',
      image: brand_logo
    },
    {
      id:4,
      name:'puma',
      image: brand_logo
    },
    {
      id:5,
      name:'puma',
      image: brand_logo
    },
    {
      id:6,
      name:'puma',
      image: brand_logo
    },
    {
      id:7,
      name:'puma',
      image: brand_logo
    },
    {
      id:8,
      name:'puma',
      image: brand_logo
    },
  ]
  const options = {
    loop: true,
    margin: 10,
    dots: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      },
      1000: {
        items: 5
      }
    },
  };
  return (
    <div className='topbrands_text'>
      <div className='col-lg-12'>
        <div>
          <p>Explore by Brand</p>
          <h5>Top Brands</h5>
          <h5>Great deals Everyday</h5>
          <p className='some_text'>Lorem ipsum is placeholder
            text commonly used in the graphic
          </p>
        </div>
        <div className='col-lg-2'></div>
        <div className='container col-lg-8 owl-carosal'>
          <div>
            <OwlCarousel className="owl-theme" {...options}>
              {brands.map((item, index) => (
                <div className="item" key={index}>
                  <img src={item.image} alt={`Image ${index + 1}`} width={'100px'} height={'100px'} />
                  <p>{item.name}</p>
                </div>
              ))}
            </OwlCarousel>
          </div>
        </div>
        <div className='col-lg-2'></div>

      </div>
    </div>
  )
}

export default TopBrands