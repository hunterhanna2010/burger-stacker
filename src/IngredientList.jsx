import React from 'react';

const IngredientList = props => {
    var mappedIngredients = props.allIngredients.map((ingredient, id) => 
        <li key={id}>{ingredient.name} <button name={ingredient.name} onClick={(e) => props.onClick(e, id)}>></button></li>)
    return(
        <div className="ingredientList">
            <ul>
                {mappedIngredients}
            </ul>
        </div>
    )
}


export default IngredientList;