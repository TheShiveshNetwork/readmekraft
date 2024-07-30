import { guidelinesFormData } from "@/types";
import { ChangeEvent, Dispatch, MouseEventHandler, SetStateAction } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectTrigger, SelectValue } from "./ui/select";
import { Button } from "./ui/button";

type Props = {
    formData: guidelinesFormData;
    setFormData: Dispatch<SetStateAction<guidelinesFormData>>;
    handleButtonClick: MouseEventHandler<HTMLButtonElement>;
}

const CreateGuidelinesForm = ({ formData, setFormData, handleButtonClick }: Props) => {

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

            <Label htmlFor="name">Project Name</Label>
            <Input type="text" id="name" placeholder="Enter name" className="mb-2" value={formData.name} onChange={handleFormChange} />

            <Label htmlFor="description">Description</Label>
            <Textarea placeholder="Type your short description here in Markdown format." id="description" className="mb-2" value={formData.description} onChange={handleFormChange} />

            <div className="absolute bottom-0 flex w-full justify-end">
                <Button onClick={handleButtonClick}>Submit</Button>
            </div>
        </div>
    )
}

export default CreateGuidelinesForm