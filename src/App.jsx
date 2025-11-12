import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  
  const [attrici, setAttrici] = useState([])
  const url = ' https://lanciweb.github.io/demo/api/actresses/'

  useEffect(ottenereAttrici, [])


    function ottenereAttrici() {
      axios
      .get(url)
      .then(response=> 
        setAttrici(response.data)   
      )
    }

  return (
    <>
    <h1>Lista di attrici</h1>

    <div className='row'>
    <ul className='list-unstyled'>
    {
      attrici.map(attrice => (
        <li key={attrice.id} className='col-6' >
          <img  src={attrice.image} className='width-100' alt={attrice.name} />
          <p>{attrice.name}</p>
          <p>{attrice.birth_year}</p>
          <p>{attrice.biography}</p>
          <p>{attrice.awards}</p>
        </li>
      ))
    }
    </ul>
    </div>
    </>
  )
}

export default App
