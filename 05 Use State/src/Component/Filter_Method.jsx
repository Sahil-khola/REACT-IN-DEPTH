import React from 'react'

const Filter_Method = () => {
    const product = [
        {
            id : 1,
            title : "I phone 16",
            price : 100000,
            category : "mobile"
        },
        {
            id : 2,
            title : "hp probook 16", 
            price : 200000,
            category : "laptop"
        },
        {
            id : 5,
            title:"mi tablet",
            price : 50000,
            category : "tablet"
        },
    
        {
            id : 3,
            title:"samsung tablet",
            price : 50000,
            category : "tablet"
        },   
        {
            id : 4,
            title:"Sony camera",    
            price : 100000,
            category : "camera"
        }
    ]
    const filter_product = product.filter((items)=>items.category == "tablet")
    console.log(filter_product);
  return (
    <div>
     {
         filter_product.map((data)=>(
            <div key={data.id}>
                <h3>{data.title}</h3>
                <h3>{data.price}</h3>
                <h4>{data.category}</h4>
            </div>
         ))
     }
    </div>
  )
}

export default Filter_Method;
