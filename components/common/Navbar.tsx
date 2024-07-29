"use client";

import Image from "next/image";
import Link from "next/link";

type Props = {}

const Navbar = (props: Props) => {
    return (
        <div className="w-full z-50 border-b backdrop-blur-lg bg-opacity-80">
            <div className="mx-auto max-w-7xl px-6 sm:px-6 lg:px-8 ">
                <div className="relative flex h-16 justify-between">
                    <div className="flex flex-1 items-stretch justify-start">
                        <Link className="flex flex-shrink-0 items-center" href="/">
                            <Image
                                className="block h-12 w-auto"
                                src="https://www.svgrepo.com/show/501888/donut.svg"
                                height={20}
                                width={20}
                                alt=""
                            />
                        </Link>
                    </div>
                    <div className="flex-shrink-0 flex px-2 py-3 items-center space-x-8">
                        <Link className="text-gray-700 hover:text-indigo-700 text-sm font-medium" href="/#about">About</Link>
                        <Link className="text-gray-700 hover:text-indigo-700 text-sm font-medium" href="/#services">Services</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar