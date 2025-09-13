import React from 'react'

const GenreFilter = ({genreData}) => {
  return (
    <div className='bg-[#f0f0f0] w-full h-max p-2 rounded-sm pb-4'>
      <h1 className='font-bold text-lg'>Filter by Genre</h1>
      <div className='flex justify-between items-center flex-wrap px-1'> 
      {genreData.map((ele,idx)=>(
        <button onClick={(e)=>{e.preventDefault()
          console.log("Filtering by "+ele)}} className='cursor-pointer text-[0.75rem] bg-[#d7d7d7] hover:bg-white duration-300 w-max rounded-sm py-1 px-2 hover:text-md' key={idx}>{ele}</button>
      ))}
      </div>
    </div>
  )
}

export default GenreFilter
