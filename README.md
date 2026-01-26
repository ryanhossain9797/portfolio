# Rust WASM Portfolio

This is a web portfolio project built with Rust and the Yew framework, compiled to WebAssembly (WASM) using `wasm-bindgen` and bundled with Trunk.

## Project Structure

*   `src/`: Contains the Rust source code for the Yew application.
    *   `main.rs`: The entry point of the Rust application.
    *   `lib.rs`: Library code.
    *   `components/`: Yew components.
    *   `data.rs`: Data structures or mock data.
*   `static/`: Static assets such as CSS, fonts, and images.
    *   `static/css/style.css`: Main stylesheet.
    *   `static/css/fonts/oxanium_variable.ttf`: Custom font.
*   `index.html`: The main HTML file, served by Trunk.
*   `Cargo.toml`: Rust project manifest.
*   `Trunk.toml`: Trunk build configuration.
*   `build.sh`: A shell script for building the project.
*   `vercel.json`: Vercel deployment configuration.

## Prerequisites

Before running this project, ensure you have the following installed:

*   **Rust**: Install Rust using `rustup`: `curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh`
*   **WASM Toolchain**: Add the WebAssembly target for Rust: `rustup target add wasm32-unknown-unknown`
*   **Trunk**: Install Trunk, the WASM web application bundler: `cargo install trunk`

## Building the Project

To build the project for production, run:

```bash
trunk build --release
```

This will generate optimized WASM, JavaScript, and other assets in the `dist/` directory.

Alternatively, you can use the provided `build.sh` script:

```bash
./build.sh
```

## Running Locally

To run the project in development mode with live-reloading, navigate to the project root and execute:

```bash
trunk serve --open
```

This will build the application and serve it at `http://127.0.0.1:8080` (or another available port), opening it in your default browser.

## Deployment

This project includes a `vercel.json` file, indicating it can be deployed to Vercel. Follow Vercel's documentation for deploying a static site with custom build commands.
