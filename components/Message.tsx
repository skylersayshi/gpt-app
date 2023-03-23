import React from 'react'
import { DocumentData } from 'firebase/firestore'
type Props = {
    message: DocumentData
}
function Message({message}: Props) {
    const isChatGPT = message.user.name === "ChatGPT"
  return (
    <div className={`py-5 text-zinc-100 ${isChatGPT && "bg-[#202023]"}`}>
        <div className='flex space-x-5 px-10 max-w-3xl mx-auto'>
            <img src={message.user.avatar} alt="" className="h-8 w-8 rounded-lg" />
            <p className='pt-1 text-sm'>{message.text}</p>
        </div>
    </div>
  )
}

export default Message