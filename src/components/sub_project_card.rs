use comrak::markdown_to_html;
use yew::prelude::*;
use crate::data::SubProject;

#[derive(Properties, Clone, PartialEq)]
pub struct Props {
    pub sub_project: SubProject,
    #[prop_or_default]
    pub color_class: String,
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
    let color_class = if props.color_class.is_empty() {
        "card-left".to_string()
    } else {
        props.color_class.clone()
    };
    
    html! {
        <div class={format!("card card-subproject {}", color_class)}>
            <h4>{ sub_project.project_name }</h4>
            <div class="description">{ render_markdown(&sub_project.description) }</div>
            <p><em>{ sub_project.tech }</em></p>
        </div>
    }
}
