import CreateProjectReadmePage from '@/components/pages/CreateProjectReadmePage';
import fs from 'fs';
import { Metadata } from 'next';
import path from 'path';

export const metadata: Metadata = {
    title: "Generate Detailed Project README Files for FREE",
    description: "Quickly generate comprehensive README files for your GitHub projects with ease.",
};

type Props = {}

const CreateProjectReadme = (props: Props) => {
    const markdownPath = "./markdowns/Project";
    const files = fs.readdirSync(path.resolve(markdownPath));
    
    return <CreateProjectReadmePage themeFiles={files} markdownPath={markdownPath} />;
}

export default CreateProjectReadme