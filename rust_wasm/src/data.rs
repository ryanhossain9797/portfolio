#[derive(Clone, Debug, PartialEq)]
pub struct SubProject {
    pub project_name: Option<String>,
    pub description: String,
    pub tech: Option<String>,
}

#[derive(Clone, Debug, PartialEq)]
pub struct Project {
    pub name: String,
    pub title: String,
    pub dates: String,
    pub sub_projects: Vec<SubProject>,
}

#[derive(Clone, Debug, PartialEq)]
pub struct Company {
    pub company_name: String,
    pub start_date: String,
    pub end_date: String,
    pub projects: Vec<Project>,
}

pub fn get_work_experience() -> Vec<Company> {
    vec![
        Company {
            company_name: "Chaldal".to_string(),
            start_date: "07/2020".to_string(),
            end_date: "12/2025".to_string(),
            projects: vec![
                Project {
                    name: "Geographic Information Systems (GIS) Platform".to_string(),
                    title: "Technical Lead, Geographic Information Systems (GIS) Team".to_string(),
                    dates: "08/2024 - 12/2025".to_string(),
                    sub_projects: vec![
                        SubProject {
                            project_name: Some("GIS Platform".to_string()),
                            description: "- Led development of Chaldal's GIS platform for logistics and delivery optimization.\n- Eliminated last mile address issues, reducing delivery delays by 20%.\n- Integrated OpenStreetMap data and augmented building data with key attributes using mapping agents.\n- Implemented address management and AI-powered building tagging and issue detection features to pre-emptively flag suspicious data.".to_string(),
                            tech: Some("F#, C#, .NET Core, Python, SQL Server, Redis, OpenStreetMaps, Docker, React Leaflet, Azure DevOps".to_string()),
                        },
                        SubProject {
                            project_name: Some("Self Hosted OSM Server".to_string()),
                            description: "- Developed a self-hosted OSM server to eliminate dependency on public servers and enhance performance.\n- Hosted on a dedicated server, ensuring accessibility for the entire team.".to_string(),
                            tech: Some("Linux, OSM, Docker, Azure DevOps".to_string()),
                        },
                    ],
                },
                Project {
                    name: "ChaldalPay".to_string(),
                    title: "Technical Lead".to_string(),
                    dates: "07/2022 - 07/2024".to_string(),
                    sub_projects: vec![
                        SubProject {
                            project_name: Some("ChaldalPay".to_string()),
                            description: "- Led development of ChaldalPay e-wallet and unified payment gateway.\n- Integrated multiple banks, merchants, and utility providers, processing 5000+ daily transactions.\n- Reduced processing time by 40% and cut payment charges by 2%.\n- Architected distributed payment gateway using Subject (Chaldal's in-house F# and Microsoft Orleans framework), achieving 99.99% uptime and transaction lock-free concurrency.\n- Led a team of 4 engineers.\n- Led security compliance initiatives including PCI-DSS and Bangladesh Bank audits.".to_string(),
                            tech: Some("F#, C#, Subject, Microsoft Orleans, SQL Server, Docker, Azure DevOps".to_string()),
                        },
                    ],
                },
                Project {
                    name: "Pharmacy & Warehouse Operations".to_string(),
                    title: "Software Engineer".to_string(),
                    dates: "07/2020 - 06/2022".to_string(),
                    sub_projects: vec![
                        SubProject {
                            project_name: Some("Chaldal Pharmacy".to_string()),
                            description: "- Architected Chaldal Pharmacy, handling 1000+ daily pharmacy orders with specialized pharmaceutical constraints.\n- Managed delicate access requirements for Rx and other categories, frozen items, and special QC environments for medication.\n- Implemented cross-warehouse movement to transfer pharmacy goods for last-mile delivery.".to_string(),
                            tech: Some("C#, .NET Core, Entity Framework, SQL Server, Azure DevOps".to_string()),
                        },
                        SubProject {
                            project_name: Some("Warehouse Management".to_string()),
                            description: "- Led development of Chaldal's massive export warehouse project at Hemayetpur.\n- Reimplemented stock requirement prediction algorithm in raw SQL to improve performance by 3x and accuracy by 10%.".to_string(),
                            tech: Some("C#, .NET Core, Entity Framework, SQL Server, Azure DevOps".to_string()),
                        },
                    ],
                },
            ],
        },
        Company {
            company_name: "Upskill".to_string(),
            start_date: "03/2020".to_string(),
            end_date: "06/2020".to_string(),
            projects: vec![
                Project {
                    name: "Upskill Mobile App".to_string(),
                    title: "App and Backend Developer".to_string(),
                    dates: "03/2020 - 06/2020".to_string(),
                    sub_projects: vec![
                        SubProject {
                            project_name: Some("Mobile App".to_string()),
                            description: "- Developed and maintained Upskill, a mobile app for learning and skill development.".to_string(),
                            tech: Some("Flutter, Dart, Golang, PostgreSQL".to_string()),
                        },
                    ],
                },
            ],
        },
    ]
}

pub fn get_personal_projects() -> Vec<SubProject> {
    vec![
        SubProject {
            project_name: Some("Home Automation Chatbot".to_string()),
            description: "- Built a cross-platform chatbot for home automation on Discord and Telegram using Ollama.\n- Implemented an actor-based state machine architecture using Tokio tasks and mpsc channels.\n- Achieved over 95% intent recognition and tool call accuracy with Local Ollama and Gemini API models.".to_string(),
            tech: Some("Rust, Tokio, Ollama, Gemini Api, Docker, Serenity, Telebot, MongoDB".to_string()),
        },
        SubProject {
            project_name: Some("Home Server Infrastructure".to_string()),
            description: "- Personal home server running 10+ services, including local LLMs on Docker containers inside Proxmox VMs.\n- Implemented CI/CD pipeline using Azure DevOps.".to_string(),
            tech: Some("Proxmox, Docker, Ollama, ROCm, RouterOS, Wireguard, Azure Pipelines, Windows Server, Clickhouse, Grafana".to_string()),
        },
    ]
}
