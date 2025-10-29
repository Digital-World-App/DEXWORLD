#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    // RECOMENDAÇÃO: Mover a senha para uma variável de ambiente para maior segurança.
    // Em um terminal, você pode definir a senha com: export STRONGHOLD_PASSWORD="sua-senha-aqui"
    // O ideal em produção é solicitar a senha ao usuário através de uma nova janela.
    let stronghold_password = std::env::var("STRONGHOLD_PASSWORD")
        .unwrap_or_else(|_| "uma-senha-muito-segura-para-dev".to_string());

    tauri::Builder::default()
        .plugin(tauri_plugin_http::init())
        .plugin(
            // ATENÇÃO: Usando uma senha fixa para desenvolvimento.
            // Mude para uma solução mais segura em produção.
            tauri_plugin_stronghold::Builder::new(stronghold_password.as_bytes().to_vec()).build(),
        )
        .plugin(tauri_plugin_shell::init())
        .plugin(tauri_plugin_window::init())
        // O plugin opener já está no seu package.json, então vamos registrá-lo também.
        .plugin(tauri_plugin_opener::init())
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
