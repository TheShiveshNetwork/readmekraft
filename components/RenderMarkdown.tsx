"use client";

import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

import "@/public/styles/markdown.styles.css";

type Props = {
    themeContent: string;
}

const RenderMarkdown = ({ themeContent }: Props) => {
    return (
        <div className="markdown h-[calc(100%-80px)] w-full overflow-y-auto box-border p-4">
            <ReactMarkdown children={themeContent} rehypePlugins={[rehypeRaw]} />
        </div>
    )
}

export default RenderMarkdown