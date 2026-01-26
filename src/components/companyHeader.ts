import { Company } from '../data.js';

/**
 * Creates and returns an HTMLElement representing a company header.
 * @param {Company} company - The company data.
 * @returns {HTMLElement} The created company header element.
 */
export function createCompanyHeader(company: Company): HTMLElement {
    const companyHeader = document.createElement('div');
    companyHeader.classList.add('company-header');
    companyHeader.innerHTML = `
        <h3>${company.companyName}</h3>
        <p><strong>${company.startDate} - ${company.endDate}</strong></p>
    `;
    return companyHeader;
}
