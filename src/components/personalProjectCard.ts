import { PersonalProject } from '../data.js';
import { marked } from '../marked.esm.js';

/**
 * Creates and returns an HTMLElement representing a single personal project card.
 * @param {PersonalProject} item - The personal project data.
 * @param {string} cardColorClass - The CSS class for the card's color.
 * @param {boolean} useTechInDate - Whether to include tech information in the date line.
 * @returns {HTMLElement} The created personal project card element.
 */
export function createPersonalProjectCard(item: PersonalProject, cardColorClass: string): HTMLElement {
    const card = document.createElement('div');
    card.classList.add('card', cardColorClass);

    const techLine = `<p><em>${item.tech}</em></p>`;

    card.innerHTML = `
        <h3>${item.title}</h3>
        ${marked.parse(item.description)}
        ${techLine}
    `;

    return card;
}
