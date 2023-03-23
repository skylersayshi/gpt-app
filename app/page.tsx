import React from 'react'
import { BoltIcon, ExclamationTriangleIcon, SunIcon } from '@heroicons/react/24/outline'

function HomePage() {
  return (
    <div className='text-zinc-100 flex flex-col items-center justify-center h-screen px-2'>
        <img src='https://influencermarketinghub.com/wp-content/uploads/2023/02/chatgpt-logo-02AFA704B5-seeklogo.com_.png' className='invert w-20 h-20 mb-20 items-center justify-center'/>
        <div className='flex space-x-2 text-center'>
            <div className='w-1/3'>
                <div className='flex items-center justify-center mb-5'>
                    <SunIcon className='h-10 w-10 text-zinc-600'/>
                    <h2 className='font-bold text-zinc-600 text-lg'>Examples</h2>
                </div>          
                <div className='space-y-2'>
                    <p className='infoText'>"Explain Something to me"</p>
                    <p className='infoText'>"Write a poem about athletes"</p>
                    <p className='infoText'>"Why is the sky blue?"</p>
                </div>
            </div>
            <div className='w-1/3'>
                <div className='flex items-center justify-center mb-5'>
                    <BoltIcon className='h-10 w-10 text-zinc-600'/>
                    <h2 className='font-bold text-zinc-600 text-lg'>Capabilities</h2>
                </div>          
                <div className='space-y-2'>
                    <p className='infoText'>Change the ChatGPT Model to use</p>
                    <p className='infoText'>Messages are stored in Firebase's Firestore</p>
                    <p className='infoText'>Hot Toast notifications when ChatGPT is thinking</p>
                </div>
            </div>
            <div className='w-1/3'>
                <div className='flex items-center justify-center mb-5'>
                    <ExclamationTriangleIcon className='h-10 w-10 text-zinc-600'/>
                    <h2 className='font-bold text-zinc-600 text-lg'>Limitations</h2>
                </div>          
                <div className='space-y-2'>
                    <p className='infoText'>May occasionally generate incorrect information</p>
                    <p className='infoText'>May occasionally produce harmful instructions or biased content</p>
                    <p className='infoText'>"Limited knowledge of world and events after 2021"</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomePage