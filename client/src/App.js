
import './App.css';
import { useState } from 'react'
import BasicCard from './components/card';
const req = require('axios');
function App() {


  const [recipe_name, setRecipeName] = useState('')
  const [data, setData] = useState({})
  const fun = (event) => {
    setRecipeName(event.target.value);
    
  }

  const handleSubmit = () => {
    req.get('http://127.0.0.1:5000/recipe/' + recipe_name).then((response) => {
        setData(response.data);
        
    })
  }

  return (
    <div className="App">
      <header className="App-header">

        <h1>Food Recipe</h1>
        <input type="text" onChange={fun} value={recipe_name} name='recipe_name' placeholder='Enter Recipe Name' /><br></br><br></br><br></br>
        <button className="button-29" role="button" type='submit' value={"submit"} onClick={() => {handleSubmit()}} >submit</button>
      </header>
      <br></br><br></br>
      { Object.keys(data).length > 0 && <BasicCard key={data.totalResults} recipeDetails={data}/>}
    </div>


  );
}

export default App;
