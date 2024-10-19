import Link from 'next/link'
import React from 'react'
import { allCreateLinks } from "@/constants";
import { Card, CardDescription, CardHeader, CardTitle } from '../ui/card'

function ServicesSection() {
  return (
    <div>
        <div id="services" className="w-full px-6 md:px-40 mt-20 flex flex-col items-center">
          <h1 className="text-3xl lg:text-4xl font-bold w-full mb-4 text-center bg-clip-text text-gray-600 dark:text-gray-300">
            Create different files
          </h1>
          <div className="max-w-[700px] grid grid-cols-1 md:grid-cols-2 gap-4">
            {allCreateLinks.map((item) => (
              <Link key={item.href} href={item.href}>
                <Card className="bg-blue-100 dark:bg-slate-900 h-full">
                  <CardHeader>
                    <CardTitle>{item.name}</CardTitle>
                    <CardDescription>{item.description}</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
        </div>
    </div>
  )
}

export default ServicesSection