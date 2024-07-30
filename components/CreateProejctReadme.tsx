import { projectReadmeFormData } from "@/types";
import { ChangeEvent, Dispatch, MouseEventHandler, SetStateAction } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";

type Props = {
    formData: projectReadmeFormData;
    setFormData: Dispatch<SetStateAction<projectReadmeFormData>>;
    handleButtonClick: MouseEventHandler<HTMLButtonElement>;
}

const CreateProjectReadmeForm = ({ formData, setFormData, handleButtonClick }: Props) => {

    const handleFormChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: value,
        }));
    };

    return (
        <div className="w-full h-full pb-14 relative">
            <h1 className="text-3xl font-semibold mb-4">Create Proejct Readme</h1>

            <Label htmlFor="name">Name</Label>
            <Input type="text" id="name" placeholder="Enter name" className="mb-2" value={formData.name} onChange={handleFormChange} />

            <Label htmlFor="githubUsername">Github Username</Label>
            <Input type="text" id="githubUsername" placeholder="Enter username" className="mb-2" value={formData.githubUsername} onChange={handleFormChange} />

            <Label htmlFor="description">Description</Label>
            <Textarea placeholder="Type your short description here in Markdown format." id="description" className="mb-2" value={formData.description} onChange={handleFormChange} />

            <Label htmlFor="websiteUrl">WebsiteUrl</Label>
            <Input type="text" id="websiteUrl" placeholder="Enter username" className="mb-2" value={formData.websiteUrl} onChange={handleFormChange} />

            <Label htmlFor="headline">Headline</Label>
            <Input type="text" id="headline" placeholder="Enter headline" className="mb-2" value={formData.headline} onChange={handleFormChange} />

            <Label htmlFor="contactLink">Contact Link</Label>
            <Input type="text" id="contactLink" placeholder="Enter support link" className="mb-2" value={formData.contactLink} onChange={handleFormChange} />

            <div className="absolute bottom-0 flex w-full justify-end">
                <Button onClick={handleButtonClick}>Submit</Button>
            </div>
        </div>
    )
}

export default CreateProjectReadmeForm