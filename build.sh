#!/bin/bash

# Install Rustup with a minimal profile and say yes to prompts
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh -s -- -y --profile minimal

# Add Cargo's bin directory to the PATH for the current shell session
source "$HOME/.cargo/env"

# Add the WebAssembly target
rustup target add wasm32-unknown-unknown

# Install Trunk
cargo install --locked trunk

# Build the project in release mode
trunk build --release