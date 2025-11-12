import { useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  
  const [attrici, setAttrici] = useState([])
  const url = ' https://lanciweb.github.io/demo/api/actresses/'

  useState(handleClick, [])


    function handleClick() {
      axios
      .get(url)
      .then(response=> 
        setAttrici(response.data)   //se mettessi .data.response mi si rompe  
      )
    }

  return (
    <>
    <h1>Lista di attrici</h1>

    <ul className='list-unstyled'>
    {
      attrici.map(attrice => (
        <li key={attrice.id}>
          <img  src={attrice.image} />
        </li>
      ))
    }
    </ul>
    </>
  )
}

export default App
