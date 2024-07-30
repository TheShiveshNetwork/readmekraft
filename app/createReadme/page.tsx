import fs from 'fs';
import path from 'path';
import CreateReadmePage from '@/components/pages/CreateReadmePage';

const CreateReadme = () => {
    const markdownPath = path.resolve("markdowns/README");
    console.log(`current: ${markdownPath}`);
    const files = fs.readdirSync(markdownPath);
    
    return <CreateReadmePage themeFiles={files} markdownPath={markdownPath} />;
}

export default CreateReadme