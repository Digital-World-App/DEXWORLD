// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

fn main() {
    // Chama a função `run` definida em `src-tauri/src/lib.rs`
    dexworld_admin::run();
}
