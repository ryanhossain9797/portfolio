pub mod data;

use yew::prelude::*;
use wasm_bindgen::prelude::wasm_bindgen;

#[wasm_bindgen]
extern "C" {}

#[function_component(App)]
pub fn app() -> Html {
    html! {
        <>
            <h1>{ "Hello, Yew!" }</h1>
            <p>{ "This is a basic Yew app scaffold." }</p>
        </>
    }
}

#[wasm_bindgen::prelude::wasm_bindgen(start)]
pub fn run_app() {
    yew::Renderer::<App>::new().render();
}

pub fn add(left: u64, right: u64) -> u64 {
    left + right
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn it_works() {
        let result = add(2, 2);
        assert_eq!(result, 4);
    }
}
