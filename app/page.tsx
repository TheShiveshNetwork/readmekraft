import AvatarStack from "@/components/common/AvatarStack";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { allCreateLinks } from "@/constants";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Unleash the Power of Github README's. Customize your Github profile for FREE",
  description: "Transform your GitHub projects with stunning, informative, and professional READMEs. Elevate your code today!",
};

export default function Home() {
  return (
    <>
      <div className="w-full pt-20 flex flex-col min-h-screen items-center justify-center px-6 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#cee6ff] to-[#ffffff] pb-10">
        <div className="rounded-full border-2 border-purple-500 px-4 py-1 bg-white bg-opacity-30 mt-14">
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
          <Button asChild className="bg-blue-500 hover:bg-blue-600">
            <Link href={"/createReadme"}>Create README</Link>
          </Button>
        </div>
        <Image
          src={"/assets/hero.png"}
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
        <div className="mt-20 flex flex-col items-center justify-center">
          <h1 className="text-4xl leading-[50px] font-semibold w-full text-center max-w-[600px] mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-500">
            Craft content effortlessly with integrated AI features
          </h1>
          <Image
            src={"/assets/ai-clip.png"}
            alt="hero"
            height={1000}
            width={1000}
            className="h-auto w-full max-w-[500px] rounded-lg shadow-md"
          />
        </div>
        <div id="about" className="w-full px-6 md:px-40 mt-20 flex flex-col items-center">
          <h1 className="max-w-[700px] text-3xl lg:text-4xl font-bold w-full mb-4 text-left bg-clip-text text-gray-600">
            Craft Your Markdown Files
          </h1>
          <p className="max-w-[700px] text-justify text-lg textgray-800 mb-6">
            Transform your GitHub projects with stunning, informative, and professional READMEs. Elevate your code today! Create Profile READMEs, Project READMEs, Contributing Guidelines, and Codes of Conduct. Make your repositories stand out with our user-friendly interface. Start enhancing your GitHub presence now and see the difference a great README can make!
          </p>
          <p className="max-w-[700px] text-left text-lg textgray-800 mb-4">
            ✨ <b>Enhance GitHub Presence:</b> Make your repositories stand out with professional and informative documentation.
          </p>
          <p className="max-w-[700px] text-left text-lg textgray-800 mb-4">
            ✨ <b>Boost Project Value:</b> Highlight the importance and value of your projects with well-crafted READMEs.
          </p>
          <p className="max-w-[700px] text-left text-lg textgray-800 mb-4">
            ✨ <b>SEO Friendly:</b> Improve the visibility of your GitHub projects with SEO-optimized documentation.
          </p>
          <p className="max-w-[700px] text-left text-lg textgray-800 mb-4">
            ✨ <b>Enhance GitHub Presence:</b> Make your repositories stand out with professional and informative documentation.
          </p>
        </div>
        <div id="services" className="w-full px-6 md:px-40 mt-20 flex flex-col items-center">
          <h1 className="text-3xl lg:text-4xl font-bold w-full mb-4 text-center bg-clip-text text-gray-600">
            Create different files
          </h1>
          <div className="max-w-[700px] grid grid-cols-1 md:grid-cols-2 gap-4">
            {allCreateLinks.map((item) => (
              <Link key={item.href} href={item.href}>
                <Card className="bg-blue-100 h-full">
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
    </>
  );
}
