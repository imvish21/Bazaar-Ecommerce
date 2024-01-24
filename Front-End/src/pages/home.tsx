import React from 'react'
import { Link } from 'react-router-dom'
import ProductCard from '../components/product-card'

function Home() {
  const addToCartHandler=()=>{

  }
  return (
    <div className="home">
      <section></section>
      <h1>Latest Product 
        <Link to="/search" className="findmore">
          More
        </Link>
      </h1>
      <main>
        <ProductCard productId='abcd' name='Macbook'
        price={4545}
        stock={435}
        handler={addToCartHandler}
        photo='https://m.media-amazon.com/images/I/31ilq3hPhEL._SY445_SX342_QL70_FMwebp_.jpg'
        />
      </main>
    </div>
  )
}

export default Home
