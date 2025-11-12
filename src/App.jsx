import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  
  const [attrici, setAttrici] = useState([])
  const [attori, setAttori] = useState([])
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

    <div className=''>
    <ul className='list-unstyled row d-flex'>
    {
      attrici.map(attrice => (
        <li key={attrice.id} className='col-4 py-3' >
          <div className='card'>
            <div className='card-top'>
          <img  src={attrice.image} className='' alt={attrice.name} />
            </div>
            <div className='card-bottom'>
          <p><strong>Nome:</strong> {attrice.name}</p>
          <p>Anno di nascita: {attrice.birth_year}</p>
          <p>Biografia: {attrice.biography}</p>
          <p>Premi: {attrice.awards}</p>
            </div>
          </div>
        </li>
      ))
    }
    </ul>
    </div>
    </>
  )
}

export default App
