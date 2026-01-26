import { workExperience, personalProjects, Company, PersonalProject } from './data';
import { marked } from 'marked';/**

function generateWorkExperience(workExperienceData: Company[], container: HTMLElement) {
    
    workExperienceData.forEach((company) => {
        const companyHeader = document.createElement('div');
        companyHeader.classList.add('company-header');
        companyHeader.innerHTML = `
            <h3>${company.companyName}</h3>
            <p><strong>${company.startDate} - ${company.endDate}</strong></p>
        `;
        container.appendChild(companyHeader);
        
        company.projects.forEach((project, projectIndex) => {
            const projectAlignment = projectIndex % 2 === 0 ? 'flex-start' : 'flex-end';
            const projectCardColorClass = projectIndex % 2 === 0 ? 'card-dark' : 'card-medium';
            
            const projectHeader = document.createElement('div');
            projectHeader.classList.add('project-header');
            if (projectAlignment === 'flex-end') {
                projectHeader.style.marginLeft = 'auto';
            }
            projectHeader.innerHTML = `
                <h4>${project.name}</h4>
                <p><strong>${project.title}</strong> | ${project.dates}</p>
            `;
            container.appendChild(projectHeader);
            
            // Subprojects as individual cards - all use same alignment
            project.subProjects.forEach((subProject) => {
                const subProjectCard = document.createElement('div');
                subProjectCard.classList.add('card', 'card-subproject', projectCardColorClass);
                if (projectAlignment === 'flex-end') {
                    subProjectCard.style.marginLeft = 'auto';
                }
                
                const techLine = subProject.tech ? `<p><em>${subProject.tech}</em></p>` : '';
                const projectNameLine = subProject.projectName ? `<h4>${subProject.projectName}</h4>` : '';
                
                subProjectCard.innerHTML = `
                    ${projectNameLine}
                    ${marked.parse(subProject.description)}
                    ${techLine}
                `.trim();
                
                container.appendChild(subProjectCard);
            });
            
            projectIndex++; // Increment after processing all subprojects in this project
        });
    });
}

function generateCards(data: PersonalProject[], container: HTMLElement, useTechInDate: boolean = false) {
    data.forEach((item, index) => {
        const card = document.createElement('div');
        const cardColorClass = index % 2 === 0 ? 'card-dark' : 'card-medium';
        card.classList.add('card', cardColorClass);

        let detailsLine = '';
        if (useTechInDate) {
            detailsLine = `<p><strong>Tech:</strong> ${item.tech}</p>`;
        }
        
        let techLine = '';
        if (!useTechInDate && item.tech) {
            techLine = `<p><em>${item.tech}</em></p>`;
        }

        card.innerHTML = `
            <h3>${item.title}</h3>
            ${detailsLine}
            ${marked.parse(item.description)}
            ${techLine}
        `;

        container.appendChild(card);
    });
}

const experienceContainer = document.getElementById('experience-container');
const projectsContainer = document.getElementById('projects-container');

generateWorkExperience(workExperience, experienceContainer);
generateCards(personalProjects, projectsContainer, false);
