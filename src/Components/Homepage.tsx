import React, { useEffect, useState } from 'react'
import MediaCard from './MediaCard'
import { MediaDataType } from './DataType'
import Pagination from './Pagination'
import Loading from './Loading'

const Homepage = () => {

    const [data, setData] = useState<MediaDataType[]>([])
    const [page, setPage] = useState<number>(0)
    const [isLoading, setIsLoading] = useState(false)

    function fetchData(page: number){
        setIsLoading(true)
        let response = fetch(`https://internship-service.onrender.com/videos?page=${page}`)
    response.then(function(res){
        return res.json()
    })
    .then(function(data){
        setData(data.data.posts);
        setIsLoading(false)
    })
    }

    useEffect(()=> {
        fetchData(page)
    }, [page])

  return (
    isLoading ? <Loading/> : <div className='mt-10'>
    <div className='grid grid-cols-3 gap-5'>
        {data.map((item)=>  <MediaCard key={item.postId} {...item}/>)}
    </div>

    <div>
        <Pagination page={page} setPage={setPage}/>
    </div>
    </div>
  )
}

export default Homepage