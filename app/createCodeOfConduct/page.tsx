import CreateCodeOfConductPage from '@/components/pages/CreateCodeOfConductPage';
import fs from 'fs';
import { Metadata } from 'next';
import path from 'path';

export const metadata: Metadata = {
    title: "Establish a Strong Code of Conduct for FREE",
    description: "Develop a robust code of conduct to ensure a respectful and inclusive community for your project.",
};

type Props = {}

const CreateCodeOfConduct = (props: Props) => {
    const markdownPath = "./markdowns/CodeOfConduct";
    const files = fs.readdirSync(path.resolve(markdownPath));
    
    return <CreateCodeOfConductPage themeFiles={files} markdownPath={markdownPath} />;
}

export default CreateCodeOfConduct