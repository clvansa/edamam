import React, {useEffect, useState} from 'react';
import Recipe from './Recipe'

import './App.css';

 

function App() {
  const APP_ID = "9bdb5069";
  const APP_KEY = "f33bca647b8ea050a46277162e1501b2";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('daily')

  useEffect(()=>{
    getRecipes()
  },[query])

  const getRecipes = async () =>{
    const response = await fetch (`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits)
  }
  

  const updateSearch = (e) =>{
    setSearch(e.target.value);
    console.log(search)
  }

  const getSearch = (e) =>{
    e.preventDefault();
    setQuery(search)
  }
  return (
    <div className="App">
      <form className='search-form' onSubmit={getSearch}>
        <input className='search-bar' type='text' value={search} onChange={updateSearch} />
        <button className='search-btn' type='submit'>Search</button>
      </form>
      <div className='recipes'>
      {recipes.map(recipe =>(
        <Recipe 
        title={recipe.recipe.label}
        calories={recipe.recipe.calories.toFixed(2)}
        image={recipe.recipe.image}
        ingredients={recipe.recipe.ingredients}
        digest={recipe.recipe.digest}

        />
      ))}

      </div>
    </div>
  );
}

export default App;
