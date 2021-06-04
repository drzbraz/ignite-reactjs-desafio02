import React from 'react'
import { MovieCard } from './MovieCard'

interface MovieProps {
  movies: Array<{
    imdbID: number
    Title: string
    Poster: string
    Runtime: string
    Ratings: Array<{
      Source: string
      Value: string
    }>
  }>
  selectedGenre: {
    title: string
  }
}
export function Content(props: MovieProps) {
  return (
    <main>
      {console.log(`props.movies`, props.movies)}
      <div className="container">
        <header>
          <span className="category">
            Categoria:<span> {props.selectedGenre.title}</span>
          </span>
        </header>
        <div className="movies-list">
          {props.movies.map((movie) => (
            <MovieCard
              key={movie.imdbID}
              title={movie.Title}
              poster={movie.Poster}
              runtime={movie.Runtime}
              rating={movie.Ratings[0].Value}
            />
          ))}
        </div>
      </div>
    </main>
  )
}
