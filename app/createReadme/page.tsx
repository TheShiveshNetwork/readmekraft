import fs from 'fs';
import path from 'path';
import CreateReadmePage from '@/components/pages/CreateReadmePage';

const CreateReadme = () => {
    const markdownPath = "./markdowns/README";
    const files = fs.readdirSync(path.resolve(markdownPath));
    
    return <CreateReadmePage themeFiles={files} markdownPath={markdownPath} />;
}

export default CreateReadme