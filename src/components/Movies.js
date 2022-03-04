import React from "react";
import { movies } from "../data";

function Movies() {

  const movieDivs = movies.map(movie => {
    return (
      <div key={movie.title}>
        <h2>{movie.title}</h2>
        <p>{movie.time}</p>
        <ul>
          {movie.genres.map(genre => <li key={`${movie.title}-${genre}`}>{genre}</li>)}
        </ul>
      </div>
    )
  })

  return (
    <div>
      <h1>Movies Page</h1>
      {movieDivs}
    </div>
  )
}

export default Movies;
