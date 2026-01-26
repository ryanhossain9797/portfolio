import { workExperience, personalProjects, Company, PersonalProject } from './data.js';
import { createCompanyHeader } from './components/companyHeader.js';
import { createProjectHeader } from './components/projectHeader.js';
import { createSubProjectCard } from './components/subProjectCard.js';
import { createPersonalProjectCard } from './components/personalProjectCard.js';

function generateWorkExperience(workExperienceData: Company[], container: HTMLElement) {
    
    workExperienceData.forEach((company) => {
        const companyHeader = createCompanyHeader(company);
        container.appendChild(companyHeader);
        
        company.projects.forEach((project, projectIndex) => {
            const projectAlignment = projectIndex % 2 === 0 ? 'flex-start' : 'flex-end';
            const projectCardColorClass = projectIndex % 2 === 0 ? 'card-dark' : 'card-medium';
            
            const projectHeader = createProjectHeader(project, projectAlignment);

            container.appendChild(projectHeader);
            
            project.subProjects.forEach((subProject) => {
                const subProjectCard = createSubProjectCard(subProject, projectCardColorClass, projectAlignment);
                
                container.appendChild(subProjectCard);
            });
        });
    });
}

function generatePersonalProjects(data: PersonalProject[], container: HTMLElement, useTechInDate: boolean = false) {
    data.forEach((item, index) => {
        const cardColorClass = index % 2 === 0 ? 'card-dark' : 'card-medium';
        const card = createPersonalProjectCard(item, cardColorClass);

        container.appendChild(card);
    });
}

const experienceContainer = document.getElementById('experience-container');
const projectsContainer = document.getElementById('projects-container');

generateWorkExperience(workExperience, experienceContainer!);
generatePersonalProjects(personalProjects, projectsContainer!, false);
