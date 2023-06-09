'use client'
import React, {useState} from 'react'
import {PaperAirplaneIcon} from '@heroicons/react/24/solid'
import {useSession} from 'next-auth/react'
import {serverTimestamp, addDoc, collection} from 'firebase/firestore'
import { db } from '../firebase'
// import { Message } from '../typings'
import {toast} from 'react-hot-toast'
import ModelSelection from './ModelSelection'
import useSWR from 'swr'

type Props = {
    chatId: string
}
function ChatInput({chatId}: Props) {
    const [prompt, setPrompt] = useState("")
    const {data: session} = useSession()

    const {data: model} = useSWR('model', {
        fallbackData: 'text-davinci-003'
    })

    const sendMessage = async (e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault()
        if (!prompt) return
        const input = prompt.trim()
        const message: Message = {
            text: input,
            createdAt: serverTimestamp(),
            user: {
                _id: session?.user?.email!,
                name: session?.user?.name!,
                avatar: session?.user?.image! || `https://ui-avatars.com/api/?name=${session?.user?.name}`
            }
        }
        await addDoc(collection(db, 'users', session?.user?.email!, 'chats', chatId, 'messages'),
                message
        )
        const notification = toast.loading('ChatGPT is generating...')
        setPrompt("")
        await fetch('/api/askQuestion', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                prompt: input, chatId, model, session
            })
        }).then(()=>{
            toast.success('ChatGPT has responded!', {
                id: notification,
            })
        })
    }

  return (
    <div className='bg-zinc-500 text-zinc-100 mb-4 mx-4 rounded-lg text-sm'>
        <form onSubmit={sendMessage} className='p-5 space-x-5 flex'>
            <input type="text" 
                disabled={!session}
                placeholder='Type something...'
                value={prompt}
                onChange={(e)=> setPrompt(e.target.value)}
                className='bg-transparent placeholder:text-zinc-400 text-md focus:outline-none flex-1 disabled:cursor-not-allowed disabled:text-zinc-900'
            />
            <button type="submit" disabled={!prompt || !session}>
                <PaperAirplaneIcon className='h-6 w-6 -rotate-45 cursor-pointer hover:text-zinc-800 transition-all duration-200 ease-out disabled:cursor-not-allowed disabled:text-zinc-800' />
            </button>
        </form>
        <div className='md:hidden'>
            <ModelSelection />
        </div>
    </div>
  )
}

export default ChatInput