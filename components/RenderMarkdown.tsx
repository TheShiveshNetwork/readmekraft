"use client";

import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

import "@/public/styles/markdown.styles.css";
import { CircleAlert } from "lucide-react";

type Props = {
    themeContent: string;
}

const RenderMarkdown = ({ themeContent }: Props) => {
    return (
        <div className="markdown-body dark:!bg-zinc-950 h-[calc(100%-80px)] w-full overflow-y-auto box-border p-4">
            <div className="p-4 flex gap-4 rounded-md bg-yellow-200">
                <CircleAlert />
                We got you covered, the files are optimized for github. The design might slightly differ here from github. 
            </div>
            <ReactMarkdown className="dark:bg-zinc-950 dark:text-white transition-all ease-in" children={themeContent} rehypePlugins={[rehypeRaw]} />
        </div>
    )
}

export default RenderMarkdown