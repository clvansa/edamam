import React from 'react';
import './recipe.css';


const Recipe = ({title,calories,image,ingredients,digest}) => {
    const tables = document.querySelectorAll('table');
    for(let i = 0; i < tables.length; i++) {
        console.log(tables[i])
    }
    function btnClick(e) {
        e.target.nextElementSibling.classList.toggle('table-active');
    }
    
 
    return (
        <div className='recipe'>
            <h1> {title}</h1>
            <p>Calories : {calories}</p>
            <ol>
                {ingredients.map(ingredient =>(
                    <li>{ingredient.text}</li>
                ))}
            </ol>
           
            <a onClick={btnClick}>More Information</a>  
               
            <table className='table' >
                <tr>
                    <th>Kind</th> 
                    <th>Total</th> 
                    <th>Dilay</th> 
                </tr>
                {digest.map(diges =>(
                    <tr>
                    <th>{diges.label} </th><td>{diges.total.toFixed(2)} <span className='unit'>{diges.unit}</span> </td><td>{diges.daily.toFixed(2)} <span className='unit'>{diges.unit}</span></td></tr>
                ))}
               
            </table>


            <img className='image' src={image} />
           
        </div>
    )
}


export default Recipe;