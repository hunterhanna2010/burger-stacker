import React from 'react';

const BurgerPane = props => {
    let currentBurger = props.burger.map((burgerIngredient, id) => 
    <li key={id}> {burgerIngredient.name} </li>)
        return (
            <div className="BurgerPane">
                <ul>
                <span>BURGERS TO GO</span>
                    {currentBurger}
                    <hr></hr>
                </ul>
            
            
            <button type="reset" onClick={props.clearBurger}>Make a new Burger</button>
            </div>
        )
    }



export default BurgerPane;