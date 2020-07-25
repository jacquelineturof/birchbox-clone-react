import React from 'react'

import Product from '../components/Product'

import useBestSellersFilter from '../hooks/useBestSellerFilter'

import classes from './BestSellers.module.css'

const BestSellers = () => {
    const bestSellerProducts = useBestSellersFilter()

    return (
        <div className = { classes.Container }>
            <h1 className = { classes.Heading }>Best Sellers</h1>
            <div className = { classes.ItemsContainer }>
                { 
                    bestSellerProducts.map(product => 
                        <Product 
                            key = { product.id } 
                            { ...product } /> )
                }
            </div>
        </div>
    )
}

export default BestSellers