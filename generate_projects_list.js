
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectsDir = path.join(__dirname, 'src/data/projects');
const outputFile = path.join(__dirname, 'src/data/projectsList.ts');

const projects = [];

const files = fs.readdirSync(projectsDir).filter(f => f.endsWith('.json'));

files.forEach(file => {
  const content = fs.readFileSync(path.join(projectsDir, file), 'utf-8');
  const data = JSON.parse(content);
  
  const images = [];
  if (data.images) images.push(...data.images);
  
  if (data.gallery && data.gallery.sections) {
    data.gallery.sections.forEach(section => {
      if (section.type === 'banner' && section.image) {
        images.push(section.image);
      } else if (section.type === 'imageGrid' && section.images) {
        section.images.forEach(img => images.push(img.src));
      } else if (section.type === 'mixedGrid') {
        if (section.portraitImage) images.push(section.portraitImage.src);
        if (section.gridImages) section.gridImages.forEach(img => images.push(img.src));
      }
    });
  }

  projects.push({
    id: data.id,
    name: data.name,
    year: data.year,
    categories: data.categories,
    comingSoon: data.comingSoon,
    awardWinning: data.awardWinning,
    images: images
  });
});

const fileContent = `export interface ProjectSummary {
  id: string;
  name: string;
  year: string;
  categories: string[];
  images: string[];
  comingSoon?: boolean;
  awardWinning?: boolean;
}

export const projectsList: ProjectSummary[] = ${JSON.stringify(projects, null, 2)};
`;

fs.writeFileSync(outputFile, fileContent);
console.log('projectsList.ts generated with ' + projects.length + ' projects.');
