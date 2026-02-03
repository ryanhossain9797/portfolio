#[derive(Clone, Debug, PartialEq)]
pub struct SubProject {
    pub project_name: &'static str,
    pub description: &'static str,
    pub tech: Vec<&'static str>,
}

#[derive(Clone, Debug, PartialEq)]
pub struct Project {
    pub name: &'static str,
    pub title: &'static str,
    pub dates: &'static str,
    pub sub_projects: Vec<SubProject>,
}

#[derive(Clone, Debug, PartialEq)]
pub struct Company {
    pub company_name: &'static str,
    pub start_date: &'static str,
    pub end_date: &'static str,
    pub projects: Vec<Project>,
}

pub fn get_work_experience() -> Vec<Company> {
    vec![
        Company {
            company_name: "Chaldal",
            start_date: "07/2020",
            end_date: "12/2025",
            projects: vec![
                Project {
                    name: "Geographic Information Systems (GIS) Platform",
                    title: "Technical Lead, Geographic Information Systems (GIS) Team",
                    dates: "08/2024 - 12/2025",
                    sub_projects: vec![
                        SubProject {
                            project_name: "GIS Platform",
                            description: "- Led development of Chaldal's GIS platform for logistics and delivery optimization.\n- Eliminated last mile address issues, reducing delivery delays by 20%.\n- Integrated OpenStreetMap data and augmented building data with key attributes using mapping agents.\n- Implemented address management and AI-powered building tagging and issue detection features to pre-emptively flag suspicious data.",
                            tech: vec![
                                "F#",
                                "C#",
                                ".NET Core",
                                "Python",
                                "SQL Server",
                                "Redis",
                                "OpenStreetMaps",
                                "Docker",
                                "React Leaflet",
                                "Azure DevOps",
                            ],
                        },
                        SubProject {
                            project_name: "Self Hosted OSM Server",
                            description: "- Developed a self-hosted OSM server to eliminate dependency on public servers and enhance performance.\n- Hosted on a dedicated server, ensuring accessibility for the entire team.",
                            tech: vec!["Linux", "OSM", "Docker", "Azure DevOps"],
                        },
                    ],
                },
                Project {
                    name: "ChaldalPay",
                    title: "Technical Lead",
                    dates: "07/2022 - 07/2024",
                    sub_projects: vec![SubProject {
                        project_name: "ChaldalPay",
                        description: "- Led development of ChaldalPay e-wallet and unified payment gateway.\n- Integrated multiple banks, merchants, and utility providers, processing 5000+ daily transactions.\n- Reduced processing time by 40% and cut payment charges by 2%.\n- Architected distributed payment gateway using Subject (Chaldal's in-house F# and Microsoft Orleans framework), achieving 99.99% uptime and transaction lock-free concurrency.\n- Led a team of 4 engineers.\n- Led security compliance initiatives including PCI-DSS and Bangladesh Bank audits.",
                        tech: vec![
                            "F#",
                            "C#",
                            "Subject",
                            "Microsoft Orleans",
                            "SQL Server",
                            "Docker",
                            "Azure DevOps",
                        ],
                    }],
                },
                Project {
                    name: "Pharmacy & Warehouse Operations",
                    title: "Software Engineer",
                    dates: "07/2020 - 06/2022",
                    sub_projects: vec![
                        SubProject {
                            project_name: "Chaldal Pharmacy",
                            description: "- Architected Chaldal Pharmacy, handling 1000+ daily pharmacy orders with specialized pharmaceutical constraints.\n- Managed delicate access requirements for Rx and other categories, frozen items, and special QC environments for medication.\n- Implemented cross-warehouse movement to transfer pharmacy goods for last-mile delivery.",
                            tech: vec![
                                "C#",
                                ".NET Core",
                                "Entity Framework",
                                "SQL Server",
                                "Azure DevOps",
                            ],
                        },
                        SubProject {
                            project_name: "Warehouse Management",
                            description: "- Led development of Chaldal's massive export warehouse project at Hemayetpur.\n- Reimplemented stock requirement prediction algorithm in raw SQL to improve performance by 3x and accuracy by 10%.",
                            tech: vec![
                                "C#",
                                ".NET Core",
                                "Entity Framework",
                                "SQL Server",
                                "Azure DevOps",
                            ],
                        },
                    ],
                },
            ],
        },
        Company {
            company_name: "Upskill",
            start_date: "03/2020",
            end_date: "06/2020",
            projects: vec![Project {
                name: "Upskill Mobile App",
                title: "App and Backend Developer",
                dates: "03/2020 - 06/2020",
                sub_projects: vec![SubProject {
                    project_name: "Mobile App",
                    description: "- Developed and maintained Upskill, a mobile app for learning and skill development.",
                    tech: vec!["Flutter", "Dart", "Golang", "PostgreSQL"],
                }],
            }],
        },
    ]
}

pub fn get_personal_projects() -> Vec<SubProject> {
    vec![
        SubProject {
            project_name: "Home Automation Chatbot",
            description: "- Built a cross-platform chatbot for home automation on Discord and Telegram using Ollama.\n- Implemented an actor-based state machine architecture using Tokio tasks and mpsc channels.\n- Achieved over 95% intent recognition and tool call accuracy with Local Ollama and Gemini API models.",
            tech: vec![
                "Rust",
                "Tokio",
                "Ollama",
                "Gemini API",
                "Docker",
                "Serenity",
                "Telebot",
                "MongoDB",
            ],
        },
        SubProject {
            project_name: "Home Server Infrastructure",
            description: "- Personal home server running 10+ services, including local LLMs on Docker containers inside Proxmox VMs.\n- Implemented CI/CD pipeline using Azure DevOps.",
            tech: vec![
                "Proxmox",
                "Docker",
                "Ollama",
                "ROCm",
                "RouterOS",
                "Wireguard",
                "Azure Pipelines",
                "Windows Server",
                "Clickhouse",
                "Grafana",
            ],
        },
    ]
}
