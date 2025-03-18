import React from 'react'

const AndOperator = () => {
   let gmail_Id = true;
   let price = 100;
  return (
    <div>
      <div>{( gmail_Id) && <h2>You can open account in you tube</h2>}</div>
      <div>{price==100 && <h2>You can buy i phone</h2>}</div>
    </div>
  )
}

export default AndOperator;
