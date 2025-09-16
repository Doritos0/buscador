import { Peliculas } from './components/Peliculas'
import { mappedPeliculas } from './guias/mapeo_peliculas'
import { useConsulta } from './guias/consulta'
import { useEffect, useState } from 'react'
import results from './guias/results.json'
import './App.css'

function App() {

  useEffect(()=>{

  },[])

  const [input, setInput] = useState('')

  const { busqueda, cargando, error, consultarPeliculas } = useConsulta()

  const buscarPelicula = (e) =>{
    e.preventDefault()
    console.log("esto llega al input: ",input)

    consultarPeliculas(input)
  }

  // ✅ Mostrar películas de la búsqueda o las predeterminadas
  const peliculasAMostrar = busqueda?.Search 
    ? mappedPeliculas(busqueda)  // Si hay búsqueda, usar esas
    : mappedPeliculas(results)   // Si no, usar las predeterminadas

  return (
    <>
      <h1>Technical Tests.</h1>
      <header>
        <form className='form' onSubmit={buscarPelicula}>
          <div className='buscador'>
            
          <input placeholder='Ingrese pelicula...' 
                type='text' 
                value={input} 
                onChange={e => setInput(e.target.value)} />
          <button 
              type='submit' 
              disabled={!input.trim() || cargando} // ✅ Deshabilitar durante carga
            >
              {cargando ? 'Buscando...' : 'Buscar'} {/* ✅ Texto dinámico */}
            </button>

          </div>
        </form>
        {/* ✅ Mostrar error si existe */}
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </header>
      <main>
        {/* ✅ Mostrar indicador de carga */}
        {cargando && <p>Cargando películas...</p>}
        
        {/* ✅ Mostrar películas (de búsqueda o predeterminadas) */}
        {!cargando && <Peliculas peliculas={peliculasAMostrar} />}
      </main>
    </>
  )
}

export default App
