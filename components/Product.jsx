import React from 'react'
import Link from 'next/link'
import { urlFor } from '../lib/client'

const Product = ({ product: {image, name, slug, price}}) => {
  return (
    <div>{price}</div>
  )
}

export default Product