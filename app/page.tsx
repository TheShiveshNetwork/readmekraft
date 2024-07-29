import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Unleash the Power of Github README's. Customize your Github profile for FREE",
  description: "Transform your GitHub projects with stunning, informative, and professional READMEs. Elevate your code today!",
};

export default function Home() {
  return (
    <>
      <div className="w-full flex flex-col h-screen items-center justify-center p-6 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#cee6ff] to-[#ffffff]">
        <div className="rounded-full border-2 border-purple-500 px-4 py-1 bg-white bg-opacity-30">
          ✨ It's all free
        </div>
        <h1 className="text-4xl lg:text-6xl font-semibold w-full text-center lg:leading-[80px] max-w-[600px] mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-500">
          Unleash the Power of Github README's
        </h1>
        <p className="max-w-[700px] text-center text-lg textgray-800">
          Transform your GitHub projects with stunning, informative, and professional READMEs. Elevate your code today!
        </p>
        <div className="flex gap-4 mt-10">
          <Button asChild variant={"outline"} className="bg-transparent hover:bg-transparent border border-blue-700 text-blue-700 hover:text-blue-500">
            <Link href={"/createFiles"}>Create Other Files</Link>
          </Button>
          <Button asChild className="bg-blue-500 hover:bg-blue-600">
            <Link href={"/createReadme"}>Create REAME</Link>
          </Button>
        </div>
      </div>
    </>
  );
}
