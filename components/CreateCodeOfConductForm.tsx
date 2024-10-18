import { ChangeEvent, Dispatch, MouseEventHandler, SetStateAction, useState } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { conductFormData } from "@/types";
import { Edit2, Loader2, User } from "lucide-react";

type Props = {
    formData: conductFormData;
    setFormData: Dispatch<SetStateAction<conductFormData>>;
    handleButtonClick: MouseEventHandler<HTMLButtonElement>;
    getAIText: MouseEventHandler<HTMLButtonElement>;
    isAIGenerating: boolean;
}

const CreateCodeOfConductForm = ({ formData, setFormData, handleButtonClick, getAIText, isAIGenerating }: Props) => {
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
        <div className="fixed flex justify-end max-w-[90%] md:w-full md:max-w-[400px] z-50 right-4 bottom-4">
            {!expand ? (
                <div onClick={() => setExpand(!expand)} className="p-4 w-16 h-16 flex items-center justify-center rounded-full bg-gray-50 dark:bg-slate-900 dark:text-white shadow-lg cursor-pointer">
                    <Edit2 />
                </div>
            ) : (
                <div className="p-4 max-w-[90%] md:w-full md:max-w-[400px] bg-background rounded-md shadow-lg">
                    <h1 className="text-xl font-semibold mb-4">Create Code of Conduct</h1>
                    <div className="flex justify-between md:justify-between w-full gap-4">
                        <div className="w-3/4">
                            {selected === "details" && (
                                <>
                                    <Label htmlFor="name">Name</Label>
                                    <Input type="text" id="name" placeholder="Enter name" className="mb-2 bg-secondary" value={formData.name} onChange={handleFormChange} />

                                    <div className="flex flex-col gap-1 sm:flex-row sm:justify-between sm:items-center">
                                        <Label htmlFor="description">Description</Label>
                                        <Button onClick={getAIText} disabled={isAIGenerating} className="bg-blue-500 hover:bg-purple-300 flex gap-1 items-center px-2 h-6 text-sm">
                                            {isAIGenerating && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                                            Generate with AI
                                        </Button>
                                    </div>
                                    <Textarea placeholder="Type your short description here in Markdown format." rows={10} id="description" className="mb-2 bg-secondary" value={formData.description} onChange={handleFormChange} />
                                </>
                            )}
                        </div>
                        <div className="flex flex-col gap-2 w-8 sm:w-14">
                            <div className={`p-1 sm:p-4 rounded-full transition-all shadow-md ${selected === "details" && "bg-blue-400 text-white"}`} onClick={() => setSelected("details")}>
                                <User />
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

export default CreateCodeOfConductForm