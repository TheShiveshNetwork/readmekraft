"use client";

import { FormatConductData } from "@/actions/themeDataFormat";
import { useEffect, useState } from "react";
import { useToast } from "../ui/use-toast";
import { conductFormData } from "@/types";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Button } from "../ui/button";
import { Check, CopyIcon } from "lucide-react";
import RenderMarkdown from "../RenderMarkdown";
import CreateCodeOfConductForm from "../CreateCodeOfConductForm";
import { GenerateContentWithAI } from "@/actions/AIGeneration";

type Props = {
    themeFiles: string[];
    markdownPath: string;
}

const CreateCodeOfConductPage = ({ themeFiles, markdownPath }: Props) => {
    const { toast } = useToast();
    const [selectedTheme, setSelectedTheme] = useState(themeFiles[0]);
    const [formData, setFormData] = useState<conductFormData>({
        name: "Project",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem, harum sequi dolorem ex adipisci, id cum possimus neque veniam porro autem voluptatibus qui.",
    });
    const [themeContent, setThemeContent] = useState("");
    const [isCopied, setIsCopied] = useState(false);
    const [generating, setGenerating] = useState(false);

    const getThemeData = async () => {
        const newData = await FormatConductData(formData, markdownPath, selectedTheme);
        setThemeContent(newData);
    }

    useEffect(() => {
        getThemeData();
    }, [markdownPath, selectedTheme])

    const handleButtonClick = async () => {
        const newData = await FormatConductData(formData, markdownPath, selectedTheme);
        setThemeContent(newData);
    }

    const handleContentCopy = () => {
        navigator.clipboard.writeText(themeContent);
        toast({
            title: "Copied to clipboard!",
            description: "Now you can paste the content wherever you want.",
        });
        setIsCopied(true);
        setInterval(() => {
            setIsCopied(false);
        }, 2000)
    }

    const getAIText = async () => {
        setGenerating(true);
        const systemPrompt = "You are an AI that can write SEO friendly README for github Projects. Write the content for the description section of this REAMDE in about 100 words. Use emojis, bullet points and make the README as attractive as possible.";
        const res = await GenerateContentWithAI(systemPrompt, formData.description);
        setGenerating(false);
        setFormData({ ...formData, description: res })
    }

    return (
        <div className='w-full p-4 min-h-screen h-auto bg-gray-50 dark:bg-zinc-900'>
            <CreateCodeOfConductForm formData={formData} setFormData={setFormData} handleButtonClick={handleButtonClick} getAIText={getAIText} isAIGenerating={generating} />
            <div className="w-full shadow-lg rounded-lg h-full bg-background dark:shadow-zinc-600">
                <div className="flex gap-4 w-full justify-end p-2">
                    <Button variant={"outline"} className={`h-[40px] w-[40px] p-0 ${isCopied && "bg-green-300 hover:bg-green-300"}`} onClick={handleContentCopy}>
                        {!isCopied ?
                            <CopyIcon size={20} />
                            : <Check />
                        }
                    </Button>
                    <Select onValueChange={(value) => setSelectedTheme(value)}>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder={themeFiles[0].split(".")[0]} defaultValue={themeFiles[0]} />
                        </SelectTrigger>
                        <SelectContent>
                            {themeFiles.map((file, index) => (
                                <SelectItem key={`theme-${index}`} value={file}>{file.split(".")[0]}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>

                <RenderMarkdown themeContent={themeContent} />
            </div>
        </div>
    )
}

export default CreateCodeOfConductPage