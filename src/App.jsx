import { useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  
  const [attrici, setAttrici] = useState([])
  const url = ' https://lanciweb.github.io/demo/api/actresses/'


    function handleClick() {
      axios
      .get(url)
      .then(response=>
        setAttrici(response.data.results)
      )
    }


  return (
    <>
    <h1>Lista di attrici</h1>
    </>
  )
}

export default App
