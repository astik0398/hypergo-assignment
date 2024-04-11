import { useState } from 'react'
import { MediaDataType } from './DataType'
import like from '../Assets/like.svg'
import likewhite from '../Assets/likewhite.svg'
import dislike from '../Assets/dislike.svg'
import dislikewhite from '../Assets/dislikewhite.svg'
import shareIcon from '../Assets/share.svg'
import commentIcon from '../Assets/comments.svg'
import OpenModal from './OpenModal'

const MediaCard = ({postId, reaction, submission, creator, comment}: MediaDataType) => {

  const [showModal, setShowModal] = useState<boolean>(false)

  function handleImage(){
    setShowModal(true)
  }

  const [likeCount, setLikeCount] = useState<number>(() => {
    const storedCount = localStorage.getItem(`like_${postId}`);
    return storedCount ? parseInt(storedCount, 10) : reaction.count;
  });

   const [isLiked, setIsLiked] = useState<boolean>(() => {
    const storedLikeStatus = localStorage.getItem(`isLiked_${postId}`);
    return storedLikeStatus ? JSON.parse(storedLikeStatus) : false;
  })

  const [dislikeCount, setDislikeCount] = useState<number>(() => {
    const storedCount = localStorage.getItem(`dislike_${postId}`);
    return storedCount ? parseInt(storedCount, 10) : 0;
  });


  function handleDislikeCount() {

    if (dislikeCount > 0) {
      return;
    }

    const newCount = dislikeCount + 1;
    setDislikeCount(newCount);
    localStorage.setItem(`dislike_${postId}`, newCount.toString());
    setIsLiked(false);
    localStorage.setItem(`isLiked_${postId}`, 'false');
    if (isLiked) {
      const newLikeCount = likeCount - 1;
      setLikeCount(newLikeCount);
      localStorage.setItem(`like_${postId}`, newLikeCount.toString());
    }
  }
  
  function handleLikeCount(){
    if(!isLiked){
      const newCount = likeCount+1
      setLikeCount(newCount)
      localStorage.setItem(`like_${postId}`, newCount.toString())

      if(dislikeCount>0){
        const newDis = dislikeCount - 1
        setDislikeCount(newDis)
        localStorage.setItem(`dislike_${postId}`, newDis.toString());
      }
    }
    setIsLiked(true)
    localStorage.setItem(`isLiked_${postId}`, 'true');

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
        <div> <div onClick={handleLikeCount} className={`p-3 ${isLiked ? 'bg-black' : 'bg-gray-100'} ease-in duration-500 rounded-full hover:cursor-pointer`}><img className='w-8' src={isLiked ? likewhite : like} alt={postId} /></div>
        <p><b>{likeCount}</b></p>
        </div>
        <div> <div onClick={handleDislikeCount} className={`${dislikeCount == 0 ? 'bg-gray-100' : 'bg-black'} p-3 rounded-full hover:cursor-pointer`}><img className='w-8' src={dislikeCount == 0 ? dislike : dislikewhite} alt={postId} /></div><p><b>{dislikeCount}</b></p></div>
        <div > <div className='bg-gray-100 p-3 rounded-full hover:cursor-pointer'><img className='w-8' src={commentIcon} alt={postId} /></div><p><b>{comment.count}</b></p></div> 
        <div> <div className='bg-gray-100 p-3 rounded-full hover:cursor-pointer'><img className='w-8' src={shareIcon} alt={postId} /></div><p><b>Share</b></p></div>
        </div>

        {showModal ? <OpenModal postId={postId} creator={creator} submission={submission} setShowModal={setShowModal} showModal={showModal}/> : null}
    </div>
  )
}

export default MediaCard