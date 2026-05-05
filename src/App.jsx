import { useEffect, useState } from 'react'
import RandomCat from './Components/RandomCat.jsx'
import './App.css'

function App() {
  const [randomCat, setRandomCat] = useState(null)
  const [num, setNum] = useState(0)
  // useEffect(() => {
  //   fetch(`https://api.freeapi.app/api/v1/public/cats/cat/random`)
  //     .then(response => response.json())
  //     .then(data => {
  //       setRandomCat(data)
  //     })
  //   console.log('useEffect called')
  // }, [num]) 
  useEffect(() => {
    fetch(`https://api.freeapi.app/api/v1/public/cats/cat/random`)
      .then((res) => res.json())
      .then((result) => {
        // console.log("",result.data);
        setRandomCat(result.data);
        
      })
      .catch((err) => console.log(err));
  }, [num]);
  return (
    <>
    <h1>Random Cat</h1>
      <RandomCat 

        name={randomCat?.name}
        description={randomCat?.description}
        image={randomCat?.image}
        url={randomCat?.wikipedia_url}
      />
      <button onClick={() => setNum((Math.random() * 100) + 1)}>Get New Cat</button>  
      
    </>
  )
}

export default App
