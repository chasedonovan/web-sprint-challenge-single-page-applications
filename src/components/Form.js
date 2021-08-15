import React from 'react'


export default function Form(props){

    const{name, size, pepperoni, sausage, mushroom, onion, instructions, handleChange, handleSubmit, disabled } = props

    return(
        <form onSubmit={handleSubmit}>
            <label>
                Your Name:
                <input 
                id='name' 
                name='name' 
                value={name} 
                onChange={handleChange}/>
            </label>
            <br/>
            <label>
                Pizza Size:
                <select name='size' value={size} onChange={handleChange}>
                  <option value=''>Pick a Size</option>
                    <option value='Small'>Small</option>
                    <option value='Medium'>Medium</option>
                    <option value='Large'>Large</option>
                </select>
            </label>
            <div>
                <h4>Desired Toppings</h4>
                <ul> 
                <li>
                    Pepperoni
                    <input 
                    id='pepperoni' 
                    name='pepperoni' 
                    type='checkbox' 
                    checked={pepperoni} 
                    onChange={handleChange}/>
                </li>
                <li>
                    Sausage
                    <input 
                    id='sausage' 
                    name='sausage' 
                    type='checkbox'
                    checked={sausage} 
                    onChange={handleChange}/>
                </li>
                <li>
                    Mushroom
                    <input
                      id='mushroom'
                      name='mushroom'
                      type='checkbox'
                      checked={mushroom}
                      onChange={handleChange}/>
                </li>
                <li>
                    Onion
                    <input
                      id='onion'
                      name='onion'
                      type='checkbox'
                      checked={onion} 
                      onChange={handleChange}/>
                </li>     
                </ul>
            </div>
            <br />
              <div>
                <h4>Special Instructions</h4>
                <input 
                  id='instructions' 
                  name='instructions' 
                  type='textbox' 
                  size='30'
                  placeholder="Anything else you'd like to add?"
                  value={instructions} 
                  onChange={handleChange}/>
              </div>
            <br />

            <button id='submitButton' disabled={disabled} type='submit'>Place Order</button>
        </form>
    )
} 