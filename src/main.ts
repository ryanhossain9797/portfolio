import { workExperience, personalProjects, Company, SubProject } from './data.js';
import { createCompanyHeader } from './components/companyHeader.js';
import { createProjectHeader } from './components/projectHeader.js';
import { createSubProjectCard, ProjectAlignment, CardColorClass } from './components/subProjectCard.js';

function generateWorkExperience(workExperienceData: Company[], container: HTMLElement) {
    
    workExperienceData.forEach((company) => {
        const companyHeader = createCompanyHeader(company);
        container.appendChild(companyHeader);
        
        company.projects.forEach((project, projectIndex) => {
            const projectAlignment = projectIndex % 2 === 0 ? ProjectAlignment.FlexStart : ProjectAlignment.FlexEnd;
            const projectCardColorClass = projectIndex % 2 === 0 ? CardColorClass.Dark : CardColorClass.Medium;
            
            const projectHeader = createProjectHeader(project, projectAlignment);

            container.appendChild(projectHeader);
            
            project.subProjects.forEach((subProject) => {
                const subProjectCard = createSubProjectCard(subProject, projectCardColorClass, projectAlignment);
                container.appendChild(subProjectCard);
            });
        });
    });
}

function generatePersonalProjects(data: SubProject[], container: HTMLElement, useTechInDate: boolean = false) {
    data.forEach((item, index) => {
        const cardColorClass = index % 2 === 0 ? CardColorClass.Dark : CardColorClass.Medium;
        const projectAlignment = index % 2 === 0 ? ProjectAlignment.FlexStart : ProjectAlignment.FlexEnd;
        const card = createSubProjectCard(item, cardColorClass, projectAlignment);
        container.appendChild(card);
    });
}

const experienceContainer = document.getElementById('experience-container');
const projectsContainer = document.getElementById('projects-container');

generateWorkExperience(workExperience, experienceContainer!);
generatePersonalProjects(personalProjects, projectsContainer!, false);
