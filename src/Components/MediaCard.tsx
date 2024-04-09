import React from 'react'
import { MediaDataType } from './DataType'
import like from '../Assets/like.svg'
import dislike from '../Assets/dislike.svg'
import shareIcon from '../Assets/share.svg'
import commentIcon from '../Assets/comments.svg'

const MediaCard = ({postId, reaction, submission, creator, comment}: MediaDataType) => {

  return (
    <div className='shadow-2xl h-5/6 flex gap-4 m-auto pr-5 rounded-2xl'>
        <div>
        <img className='w-80 h-full rounded-bl-2xl rounded-tl-2xl' src={submission.thumbnail} alt={postId} />
        <div className='flex justify-start items-center gap-3 relative bottom-20 ml-3'>
        <img className="w-10 h-10 rounded-full" src={creator.pic} alt="Rounded avatar"/>
        <h4 className='text-xl font-bold text-[#ffffff]'>@{creator.handle}</h4>
        </div>
        <div className='relative bottom-20 right-3'>
        <h4 className='text-xl font-bold text-[#ffffff]'>{submission.title + " " + "😂"}</h4>
        </div>
        </div>
        
        <div className='flex flex-col justify-center gap-10 h-30 m-auto border-2 border-red-500'>
        <div> <div className='bg-gray-100 p-3 rounded-full hover:cursor-pointer'><img className='w-8' src={like} alt={postId} /></div>
        <p><b>{reaction.count}</b></p>
        </div>
        <div> <div className='bg-gray-100 p-3 rounded-full hover:cursor-pointer'><img className='w-8' src={dislike} alt={postId} /></div><p><b>Dislike</b></p></div>
        <div > <div className='bg-gray-100 p-3 rounded-full hover:cursor-pointer'><img className='w-8' src={commentIcon} alt={postId} /></div><p><b>{comment.count}</b></p></div> 
        <div> <div className='bg-gray-100 p-3 rounded-full hover:cursor-pointer'><img className='w-8' src={shareIcon} alt={postId} /></div><p><b>Share</b></p></div>
        </div>
    </div>
  )
}

export default MediaCard