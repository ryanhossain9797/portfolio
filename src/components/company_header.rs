use crate::data::Company;
use yew::prelude::*;

#[derive(Properties, Clone, PartialEq)]
pub struct Props {
    pub company: Company,
}

#[function_component(CompanyHeader)]
pub fn company_header(props: &Props) -> Html {
    let company = &props.company;
    html! {
        <div class="company-header">
            <h3>{ company.company_name }</h3>
            <p><strong>{ format!("{} - {}", company.start_date, company.end_date) }</strong></p>
            <hr />
        </div>
    }
}
