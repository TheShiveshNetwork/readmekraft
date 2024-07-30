import { ChangeEvent, Dispatch, MouseEventHandler, SetStateAction } from "react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { formData } from "@/types";
import { Button } from "./ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { allLanguages } from "@/constants";

type Props = {
    formData: formData;
    setFormData: Dispatch<SetStateAction<formData>>;
    handleButtonClick: MouseEventHandler<HTMLButtonElement>;
}

const CreateReadmeForm = ({ formData, setFormData, handleButtonClick }: Props) => {

    const handleFormChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: value,
        }));
    };

    return (
        <div className="w-full h-full relative">
            <h1 className="text-3xl font-semibold mb-4">Create Github Readme</h1>

            <Label htmlFor="name">Name</Label>
            <Input type="text" id="name" placeholder="Enter name" className="mb-2" value={formData.name} onChange={handleFormChange} />

            <Label htmlFor="githubUsername">Github Username</Label>
            <Input type="text" id="githubUsername" placeholder="Enter username" className="mb-2" value={formData.githubUsername} onChange={handleFormChange} />

            <Label htmlFor="websiteUrl">WebsiteUrl</Label>
            <Input type="text" id="websiteUrl" placeholder="Enter username" className="mb-2" value={formData.websiteUrl} onChange={handleFormChange} />

            <Label htmlFor="headline">Headline</Label>
            <Input type="text" id="headline" placeholder="Enter headline" className="mb-2" value={formData.headline} onChange={handleFormChange} />

            <Label htmlFor="description">Description</Label>
            <Textarea placeholder="Type your short description here in Markdown format." id="description" className="mb-2" value={formData.description} onChange={handleFormChange} />

            <Label htmlFor="languages">Languages</Label>
            <Select onValueChange={(value) => setFormData({ ...formData, languages: [...formData.languages, value] })}>
                <SelectTrigger className="mb-2">
                    <SelectValue placeholder="Choose languages" />
                </SelectTrigger>
                <SelectContent>
                    {allLanguages.map((language, index) => (
                        <SelectItem key={`theme-${index}`} value={language}>{language}</SelectItem>
                    ))}
                </SelectContent>
            </Select>

            <Label htmlFor="otherLink">Support / other Link</Label>
            <Input type="text" id="otherLink" placeholder="Enter support link" className="mb-2" value={formData.otherLink} onChange={handleFormChange} />

            <div className="absolute bottom-0 flex w-full justify-end">
                <Button onClick={handleButtonClick}>Submit</Button>
            </div>
        </div>
    )
}

export default CreateReadmeForm