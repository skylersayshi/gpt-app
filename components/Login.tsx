'use client'
import React from 'react'
import { signIn } from 'next-auth/react'
import Image from 'next/image'

function Login() {
  return (
    <div className='bg-zinc-600 h-screen flex flex-col items-center justify-center text-center' >
      <div className='mb-10'>
        <Image
          src="https://influencermarketinghub.com/wp-content/uploads/2023/02/chatgpt-logo-02AFA704B5-seeklogo.com_.png"
          width={100}
          height={100}
          alt="logo"
        />
      </div>
      <button onClick={()=> signIn("google")}className='text-zinc-100 font-bold text-3xl animate-pulse'>Sign In to use ChatGPT</button>
    </div>
  )
}

export default Login