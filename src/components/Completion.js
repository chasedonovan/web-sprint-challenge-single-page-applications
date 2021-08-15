import React from 'react'

export default function Completion (props) {
    const { pizza } = props

    return (
    <div className="review">
        <h2>Review Your Order</h2>
        {pizza.map(myPizza => {
            return(
                <div key= {myPizza.id}>
                    <h4> Name:</h4> 
                      <p> {myPizza.name} </p>
                    <h4>Size:</h4> 
                      <p> {myPizza.size} </p>
                    <h4>Desired Toppings:</h4>
                      {myPizza.pepperoni && <p>Pepperoni</p>}
                      {myPizza.sausage && <p>Sausage</p>}
                      {myPizza.peppers && <p>Peppers</p>}
                      {myPizza.onion && <p>Onion</p>}
                    <h4>Special Instructions:</h4>
                      <p>{myPizza.instructions}</p>
                      <br/>
                      <br/>
                </div>
            )
        })}
    </div>
    )
} 