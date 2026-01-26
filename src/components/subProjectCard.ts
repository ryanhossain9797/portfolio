export enum ProjectAlignment {
    FlexStart = 'flex-start',
    FlexEnd = 'flex-end'
}

export enum CardColorClass {
    Dark = 'card-dark',
    Medium = 'card-medium'
}


import { Company, SubProject } from '../data.js';
import { marked } from '../marked.esm.js';

/**
 * Creates and returns an HTMLElement representing a company header.
 * @param {SubProject} subProject - The sub-project data.
 * @returns {HTMLElement} The created sub-project card element.
 */
export function createSubProjectCard(
        subProject: SubProject, 
        projectCardColorClass: string, 
        projectAlignment: ProjectAlignment)
        : HTMLElement {
    const subProjectCard = document.createElement('div');
        subProjectCard.classList.add('card', 'card-subproject', projectCardColorClass);

    if (projectAlignment === ProjectAlignment.FlexEnd) {
        subProjectCard.style.marginLeft = 'auto';
    }
    
    const techLine = subProject.tech ? `<p><em>${subProject.tech}</em></p>` : '';
    const projectNameLine = subProject.projectName ? `<h4>${subProject.projectName}</h4>` : '';
    
    subProjectCard.innerHTML = `
        ${projectNameLine}
        ${marked.parse(subProject.description)}
        ${techLine}
        `.trim();

    return subProjectCard;
}
