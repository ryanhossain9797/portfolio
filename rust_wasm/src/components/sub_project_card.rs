use yew::prelude::*;
use crate::data::SubProject;

#[derive(Properties, Clone, PartialEq)]
pub struct Props {
    pub sub_project: SubProject,
    #[prop_or_default]
    pub color_class: String,
}

#[function_component(SubProjectCard)]
pub fn sub_project_card(props: &Props) -> Html {
    let sub_project = &props.sub_project;
    let description_lines: Vec<&str> = sub_project.description.lines().collect();
    let color_class = if props.color_class.is_empty() {
        "card-dark".to_string()
    } else {
        props.color_class.clone()
    };
    
    html! {
        <div class={format!("card card-subproject {}", color_class)}>
            {if let Some(ref name) = sub_project.project_name {
                html! {
                    <h4>{ name }</h4>
                }
            } else {
                html! {}
            }}
            <div class="description">
                {description_lines.iter().filter(|line| !line.is_empty()).map(|line| {
                    html! {
                        <p>{ *line }</p>
                    }
                }).collect::<Html>()}
            </div>
            {if let Some(ref tech) = sub_project.tech {
                html! {
                    <p><em>{ tech }</em></p>
                }
            } else {
                html! {}
            }}
        </div>
    }
}
