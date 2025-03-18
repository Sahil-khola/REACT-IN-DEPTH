import React from 'react'

const Product = ({title,Brand,price,quantity}) => {
//    const [title,Brand,price,quantity] = props
// console.log(props);

  return (  
    <div>
      <h1> Mobile : {title}</h1>
      <h2>Mobile Brand :{Brand}</h2>
      <h2>Mobile Quantaty :{quantity}</h2>
      <h2>Mobile Price :{price}</h2>
    </div>
  )
}

export default Product
