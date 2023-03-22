'use client'

import React from 'react'
import NewChat from './NewChat'
import { signOut, useSession } from 'next-auth/react'
import { useCollection } from 'react-firebase-hooks/firestore'
import { db } from '../firebase'
import ChatRow from './ChatRow'
import { collection, query, orderBy } from 'firebase/firestore'


function SideBar() {
    const {data: session} = useSession()

    const [chats, loading, error] = useCollection(
      session && collection(db, 'users', session.user?.email!, 'chats')
    )

  return (
    <div className='relative flex flex-col h-screen'>
        <div className='p-2 flex-1'>
            <div className=''>
                <NewChat />
                <div>
                    {/* ModelSelection */}
                </div>
                {chats?.docs.map(chat=>(
                  <ChatRow key={chat.id} id={chat.id} />
                ))}
            </div>
        </div>
        {session && (
          
          <div className="fixed bottom-0 w-44 md:w-80 flex flex-shrink-0 bg-zinc-800 p-4">
            <a href="#" className="group block w-full flex-shrink-0">
              <div className="flex items-center">
                <div>
                  <img
                    className="inline-block h-12 w-12 rounded-full mr-2"
                    src={session.user?.image!}
                    alt=""
                  />
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-zinc-100">{session.user?.name!}</p>
                  <div className='border-b mb-2 mt-2 w-full px-2 border-zinc-600' />
                  <p onClick={()=>signOut()}className="text-xs font-medium text-gray-300 group-hover:text-gray-200">Sign Out</p>
                </div>
              </div>
            </a>
          </div>
          
        )}
    </div>
  )
}

export default SideBar