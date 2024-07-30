import fs from 'fs';
import path from 'path';
import CreateReadmePage from '@/components/pages/CreateReadmePage';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Craft the Perfect GitHub Profile README for FREE",
    description: "Easily create an engaging GitHub profile README to showcase your skills and projects.",
};

const CreateReadme = () => {
    const markdownPath = "./markdowns/README";
    const files = fs.readdirSync(path.resolve(markdownPath));
    
    return <CreateReadmePage themeFiles={files} markdownPath={markdownPath} />;
}

export default CreateReadme