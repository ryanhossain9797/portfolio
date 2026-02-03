use crate::data::SubProject;
use comrak::markdown_to_html;
use yew::prelude::*;

#[derive(Properties, Clone, PartialEq)]
pub struct Props {
    pub sub_project: SubProject,
}

fn render_markdown(md: &str) -> Html {
    let options = comrak::Options::default();
    let html = markdown_to_html(md, &options);
    // Use Html::from_html_unchecked to render raw HTML
    Html::from_html_unchecked(AttrValue::from(html))
}

#[function_component(SubProjectCard)]
pub fn sub_project_card(props: &Props) -> Html {
    let sub_project = &props.sub_project;

    let tech_tags: Vec<Html> = sub_project
        .tech
        .iter()
        .map(|tech| {
            let tech_str = *tech;
            html! {
                <span class="tag">{ tech_str }</span>
            }
        })
        .collect();

    html! {
        <div class="card card-subproject">
            <h4>{ sub_project.project_name }</h4>
            <div class="description">{ render_markdown(&sub_project.description) }</div>
            <div class="card-tags">
                { tech_tags }
            </div>
        </div>
    }
}
