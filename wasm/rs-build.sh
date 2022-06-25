#!/bin/sh

set -e

cargo fmt
cargo test
wasm-pack build --out-dir ../lib/wasm_modules
