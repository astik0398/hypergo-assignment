import React, { useEffect, useState } from 'react'
import { MediaDataType } from './DataType'
import Loading from './Loading'
import MediaCard from './MediaCard'

const Trending = () => {

    const [data, setData] = useState<MediaDataType[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)

    function fetchData(){
        setIsLoading(true)
        let response = fetch(`https://internship-service.onrender.com/videos/?offset=0&limit=100`)
    response.then(function(res){
        return res.json()
    })
    .then(function(data){
        const sortedData = data.data.posts.sort((a: MediaDataType, b: MediaDataType)=> b.reaction.count - a.reaction.count)
        setData(sortedData);
        setIsLoading(false)
    })
    }

    useEffect(()=> {
        fetchData()
    }, [])

    
  return (
    isLoading ? <Loading/> : <div className='mt-20 mb-10'>

    <div >
    <h1 className="mb-8 mt-28 text-left ml-20  text-3xl font-bold text-gray-800">Top 15 Most<span className="text-transparent bg-clip-text bg-gradient-to-r to-yellow-400 from-red-400"> Liked Videos</span></h1>
    </div>

    <div className='grid grid-cols-3 gap-10 w-11/12 m-auto'>
        {data.map((item, index)=>  index < 15 && <MediaCard key={item.postId} {...item}/>)}
    </div>
    </div>
  )
}

export default Trending