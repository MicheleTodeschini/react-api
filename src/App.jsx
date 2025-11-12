import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  
  const [attrici, setAttrici] = useState([])
  const [attori, setAttori] = useState([])
  const url = ' https://lanciweb.github.io/demo/api/actresses/'
  const urlAttori = '  https://lanciweb.github.io/demo/api/actors/'

  useEffect(ottenereAttrici, [])
  useEffect(ottenereAttori, [])


    function ottenereAttrici() {
      axios
      .get(url)
      .then(response=> 
        setAttrici(response.data)   
      )
    }

    function ottenereAttori() {
      axios 
      .get(urlAttori)
      .then(response=>
        setAttori(response.data)
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
          <p><strong>Anno di nascita:</strong> {attrice.birth_year}</p>
          <p><strong>Biografia: </strong>{attrice.biography}</p>
          <p><strong>Premi: </strong>{attrice.awards}</p>
            </div>
          </div>
        </li>
      ))
    }
    </ul>
    </div>
    <h1>Lista di attori</h1>
        <div className=''>
    <ul className='list-unstyled row d-flex'>
    
        {
      attori.map(attore => (
        <li key={attore.id} className='col-4 py-3' >
          <div className='card'>
            <div className='card-top'>
          <img  src={attore.image} className='' alt={attore.name} />
            </div>
            <div className='card-bottom'>
          <p><strong>Nome:</strong> {attore.name}</p>
          <p>Anno di nascita: {attore.birth_year}</p>
          <p>Biografia: {attore.biography}</p>
          <p>Premi: {attore.awards}</p>
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
