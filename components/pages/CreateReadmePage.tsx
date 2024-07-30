"use client";

import CreateReadmeForm from '@/components/CreateReadmeForm'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { formData } from '@/types';
import React, { useEffect, useState } from 'react';
import RenderMarkdown from '../RenderMarkdown';
import { getFileData } from '@/actions/getFileData';
import { FormatThemeData } from '@/actions/themeDataFormat';
import { Button } from '../ui/button';
import { Check, CopyIcon } from 'lucide-react';
import { useToast } from '../ui/use-toast';
import path from 'path';

type Props = {
    themeFiles: string[];
    markdownPath: string;
}

const CreateReadmePage = ({ themeFiles, markdownPath }: Props) => {
    const { toast } = useToast();
    const [selectedTheme, setSelectedTheme] = useState(themeFiles[0]);
    const [formData, setFormData] = useState<formData>({
        githubUsername: "",
        headline: "",
        description: "",
        name: "",
        websiteUrl: "",
    });
    const [themeContent, setThemeContent] = useState("");
    const [isCopied, setIsCopied] = useState(false);

    const getThemeData = async () => {
        const filePath = path.resolve(markdownPath + `/${selectedTheme}`);
        console.log(filePath)
        const fileData = await getFileData("./markdowns/README", selectedTheme);
        setThemeContent(fileData);
    }

    useEffect(() => {
        getThemeData();
    }, [markdownPath, selectedTheme])

    const handleButtonClick = async () => {
        const newData = await FormatThemeData(formData, markdownPath, selectedTheme);
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

    return (
        <div className='w-full flex flex-col md:flex-row p-4 gap-4 min-h-screen h-auto md:h-screen bg-gray-100'>
            <div className="w-full md:w-1/3 shadow-lg rounded-lg p-8 h-full bg-white">
                <CreateReadmeForm formData={formData} setFormData={setFormData} handleButtonClick={handleButtonClick} />
            </div>
            <div className="w-full md:w-2/3 shadow-lg rounded-lg h-full bg-white">
                <div className="flex gap-4 w-full justify-end p-2">
                    <Button variant={"outline"} className={`h-[40px] w-[40px] p-0 ${isCopied && "bg-green-300 hover:bg-green-300"}`} onClick={handleContentCopy}>
                        {!isCopied ?
                            <CopyIcon size={20} />
                            : <Check />
                        }
                    </Button>
                    <Select onValueChange={(value) => setSelectedTheme(value)}>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Choose Theme" defaultValue={themeFiles[0]} />
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

export default CreateReadmePage