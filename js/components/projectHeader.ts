import { Project } from '../data';

/**
 * Creates and returns an HTMLElement representing a project header.
 * @param {Project} project - The project data.
 * @param {string} projectAlignment - The CSS alignment for the project (e.g., 'flex-start', 'flex-end').
 * @returns {HTMLElement} The created project header element.
 */
export function createProjectHeader(project: Project, projectAlignment: string): HTMLElement {
    const projectHeader = document.createElement('div');
    projectHeader.classList.add('project-header');

    if (projectAlignment === 'flex-end') {
        projectHeader.style.marginLeft = 'auto';
    }

    projectHeader.innerHTML = `
        <h4>${project.name}</h4>
        <p><strong>${project.title}</strong> | ${project.dates}</p>
    `;

    return projectHeader;
}
