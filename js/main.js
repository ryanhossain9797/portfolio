const workExperience = [
    {
        companyName: "Chaldal",
        startDate: "07/2020",
        endDate: "12/2025",
        projects: [
            {
                name: "Geographic Information Systems (GIS) Platform",
                title: "Technical Lead, Geographic Information Systems (GIS) Team",
                dates: "08/2024 - 12/2025",
                subProjects: [
                    {
                        projectName: "GIS Platform",
                        description: "Leading development of Chaldal's GIS platform for logistics and delivery optimization, eliminating last mile address issues that require customer contact, which account for 20% of delivery delays. Integrated OpenStreetMap data and enabled mapping agents to augment building data with key attributes. Implemented address management and AI-powered building tagging and issue detection features to pre-emptively flag suspicious data.",
                        tech: "F#, C#, .NET Core, Python, SQL Server, Redis, OpenStreetMaps, Docker, React Leaflet, Azure DevOps"
                    },
                    {
                        projectName: "Self Hosted OSM Server",
                        description: "Developed a self hosted OSM server to avoid dependency on public servers and improve performance. The server is hosted on a dedicated server and is accessible to the entire team.",
                        tech: "Linux, OSM, Docker, Azure DevOps"
                    }
                ]
            },
            {
                name: "ChaldalPay",
                title: "Technical Lead",
                dates: "07/2022 - 07/2024",
                subProjects: [
                    {
                        projectName: "ChaldalPay",
                        description: "Led development of ChaldalPay e-wallet and unified payment gateway, integrating multiple banks, merchants, and utility providers to process 5000+ daily transactions, reduce processing time by 40%, and cut payment charges by 2%. Architected distributed payment gateway using Subject, Chaldal's in house distributed framework built with F# and Microsoft Orleans, achieving 99.99% uptime and transaction lock free concurrency while leading a team of 4 engineers. Led security compliance initiatives including PCI-DSS and Bangladesh Bank audits.",
                        tech: "F#, C#, Subject, Microsoft Orleans, SQL Server, Docker, Azure DevOps"
                    }
                ]
            },
            {
                name: "Pharmacy & Warehouse Systems",
                title: "Software Engineer",
                dates: "07/2020 - 06/2022",
                subProjects: [
                    {
                        projectName: "Chaldal Pharmacy",
                        description: "Architected Chaldal Pharmacy, handling 1000+ daily pharmacy orders with specialized pharmaceutical constraints. This project was a major milestone for Chaldal, as it was the first time they were entering the medicine delivery space. Led development of Chaldal's massive export warehouse project at Hemayetpur. Reimplemented stock requirement prediction alogrithm in raw SQL to improve performance by 3x and accuracy by 10%.",
                        tech: "C#, .NET Core, Entity Framework, SQL Server, Azure DevOps"
                    }
                ]
            }
        ]
    },
    {
        companyName: "Upskill",
        startDate: "03/2020",
        endDate: "06/2020",
        projects: [
            {
                name: "Upskill Mobile App",
                title: "App and Backend Developer",
                dates: "03/2020 - 06/2020",
                subProjects: [
                    {
                        description: "Developed and maintained Upskill, a mobile app for learning and skill development.",
                        tech: "Flutter, Dart, Golang, PostgreSQL"
                    }
                ]
            }
        ]
    }
];

const personalProjects = [
    {
        title: "Home Automation Chatbot",
        description: "Built a cross-platform chatbot for home automation on Discord and Telegram leveraging Ollama. Implemented an actor based state machine architecture using Tokio tasks and mpsc channels. Achieved over 95% intent recognition and tool call accuracy with Local Ollama and Gemini Api models.",
        tech: "Rust, Tokio, Ollama, Gemini Api, Docker, Serenity, Telebot, MongoDB"
    },
    {
        title: "Home Server Infrastructure",
        description: "Personal home server with 10+ services including local LLMs on Docker containers inside Proxmox VMs. Implemented CI/CD pipeline using Azure DevOps.",
        tech: "Proxmox, Docker, Ollama, ROCm, RouterOS, Wireguard, Azure Pipelines, Windows Server, Clickhouse, Grafana"
    }
];

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
