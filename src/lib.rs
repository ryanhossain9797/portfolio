mod components;
pub mod data;

use components::{CompanyHeader, ProjectHeader, SubProjectCard};
use data::{get_personal_projects, get_work_experience};
use wasm_bindgen::prelude::wasm_bindgen;
use yew::prelude::*;

#[wasm_bindgen]
extern "C" {}

#[function_component(App)]
pub fn app() -> Html {
    let work_experience = get_work_experience();
    let personal_projects = get_personal_projects();

    let work_exp_elements: Vec<Html> = work_experience
        .iter()
        .flat_map(|company| {
            let company_header = html! { <CompanyHeader company={company.clone()} /> };
            let project_elements = company
                .projects
                .iter()
                .enumerate()
                .flat_map(|(project_index, project)| {
                    let project_header = html! { <ProjectHeader project={project.clone()} /> };
                    let sub_project_elements = project
                        .sub_projects
                        .iter()
                        .map(|sub_project| {
                            html! {<SubProjectCard sub_project={sub_project.clone()} />}
                        })
                        .collect::<Vec<Html>>();
                    std::iter::once(project_header).chain(sub_project_elements.into_iter())
                })
                .collect::<Vec<Html>>();
            std::iter::once(company_header).chain(project_elements.into_iter())
        })
        .collect();

    let personal_exp_elements: Vec<Html> = personal_projects
        .iter()
        .map(|sub_project| {
            html! { <SubProjectCard sub_project={sub_project.clone()} /> }
        })
        .collect();

    html! {
        <div class="binder-page">
            <header>
                <h1>{ "Kazi Raiyan Hossain" }</h1>
                <h2>{ "Technical Lead & .NET Developer" }</h2>
            </header>

            <section class="experience-section">
                <header><h2>{ "Work Experience" }</h2></header>
                <div id="experience-container" class="card-list card-list--bleed">
                    {work_exp_elements}
                </div>
            </section>

            <hr />

            <section class="projects-section">
                <header><h2>{ "Projects" }</h2></header>

                <div id="projects-container" class="card-list card-list--bleed">
                    {personal_exp_elements}
                </div>
            </section>
        </div>
    }
}

#[wasm_bindgen::prelude::wasm_bindgen(start)]
pub fn run_app() {
    yew::Renderer::<App>::new().render();
}
