import React from 'react'
import { useHistory } from 'react-router-dom'

export default function Home () {
    const history = useHistory()

    return(
        <div>

          <h3>Welcome to Lambda Eats!</h3>
          <p>We are famously known to have the best pizza in all of the universe.</p>
          <p>Click below to place an order online or call us at 702-222-2222</p>
          <button onClick={()=> history.push('/pizzaform')}>Order Online</button>

        </div>
    )
} 