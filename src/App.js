import React, {useEffect, useState} from 'react';
import './App.css';

function App() {

  const APP_ID = '7378c10c';
  const APP_KEY = '8fbe26a82da90900f62afe482714ad9b';

  useEffect(() => {
    getRecipes();
  }, [])

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    console.log(data);
  }

  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text" />
        <button className="search-button">Search</button>
      </form>
    </div>
  );
}

export default App;
