import results from './guias/results.json'
import { Peliculas } from './components/Peliculas'
import './App.css'

function App() {

  const peliculas = results.Search

  console.log("LISTA DE PELICULAS", peliculas)

  return (
    <>
      <h1>Technical Tests.</h1>
      <header>
        <form className='form'>
          <div className='buscador'>
            
          <input placeholder='Ingrese pelicula...'/>
          <button type='submit'>Buscar</button>

          </div>
        </form>
      </header>
      <main>
        {
          peliculas && (
            <Peliculas peliculas={peliculas} />
          )
        }
      </main>
    </>
  )
}

export default App
