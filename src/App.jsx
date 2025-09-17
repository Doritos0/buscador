import { Peliculas } from './components/Peliculas'
import { mappedPeliculas } from './guias/mapeo_peliculas'
import { useConsulta } from './guias/consulta'
import { useEffect, useState } from 'react'
import results from './guias/results.json'
import './App.css'

function App() {

    const [peliculas, setPeliculas] = useState()

    const [error, setError] = useState(null)

    const [input, setInput] = useState('')


  const buscarPelicula = (e) =>{
      e.preventDefault()
      console.log({ input })
  }

  const handleChange = (e) =>{
        setInput(e.target.value)
  }

  useEffect(()=>{
      if (input == ''){
          setError('Debes ingresar una pelicula')
      }
      console.log('esto se renderiza cada que escribo')
  }, [input])


  return (
    <>
      <h1>Technical Tests.</h1>
      <header>
        <form className='form' onSubmit={buscarPelicula}>
          <div className='buscador'>
            
          <input
              required
              placeholder='Ingrese pelicula...'
              type='text'
              name='input'
              onChange={handleChange}
              value={input}
          />
          <button 
              type='submit'
            >
              Buscar
            </button>

          </div>
        </form>
      </header>
      <main>
          {/*
        {!cargando && <Peliculas peliculas={peliculasAMostrar} />}*/}
      </main>
    </>
  )
}

export default App
