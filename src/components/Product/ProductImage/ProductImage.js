import React from 'react'

const ProductImage = ({className, title, src}) => {
  return (
    <img
      className={className}
      alt={title}
      src={src} />
  )
}

export default ProductImage