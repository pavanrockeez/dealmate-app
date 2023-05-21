import React from 'react'
import puma_brand from '../assets/img/puma_brand.svg'
import dealmate_icon from '../assets/img/dealmate_icon.svg';
import OwlCarousel from "react-owl-carousel";
import '../assets/css/styles.scss'
const Products = () => {
    const products = [
        {
            id: 1,
            src: dealmate_icon,
            brandLogo: puma_brand,
            rating: 4.4,
            viewers: 275,
            mrp: 300,
            offer: 50,
            percentage: '60 %'
        },
        {
            id: 2,
            src: dealmate_icon,
            brandLogo: puma_brand,
            rating: 4.4,
            viewers: 275,
            mrp: 300,
            offer: 50,
            percentage: '60 %'
        },
        {
            id: 3,
            src: dealmate_icon,
            brandLogo: puma_brand,
            rating: 4.4,
            viewers: 275,
            mrp: 300,
            offer: 50,
            percentage: '60 %'
        },
        {
            id: 4,
            src: dealmate_icon,
            brandLogo: puma_brand,
            rating: 4.4,
            viewers: 275,
            mrp: 300,
            offer: 50,
            percentage: '60 %'
        }

    ]
    return (
        <div className='top_builders'>
        </div>
    )
}

export default Products