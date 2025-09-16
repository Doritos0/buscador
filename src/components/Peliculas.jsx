function ListPeliculas({ peliculas }) {
    return (
         <ul className="pelicula-list">
            {peliculas.map(pelicula => (
                <li key={pelicula.id} className="pelicula-item">
                    
                    <div className="info-container">
                        <h3>{pelicula.title}</h3>
                        <p>{pelicula.year}</p>
                    </div>
                    <div className="poster-container">
                        <img 
                            src={pelicula.poster !== "N/A" ? pelicula.poster : 'https://pngimg.com/uploads/question_mark/question_mark_PNG99.png'} 
                            alt={pelicula.title}
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

    return (
        tienePeliculas ? <ListPeliculas peliculas={peliculas} />
            : <SinResultados />
    )
}