function ListPeliculas({ peliculas }) {
    return (
         <ul className="pelicula-list">
            {peliculas.map(pelicula => (
                <li key={pelicula.imdbID} className="pelicula-item">
                    
                    <div className="info-container">
                        <h3>{pelicula.Title}</h3>
                        <p>{pelicula.Year}</p>
                    </div>
                    <div className="poster-container">
                        <img 
                            src={pelicula.Poster !== "N/A" ? pelicula.Poster : 'https://pngimg.com/uploads/question_mark/question_mark_PNG99.png'} 
                            alt={pelicula.Title}
                            onError={(e) => {
                                e.target.src = 'https://pngimg.com/uploads/question_mark/question_mark_PNG99.png';
                            }}
                        />
                    </div>
                </li>
            ))}
        </ul>
    )
}

function SinResultados() {
    return (
        <p>No se encontraron peliculas.</p>
    )
}

export function Peliculas({ peliculas }) {

    const tienePeliculas = peliculas?.length > 0

    console.log("HAY PELICULAS")

    return (
        tienePeliculas ? <ListPeliculas peliculas={peliculas} />
            : <SinResultados />
    )
}