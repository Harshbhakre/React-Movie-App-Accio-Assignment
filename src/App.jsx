import React from 'react'
import GenreFilter from './Componets/GenreFilter'
import MovieList from './Componets/MovieList.JSX'
import { Link, Route, Routes } from 'react-router-dom'

const App = () => {
   const movies = [ { title: 'The Shawshank Redemption', genre: 'Drama', year: 1994 }, { title: 'The Godfather', genre: 'Crime', year: 1972 }, { title: 'The Dark Knight', genre: 'Action', year: 2008 }, { title: '12 Angry Men', genre: 'Drama', year: 1957 }, { title: 'Schindlers List', genre: 'Drama', year: 1993 }, { title: 'The Lord of the Rings: The Return of the King', genre: 'Fantasy', year: 2003 }, { title: 'The Good, the Bad and the Ugly', genre: 'Western', year: 1966 }, { title: 'Forrest Gump', genre: 'Drama', year: 1994 }, { title: 'Inception', genre: 'Science Fiction', year: 2010 }, { title: 'The Matrix', genre: 'Science Fiction', year: 1999 }, { title: 'The Silence of the Lambs', genre: 'Thriller', year: 1991 }, { title: 'Saving Private Ryan', genre: 'War', year: 1998 }, { title: 'Jurassic Park', genre: 'Science Fiction', year: 1993 }, { title: 'Terminator 2: Judgment Day', genre: 'Science Fiction', year: 1991 }, { title: 'The Lion King', genre: 'Animation', year: 1994 } ];
  const genres = [ "Drama", "Crime", "Action", "Fantasy", "Western", "Science Fiction", "Thriller", "War", "Animation", ];
  
  return (
  <div className='h-screen w-full flex flex-col justify-center items-center overflow-hidden'>
    <h1 className='text-center text-xl font-bold'>Top 15 Movies of All Time</h1>
    <div className=' h-130 w-[50%] flex items-center flex-col'>
    <GenreFilter genreData={genres}/>
    <MovieList moviesData={movies}/>
    </div>

  </div>
  )
}

export default App
