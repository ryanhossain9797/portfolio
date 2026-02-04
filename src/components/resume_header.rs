use yew::prelude::*;

#[function_component(ResumeHeader)]
pub fn resume_header() -> Html {
    html! {
        <header class="resume-header">
            <div class="header">
                <h1>{"Raiyan Hossain"}</h1>
            </div>
            <section class="summary">
                <p>{"Experienced Technical Lead and .NET Developer with a strong background in distributed systems, payment gateways, and logistics platforms. Proven expertise in C#, .NET Core, Microsoft Orleans, and cloud infrastructure. Adept at leading engineering teams and delivering scalable solutions in fast-paced environments."}</p>
                <div class="card-tags">
                    <a href="tel:+8801779579170" class="tag link">{"Phone"}</a>
                    <a href="mailto:ryanhossain9797@gmail.com" target="_blank" class="tag link">{"Email"}</a>
                    <a href="https://www.linkedin.com/in/raiyan-hossain-672185140/" target="_blank" class="tag link">{"LinkedIn"}</a>
                    <a href="https://github.com/ryanhossain9797" target="_blank" class="tag link">{"GitHub"}</a>
                </div>
            </section>
        </header>
    }
}
