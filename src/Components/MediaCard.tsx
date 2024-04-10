import { useState } from 'react'
import { MediaDataType } from './DataType'
import like from '../Assets/like.svg'
import dislike from '../Assets/dislike.svg'
import shareIcon from '../Assets/share.svg'
import commentIcon from '../Assets/comments.svg'
import OpenModal from './OpenModal'

const MediaCard = ({postId, reaction, submission, creator, comment}: MediaDataType) => {

  const [showModal, setShowModal] = useState<boolean>(false)

  function handleImage(){
    setShowModal(true)
  }

  return (
    <div className='shadow-2xl flex gap-5 m-auto pr-5 bg-white'>
        <div>
        <img onClick={handleImage} className='w-80 hover:cursor-pointer' src={submission.thumbnail} alt={postId} />
        <div className='flex gap-4 p-2 ml-2'>
        <div className='flex justify-start items-center gap-2 mt-2 text-red-500'>
        <img className="w-10 h-10 rounded-full" src={creator.pic} alt="Rounded avatar"/>
        </div>
        <div className='text-left'>
        <h4 className='text-xl font-bold text-[black] '>{submission.title}</h4>
        <h4 className='text-xl text-red-500'>@{creator.handle}</h4>
        </div>
        </div>
        </div>
        
        <div className='flex flex-col justify-center gap-10 h-30 m-auto'>
        <div> <div className='bg-gray-100 p-3 rounded-full hover:cursor-pointer'><img className='w-8' src={like} alt={postId} /></div>
        <p><b>{reaction.count}</b></p>
        </div>
        <div> <div className='bg-gray-100 p-3 rounded-full hover:cursor-pointer'><img className='w-8' src={dislike} alt={postId} /></div><p><b>Dislike</b></p></div>
        <div > <div className='bg-gray-100 p-3 rounded-full hover:cursor-pointer'><img className='w-8' src={commentIcon} alt={postId} /></div><p><b>{comment.count}</b></p></div> 
        <div> <div className='bg-gray-100 p-3 rounded-full hover:cursor-pointer'><img className='w-8' src={shareIcon} alt={postId} /></div><p><b>Share</b></p></div>
        </div>

        {showModal ? <OpenModal postId={postId} creator={creator} submission={submission} setShowModal={setShowModal} showModal={showModal}/> : null}
    </div>
  )
}

export default MediaCard