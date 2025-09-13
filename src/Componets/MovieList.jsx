import React from 'react'

const MovieList = ({moviesData}) => {
  return (
    <div className='w-full mt-[1vw]'>
      <table className='w-full text-[0.75rem]'>
        <thead>

        <tr className='border-1 border-[#c1c1c1]'>
          <th className='w-1/2 start'>Title</th>
          <th className='start border-l-1 border-[#c1c1c1]'>Genre</th>
          <th className='start border-l-1 border-[#c1c1c1]'>Year</th>
        </tr>
        </thead>
        <tbody>
        {moviesData.map((ele,idx)=>(
          <tr key={idx} className='border-1 border-[#c1c1c1] h-6'>
          <td className='w-[60%] start'>{ele.title}</td>
          <td className='w-[20%] start border-l-1 border-[#c1c1c1]'>{ele.genre}</td>
          <td className='w-[20%] start border-l-1 border-[#c1c1c1]'>{ele.year}</td>
        </tr>
        ))}
        </tbody>
      </table>
    </div>
  )
}

export default MovieList
