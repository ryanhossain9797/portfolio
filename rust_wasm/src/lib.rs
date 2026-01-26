pub mod data;
mod components;

use yew::prelude::*;
use wasm_bindgen::prelude::wasm_bindgen;
use data::{get_work_experience, get_personal_projects};
use components::{CompanyHeader, ProjectHeader, SubProjectCard};

#[wasm_bindgen]
extern "C" {}

#[function_component(App)]
pub fn app() -> Html {
    let work_experience = get_work_experience();
    let personal_projects = get_personal_projects();

    html! {
        <div class="binder-page">
            <header>
                <h1>{ "Kazi Raiyan Hossain" }</h1>
                <h2>{ "Technical Lead & .NET Developer" }</h2>
            </header>

            <section class="experience-section">
                <header>
                    <h2>{ "Work Experience" }</h2>
                </header>
                <div id="experience-container" class="card-list card-list--bleed">
                    {work_experience.iter().map(|company| {
                        html! {
                            <>
                                <CompanyHeader company={company.clone()} />
                                {company.projects.iter().enumerate().map(|(project_index, project)| {
                                    html! {
                                        <>
                                            <ProjectHeader project={project.clone()} />
                                            {project.sub_projects.iter().map(|sub_project| {
                                                html! {
                                                    <SubProjectCard sub_project={sub_project.clone()} />
                                                }
                                            }).collect::<Html>()}
                                        </>
                                    }
                                }).collect::<Html>()}
                            </>
                        }
                    }).collect::<Html>()}
                </div>
            </section>
            <hr />
            <section class="projects-section">
                <header>
                    <h2>{ "Projects" }</h2>
                </header>
                <div id="projects-container" class="card-list card-list--bleed">
                    {personal_projects.iter().enumerate().map(|(index, project)| {
                        html! {
                            <SubProjectCard sub_project={project.clone()} />
                        }
                    }).collect::<Html>()}
                </div>
            </section>
        </div>
    }
}

#[wasm_bindgen::prelude::wasm_bindgen(start)]
pub fn run_app() {
    yew::Renderer::<App>::new().render();
}
