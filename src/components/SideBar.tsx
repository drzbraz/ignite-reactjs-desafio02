import React, { useContext } from 'react'
import { MoviesContext } from '../context/MoviesContext'
import { Button } from './Button'

export function SideBar() {
  const {selectedGenreId, genres, setSelectedGenreId } = useContext(MoviesContext) 
  return (
  
   <nav className="sidebar">
        <span>Watch<p>Me</p></span>
        
        <div className="buttons-container">
        {genres.map(genre => (
          <Button
          key={String(genre.id)}
          title={genre.title}
          iconName={genre.name}
          onClick={() => setSelectedGenreId(genre.id)}
          selected={selectedGenreId === genre.id}
          />
          ))}
          </div>
          
      </nav> )
}