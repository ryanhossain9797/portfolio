const workExperienceData = [
    {
        title: "Technical Lead, Geographic Information Systems (GIS) Team",
        company: "Chaldal",
        dates: "08/2024 - 12/2025",
        description: "Leading development of Chaldal's GIS platform for logistics and delivery optimization, eliminating last mile address issues that require customer contact, which account for 20% of delivery delays. Integrated OpenStreetMap data and enabled mapping agents to augment building data with key attributes. Implemented address management and AI-powered building tagging and issue detection features to pre-emptively flag suspicious data.",
        tech: "F#, C#, .NET Core, Python, SQL Server, Redis, OpenStreetMaps, Docker, React Leaflet, Azure DevOps"
    },
    {
        title: "Technical Lead",
        company: "Chaldal Pay",
        dates: "07/2022 - 07/2024",
        description: "Led development of ChaldalPay e-wallet and unified payment gateway, integrating multiple banks, merchants, and utility providers to process 5000+ daily transactions, reduce processing time by 40%, and cut payment charges by 2%. Architected distributed payment gateway using Subject, Chaldal's in house distributed framework built with F# and Microsoft Orleans, achieving 99.99% uptime and transaction lock free concurrency while leading a team of 4 engineers. Led security compliance initiatives including PCI-DSS and Bangladesh Bank audits.",
        tech: "F#, C#, Subject, Microsoft Orleans, SQL Server, Docker, Azure DevOps"
    },
    {
        title: "Software Engineer",
        company: "Chaldal",
        dates: "07/2020 - 06/2022",
        description: "Architected Chaldal Pharmacy, handling 1000+ daily pharmacy orders with specialized pharmaceutical constraints. This project was a major milestone for Chaldal, as it was the first time they were entering the medicine delivery space. Led development of Chaldal's massive export warehouse project at Hemayetpur. Reimplemented stock requirement prediction alogrithm in raw SQL to improve performance by 3x and accuracy by 10%.",
        tech: "C#, .NET Core, Entity Framework, SQL Server, Azure DevOps"
    },
    {
        title: "App and Backend Developer",
        company: "Upskill",
        dates: "03/2020 - 06/2020",
        description: "Developed and maintained Upskill, a mobile app for learning and skill development.",
        tech: "Flutter, Dart, Golang, PostgreSQL"
    }
];

const projectsData = [
    {
        title: "Home Automation Chatbot",
        company: "Personal Project",
        dates: "Rust, Tokio, Ollama, Gemini Api, Docker, Serenity, Telebot, MongoDB",
        description: "Built a cross-platform chatbot for home automation on Discord and Telegram leveraging Ollama. Implemented an actor based state machine architecture using Tokio tasks and mpsc channels. Achieved over 95% intent recognition and tool call accuracy with Local Ollama and Gemini Api models.",
        tech: ""
    },
    {
        title: "Home Server Infrastructure",
        company: "Personal Project",
        dates: "Proxmox, Docker, Ollama, ROCm, RouterOS, Wireguard, Azure Pipelines, Windows Server, Clickhouse, Grafana",
        description: "Personal home server with 10+ services including local LLMs on Docker containers inside Proxmox VMs. Implemented CI/CD pipeline using Azure DevOps.",
        tech: ""
    }
];

function generateCards(data, container, useTechInDate = false) {
    data.forEach((item, index) => {
        const card = document.createElement('div');
        const cardColorClass = index % 2 === 0 ? 'card-dark' : 'card-medium';
        card.classList.add('card', cardColorClass);

        let detailsLine = `<p><strong>${item.company}</strong> | ${item.dates}</p>`;
        if (useTechInDate) {
            detailsLine = `<p><strong>Tech:</strong> ${item.dates}</p>`;
        }
        
        let techLine = item.tech ? `<p><em>${item.tech}</em></p>` : '';

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

generateCards(workExperienceData, experienceContainer);
generateCards(projectsData, projectsContainer, true);
