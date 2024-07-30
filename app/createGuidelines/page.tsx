import CreateGuidelinesPage from '@/components/pages/CreateGuidelinesPage';
import fs from 'fs';
import { Metadata } from 'next';
import path from 'path';

export const metadata: Metadata = {
    title: "Set Clear Contributing Guidelines for Your Project for FREE",
    description: "Create concise and clear contributing guidelines to streamline collaboration on your GitHub project.",
};

type Props = {}

const CreateGuidelines = (props: Props) => {
    const markdownPath = "./markdowns/Contributing";
    const files = fs.readdirSync(path.resolve(markdownPath));
    
    return <CreateGuidelinesPage themeFiles={files} markdownPath={markdownPath} />;
}

export default CreateGuidelines