"use client";

import CreateReadmeForm from '@/components/CreateReadmeForm'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { formData } from '@/types';
import React, { useEffect, useState } from 'react';
import RenderMarkdown from '../RenderMarkdown';
import { getFileData } from '@/actions/getFileData';
import { FormatThemeData } from '@/actions/themeDataFormat';

type Props = {
    themeFiles: string[];
    markdownPath: string;
}

const CreateReadmePage = ({ themeFiles, markdownPath }: Props) => {
    const [selectedTheme, setSelectedTheme] = useState(themeFiles[0]);
    const [formData, setFormData] = useState<formData>({
        githubUsername: "",
        headline: "",
        description: "",
        name: "",
        websiteUrl: "",
    });
    const [themeContent, setThemeContent] = useState("");

    const getThemeData = async () => {
        const filePath = `${markdownPath}\\${selectedTheme}`;
        const fileData = await getFileData(filePath);
        setThemeContent(fileData);
    }

    useEffect(() => {
        getThemeData();
    }, [markdownPath, selectedTheme])
    
    const handleButtonClick = async () => {
        const newData = await FormatThemeData(formData, markdownPath, selectedTheme);
        setThemeContent(newData);
    }
    
    useEffect(() => {
        console.log(`themeContent: ${themeContent}`);
    }, [themeContent])

    return (
        <div className='w-full flex flex-col md:flex-row p-4 gap-4 min-h-screen h-auto md:h-screen bg-gray-100'>
            <div className="w-full md:w-1/3 shadow-lg rounded-lg p-8 h-full bg-white">
                <CreateReadmeForm formData={formData} setFormData={setFormData} handleButtonClick={handleButtonClick} />
            </div>
            <div className="w-full md:w-2/3 shadow-lg rounded-lg h-full bg-white">
                <div className="flex w-full justify-end p-2">
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