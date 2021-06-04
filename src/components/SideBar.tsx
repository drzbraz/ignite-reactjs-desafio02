import React, { useEffect, useState } from 'react'
import { Button } from './Button'

interface GenreProps {
  genres: Array<{
    id: number
    title: string
    name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family'
  }>
  selectedGenreId: number
}

export function SideBar(props: GenreProps) {
  return (
    <nav className="sidebar">
      <nav className="sidebar">
        <span>
          Watch<p>Me</p>
        </span>

        {props.genres.map((genre) => {
          return (
            <div className="buttons-container">
              <Button
                key={String(genre.id)}
                title={genre.title}
                iconName={genre.name}
                selected={props.selectedGenreId === genre.id}
              />
            </div>
          )
        })}
      </nav>
    </nav>
  )
}
