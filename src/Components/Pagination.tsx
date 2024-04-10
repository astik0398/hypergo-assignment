import React from 'react'

const Pagination = ({page, setPage} : { page: number, setPage: React.Dispatch<React.SetStateAction<number>>}) => {

    function handlePrevPage(){
        setPage(prev=> prev-1)
    }

    function handleNextPage(){
        setPage(prev=> prev+1)
    }

  return (
    <div className='flex justify-center items-center gap-5 mb-5'>
        <div className='mt-2'>
        <button disabled={page < 1} onClick={handlePrevPage} type="button" className="shadow-2xl text-red-500 bg-white hover:scale-105	 hover:cursor-pointer font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">PREV</button>
        </div>
        <circle className="text-[red] shadow-2xl fill-current bg-white p-3 pl-5 pr-5 rounded-full" ><p><b></b>{page > 8 ? page+1 : `0${page+ 1}`}</p></circle>  
        <div className='mt-2'>
        <button disabled={page > 8} onClick={handleNextPage} type="button" className="shadow-2xl text-red-500 bg-white hover:scale-105	 hover:cursor-pointer font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">NEXT</button>
        </div>
    </div>
  )
}

export default Pagination