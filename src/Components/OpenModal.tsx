import React from 'react'
import { creatorDataType, submissionType } from './DataType'

const OpenModal = ({showModal, setShowModal, creator, submission, postId}: {showModal: boolean, postId: string, submission: submissionType, creator:creatorDataType, setShowModal: React.Dispatch<React.SetStateAction<boolean>>}) => {
  return (
    <div className={`${showModal ? 'fixed inset-0 z-50 flex items-center justify-center' : 'hidden'}`}>
      <div className="fixed inset-0 bg-black opacity-25"></div>
      <div className="relative w-auto flex max-w-3xl mx-auto my-6">

       <div>
       <video width="320" height="240" controls>
            <source src={submission.mediaUrl}/>
        </video>
       </div>

        <div className="relative flex flex-col w-full bg-white border-0  outline-none focus:outline-none">
          <div className="flex items-start justify-between p-5 border-b border-solid rounded-t">
            <div className='flex gap-4'>
            <img className="w-20 h-20 rounded-full" src={creator.pic} alt={creator.pic} />
            <div className='text-left flex flex-col	gap-1'>
            <h3 className="text-3xl font-semibold">{creator.name ? creator.name : 'Name Not Found'}</h3>
            <h3 className="text-xl text-[red]">@{creator.handle}</h3>
            </div>
            </div>
            <button
              className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
              onClick={()=> setShowModal(false)}
            >
              <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">×</span>
            </button>
          </div>
          
          <div className='w-11/12 m-auto text-left flex flex-col gap-2'>
          <h3 className="text-lg font-semibold"> {submission && submission.title}</h3>
          <p>{submission.description}</p>
          </div>

          <div className="flex items-center justify-end p-6 border-t border-solid rounded-b">
           
            <button
              className="bg-red-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
              type="button"
              style={{ transition: "all .15s ease" }}
              onClick={()=> setShowModal(false)}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default OpenModal