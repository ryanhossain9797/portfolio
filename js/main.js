import { workExperience, personalProjects } from './data.js';

function generateWorkExperience(workExperienceData, container) {
    let projectIndex = 0; // Track project index for alternating (scoped to project)
    
    workExperienceData.forEach((company, companyIndex) => {
        // Company header (not a card, just a header)
        const companyHeader = document.createElement('div');
        companyHeader.classList.add('company-header');
        companyHeader.innerHTML = `
            <h3>${company.companyName}</h3>
            <p><strong>${company.startDate} - ${company.endDate}</strong></p>
        `;
        
        container.appendChild(companyHeader);
        
        // Projects within company
        company.projects.forEach((project) => {
            // Determine alignment for this entire project (all subprojects and header)
            const projectAlignment = projectIndex % 2 === 0 ? 'flex-start' : 'flex-end';
            const projectCardColorClass = projectIndex % 2 === 0 ? 'card-dark' : 'card-medium';
            
            // Project header (not a card, just a header) - align with cards
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
                    <p>${subProject.description}</p>
                    ${techLine}
                `.trim();
                
                container.appendChild(subProjectCard);
            });
            
            projectIndex++; // Increment after processing all subprojects in this project
        });
    });
}

function generateCards(data, container, useTechInDate = false) {
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
            <p>${item.description}</p>
            ${techLine}
        `;

        container.appendChild(card);
    });
}

const experienceContainer = document.getElementById('experience-container');
const projectsContainer = document.getElementById('projects-container');

generateWorkExperience(workExperience, experienceContainer);
generateCards(personalProjects, projectsContainer, true);
