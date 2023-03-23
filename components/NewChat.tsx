import { PlusIcon } from '@heroicons/react/24/solid'
import React from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { db } from '../firebase'

type Props = {
  id: string;
}

function NewChat() {
  const router = useRouter()
  const {data: session} = useSession()
  
  const createNewChat = async() => {
    const doc = await addDoc(collection(db, "users", session?.user?.email!, 'chats'), 
    {
      userId: session?.user?.email!,
      createAt: serverTimestamp()
    })
    router.push(`/chat/${doc.id}`)
  }
  return (
    <div onClick={createNewChat} className='bg-zinc-400 text-zinc-700 mb-4 border text-lg border-zinc-100 chatRow hover:scale-95'>
        <PlusIcon className='h-4 w-4'/>
        <p className='hidden sm:block'>New Chat</p>
    </div>
  )
}

export default NewChat