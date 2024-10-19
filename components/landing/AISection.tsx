"use client"
import { useTheme } from 'next-themes'
import Image from 'next/image'
import React from 'react'

function AISection() {
    const { theme } = useTheme()
  return (
    <div>
        <div className="mt-20 flex flex-col items-center justify-center">
          <h1 className="text-4xl leading-[50px] font-semibold w-full text-center max-w-[600px] mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-500">
            Craft content effortlessly with integrated AI features
          </h1>
          <Image
          src={theme === 'dark' ? "/assets/ai-clip-dark.jpg" : "/assets/ai-clip.png"}
          alt="hero"
          height={1000}
          width={1000}
          className="h-auto w-full max-w-[500px] rounded-lg shadow-md transition-all ease-in"
        />
        </div>
    </div>
  )
}

export default AISection