import React, { useEffect, useState } from 'react'
import MediaCard from './MediaCard'
import { MediaDataType } from './DataType'
import Pagination from './Pagination'

const Homepage = () => {

    const [data, setData] = useState<MediaDataType[]>([])
    const [page, setPage] = useState<number>(0)

    function fetchData(page: number){
        let response = fetch(`https://internship-service.onrender.com/videos?page=${page}`)
    response.then(function(res){
        return res.json()
    })
    .then(function(data){
        console.log(data);
        setData(data.data.posts);
    })
    }

    useEffect(()=> {
        fetchData(page)
    }, [page])

  return (
    <div className='mt-10'>
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