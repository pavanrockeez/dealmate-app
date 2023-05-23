import React from 'react'
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import brand_logo from '../assets/img/puma_brand.svg';
import play_store from '../assets/img/play_store.svg';
import apple_store from '../assets/img/apple_store.svg';
const TopBrands = () => {
  const brands = [
    {
      id: 1,
      name: 'puma',
      image: brand_logo
    },
    {
      id: 2,
      name: 'puma',
      image: brand_logo
    },
    {
      id: 3,
      name: 'puma',
      image: brand_logo
    },
    {
      id: 4,
      name: 'puma',
      image: brand_logo
    },
    {
      id: 5,
      name: 'puma',
      image: brand_logo
    },
    {
      id: 6,
      name: 'puma',
      image: brand_logo
    },
    {
      id: 7,
      name: 'puma',
      image: brand_logo
    },
    {
      id: 8,
      name: 'puma',
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
    <div className='top_brands_view top_brands'>
      <div className='row'>
        <div className='col-lg-3'></div>
        <div className='col-lg-6 justify-content-center'>
          <div className='text-center top_brand_para'>
            <p>Explore by Brand</p>
            <h5>Top Brands Great deals Everyday</h5>
            <p className='some_text'>Lorem ipsum is placeholder
              text commonly used in the graphic
            </p>
          </div>
        </div>
        <div className='col-lg-3'></div>
      </div>
      <div className='row'>
        <div className='col-lg-2'></div>
        <div className='col-lg-8 owl-carosal'>
          <div className='top_brand_images'>
            <div>
              <OwlCarousel className="owl-theme" {...options}>
                {brands.map((item, index) => (
                  <div className="item" key={index}>
                    <img src={item.image} alt={`Image ${index + 1}`} width={'100px'} height={'100px'} />
                    <p className='text-center'>{item.name}</p>
                  </div>
                ))}
              </OwlCarousel>
            </div>
          </div>
        </div>
        <div className='col-lg-2'></div>
      </div>
      <div className='row justify-content-center text-center'>
        <div className='playstore_view'>
          <img src={play_store} alt="google_paly" style={{ marginRight: '20px' }} />
          <img src={apple_store} alt="aple_store" />
        </div>
      </div>

    </div>
  )
}

export default TopBrands