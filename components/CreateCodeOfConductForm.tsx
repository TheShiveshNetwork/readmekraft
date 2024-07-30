import { ChangeEvent, Dispatch, MouseEventHandler, SetStateAction } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { conductFormData } from "@/types";

type Props = {
    formData: conductFormData;
    setFormData: Dispatch<SetStateAction<conductFormData>>;
    handleButtonClick: MouseEventHandler<HTMLButtonElement>;
}

const CreateCodeOfConductForm = ({ formData, setFormData, handleButtonClick }: Props) => {

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

            <Label htmlFor="description">Description</Label>
            <Textarea placeholder="Type your short description here in Markdown format." id="description" className="mb-2" value={formData.description} onChange={handleFormChange} />

            <div className="absolute bottom-0 flex w-full justify-end">
                <Button onClick={handleButtonClick}>Submit</Button>
            </div>
        </div>
    )
}

export default CreateCodeOfConductForm