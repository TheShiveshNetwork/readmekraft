"use client";

import { projectReadmeFormData } from "@/types";
import { ChangeEvent, Dispatch, MouseEventHandler, SetStateAction, useState } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { Edit2, LetterText, Loader2, User } from "lucide-react";

type Props = {
    formData: projectReadmeFormData;
    setFormData: Dispatch<SetStateAction<projectReadmeFormData>>;
    handleButtonClick: MouseEventHandler<HTMLButtonElement>;
    getAIText: MouseEventHandler<HTMLButtonElement>;
    isAIGenerating: boolean;
}

const CreateProjectReadmeForm = ({ formData, setFormData, handleButtonClick, getAIText, isAIGenerating }: Props) => {
    const [expand, setExpand] = useState(true);
    const [selected, setSelected] = useState("details");

    const handleFormChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: value,
        }));
    };

    return (
        <div className="fixed flex justify-end w-full max-w-[400px] z-50 right-4 bottom-4">
            {!expand ? (
                <div onClick={() => setExpand(!expand)} className="p-4 w-16 h-16 flex items-center justify-center rounded-full bg-gray-50 shadow-lg cursor-pointer">
                    <Edit2 />
                </div>
            ) : (
                <div className="p-4 w-full bg-white rounded-md shadow-lg">
                    <h1 className="text-xl font-semibold mb-4">Create Project Readme</h1>
                    <div className="flex justify-between w-full gap-4">
                        <div className="w-full">
                            {selected === "details" && (
                                <>
            <Label htmlFor="name">Name</Label>
            <Input type="text" id="name" placeholder="Enter name" className="mb-2" value={formData.name} onChange={handleFormChange} />

            <Label htmlFor="githubUsername">Github Username</Label>
            <Input type="text" id="githubUsername" placeholder="Enter username" className="mb-2" value={formData.githubUsername} onChange={handleFormChange} />

            <Label htmlFor="websiteUrl">WebsiteUrl</Label>
            <Input type="text" id="websiteUrl" placeholder="Enter username" className="mb-2" value={formData.websiteUrl} onChange={handleFormChange} />

            <Label htmlFor="contactLink">Contact Link</Label>
            <Input type="text" id="contactLink" placeholder="Enter support link" className="mb-2" value={formData.contactLink} onChange={handleFormChange} />
            </>
                            )}

                            {selected === "description" && (
                                <>
                                <Label htmlFor="headline">Headline</Label>
                                <Input type="text" id="headline" placeholder="Enter headline" className="mb-2" value={formData.headline} onChange={handleFormChange} />
                    
            <div className="flex justify-between items-center">
                <Label htmlFor="description">Description</Label>
                <Button onClick={getAIText} disabled={isAIGenerating} className="bg-blue-500 hover:bg-purple-300 px-2 h-6 text-sm">
                    {isAIGenerating && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                    Generate with AI
                </Button>
            </div>
            <Textarea placeholder="Type your short description here in Markdown format." id="description" rows={10} className="mb-2" value={formData.description} onChange={handleFormChange} />
            </>
                            )}
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className={`p-4 rounded-full transition-all shadow-md ${selected === "details" && "bg-blue-400 text-white"}`} onClick={() => setSelected("details")}>
                                <User />
                            </div>
                            <div className={`p-4 rounded-full transition-all shadow-md ${selected === "description" && "bg-blue-400 text-white"}`} onClick={() => setSelected("description")}>
                                <LetterText />
                            </div>
                        </div>
                    </div>

                    <div className="flex w-full mt-4 items-center gap-2 justify-end">
                        <Button variant={"outline"} onClick={() => setExpand(!expand)}>Cancel</Button>
                        <Button onClick={handleButtonClick}>Submit</Button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default CreateProjectReadmeForm