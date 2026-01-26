export interface SubProject {
    projectName?: string;
    description: string;
    tech?: string;
}

export interface Project {
    name: string;
    title: string;
    dates: string;
    subProjects: SubProject[];
}

export interface Company {
    companyName: string;
    startDate: string;
    endDate: string;
    projects: Project[];
}

export interface PersonalProject {
    title: string;
    description: string;
    tech: string;
}

export const workExperience: Company[] = [
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
                        description: `
- Led development of Chaldal's GIS platform for logistics and delivery optimization.
- Eliminated last mile address issues, reducing delivery delays by 20%.
- Integrated OpenStreetMap data and augmented building data with key attributes using mapping agents.
- Implemented address management and AI-powered building tagging and issue detection features to pre-emptively flag suspicious data.
                        `,
                        tech: "F#, C#, .NET Core, Python, SQL Server, Redis, OpenStreetMaps, Docker, React Leaflet, Azure DevOps"
                    },
                    {
                        projectName: "Self Hosted OSM Server",
                        description: `
- Developed a self-hosted OSM server to eliminate dependency on public servers and enhance performance.
- Hosted on a dedicated server, ensuring accessibility for the entire team.
                        `,
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
                        description: `
- Led development of ChaldalPay e-wallet and unified payment gateway.
- Integrated multiple banks, merchants, and utility providers, processing 5000+ daily transactions.
- Reduced processing time by 40% and cut payment charges by 2%.
- Architected distributed payment gateway using Subject (Chaldal's in-house F# and Microsoft Orleans framework), achieving 99.99% uptime and transaction lock-free concurrency.
- Led a team of 4 engineers.
- Led security compliance initiatives including PCI-DSS and Bangladesh Bank audits.
                        `,
                        tech: "F#, C#, Subject, Microsoft Orleans, SQL Server, Docker, Azure DevOps"
                    }
                ]
            },
            {
                name: "Pharmacy & Warehouse Operations",
                title: "Software Engineer",
                dates: "07/2020 - 06/2022",
                subProjects: [
                    {
                        projectName: "Chaldal Pharmacy",
                        description: `
- Architected Chaldal Pharmacy, handling 1000+ daily pharmacy orders with specialized pharmaceutical constraints.
- Managed delicate access requirements for Rx and other categories, frozen items, and special QC environments for medication.
- Implemented cross-warehouse movement to transfer pharmacy goods for last-mile delivery.
                        `,
                        tech: "C#, .NET Core, Entity Framework, SQL Server, Azure DevOps"
                    },
                    {
                        projectName: "Warehouse Management",
                        description: `  
- Led development of Chaldal's massive export warehouse project at Hemayetpur.
- Reimplemented stock requirement prediction algorithm in raw SQL to improve performance by 3x and accuracy by 10%.
                        `,
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
                        description: `
- Developed and maintained Upskill, a mobile app for learning and skill development.
                        `,
                        tech: "Flutter, Dart, Golang, PostgreSQL"
                    }
                ]
            }
        ]
    }
];

export const personalProjects: PersonalProject[] = [
    {
        title: "Home Automation Chatbot",
        description: `
- Built a cross-platform chatbot for home automation on Discord and Telegram using Ollama.
- Implemented an actor-based state machine architecture using Tokio tasks and mpsc channels.
- Achieved over 95% intent recognition and tool call accuracy with Local Ollama and Gemini API models.
        `,
        tech: "Rust, Tokio, Ollama, Gemini Api, Docker, Serenity, Telebot, MongoDB"
    },
    {
        title: "Home Server Infrastructure",
        description: `
- Personal home server running 10+ services, including local LLMs on Docker containers inside Proxmox VMs.
- Implemented CI/CD pipeline using Azure DevOps.
        `,
        tech: "Proxmox, Docker, Ollama, ROCm, RouterOS, Wireguard, Azure Pipelines, Windows Server, Clickhouse, Grafana"
    }
];
