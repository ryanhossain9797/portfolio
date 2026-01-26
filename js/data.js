export const workExperience = [
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

export const personalProjects = [
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
