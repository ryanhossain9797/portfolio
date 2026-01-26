import { Project } from '../data';
import { createSubProjectCard } from './subProjectCard';
import { createProjectHeader } from './projectHeader';

/**
 * Creates and returns an array of HTMLElements representing a single project,
 * including its header and all sub-project cards.
 * @param {Project} project - The project data.
 * @param {string} projectAlignment - The CSS alignment for the project (e.g., 'flex-start', 'flex-end').
 * @param {string} projectCardColorClass - The CSS class for card coloring (e.g., 'card-dark', 'card-medium').
 * @returns {HTMLElement[]} An array of HTMLElement objects for the project header and its sub-project cards.
 */
export function createProjectElements(project: Project, projectAlignment: string, projectCardColorClass: string): HTMLElement[] {
    const elements: HTMLElement[] = [];

    const projectHeader = createProjectHeader(project, projectAlignment);
    elements.push(projectHeader);
    
    project.subProjects.forEach((subProject) => {
        const subProjectCard = createSubProjectCard(subProject, projectCardColorClass, projectAlignment);
        elements.push(subProjectCard);
    });

    return elements;
}
