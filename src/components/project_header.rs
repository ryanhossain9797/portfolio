use yew::prelude::*;
use crate::data::Project;

#[derive(Properties, Clone, PartialEq)]
pub struct Props {
    pub project: Project,
}

#[function_component(ProjectHeader)]
pub fn project_header(props: &Props) -> Html {
    let project = &props.project;
    html! {
        <div class="project-header">
            <h3>{ &project.name }</h3>
            <h4>{ &project.title }</h4>
            <p>{ &project.dates }</p>
        </div>
    }
}
