import fs from 'fs';
import CreateReadmePage from '@/components/pages/CreateReadmePage';

const CreateReadme = () => {
    const markdownPath = "./markdowns/README";
    const files = fs.readdirSync(markdownPath);
    
    return <CreateReadmePage themeFiles={files} markdownPath={markdownPath} />;
}

export default CreateReadme