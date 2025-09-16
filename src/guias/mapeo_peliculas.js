export function mappedPeliculas(peliculas) {
    return peliculas?.Search?.map(pelicula => ({
        id: pelicula.imdbID,
        title: pelicula.Title,
        year: pelicula.Year,
        poster: pelicula.Poster
    }))
}
