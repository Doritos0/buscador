import { useState } from "react"

// Custom Hook
export function useConsulta() {
    const [busqueda, setBusqueda] = useState(()=>{
        const busquedaFromLocal = window.localStorage.getItem('busqueda')
        return busquedaFromLocal? JSON.parse(busquedaFromLocal) : null
    })
    const [cargando, setCargando] = useState(false)
    const [error, setError] = useState(null)

    const consultarPeliculas = async (input) => {
        if (!input.trim()) return
        
        setCargando(true)
        setError(null)
        
        try {
            const URL = `https://www.omdbapi.com/?apikey=4287ad07&type=movie&s=${input}`
            const response = await fetch(URL)
            const data = await response.json()
            
            setBusqueda(data)
            window.localStorage.setItem('busqueda', JSON.stringify(data))
        } catch (err) {
            setError('Error al buscar películas')
            console.error(err)
        } finally {
            setCargando(false)
        }
    }

    return { busqueda, cargando, error, consultarPeliculas }
}