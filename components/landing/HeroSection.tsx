"use client"
import React from 'react'
import AvatarStack from '../common/AvatarStack'
import Image from 'next/image'
import { Button } from '../ui/button'
import Link from 'next/link'
import { useTheme } from 'next-themes'

function HeroSection() {
  const { theme } = useTheme();
  return (
    <div className='w-full pt-20 flex flex-col min-h-screen items-center justify-center px-6 transition-all ease-in-out '>
        <div className="rounded-full border-2 border-purple-500 px-4 py-1 bg-white dark:bg-inherit bg-opacity-30 mt-14">
          ✨ It's all free
        </div>
        <h1 className="text-4xl lg:text-6xl font-semibold w-full text-center lg:leading-[80px] max-w-[600px] mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-500">
          Unleash the Power of Github README's
        </h1>
        <p className="max-w-[700px] text-center text-lg textgray-800">
          Transform your GitHub projects with stunning, informative, and professional READMEs using <span className="relative before:absolute before:h-1 before:-bottom-1 before:w-full before:bg-purple-400 text-purple-600">AI</span>
        </p>
        <div className="flex gap-4 mt-10">
          <Button asChild variant={"outline"} className="bg-transparent hover:bg-transparent border border-blue-700 text-blue-700 hover:text-blue-500">
            <Link href={"/createFiles"}>Create md Files</Link>
          </Button>
          <Button asChild className="bg-blue-500 hover:bg-blue-600 dark:text-white">
            <Link href={"/createReadme"}>Create README</Link>
          </Button>
        </div>
        <Image
          src={theme === 'dark' ? "/assets/hero-dark.png" : "/assets/hero.png"}
          alt="hero"
          height={1500}
          width={1500}
          className="h-auto w-full md:w-2/3 mt-10 rounded-lg shadow-md"
        />
        <div className="mt-20 flex flex-col items-center justify-center">
          <h1 className="text-xl font-semibold w-full text-center max-w-[600px] mb-10 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-500">
            Making github presence effortless for developers
          </h1>
          <AvatarStack />
        </div>
    </div>
  )
}

export default HeroSection