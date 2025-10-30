
{ pkgs, ... }: {
  # Entradas para as ferramentas e pacotes do seu ambiente
  packages = [
    # O compilador Rust e o gerenciador de pacotes Cargo
    pkgs.rust-bin.stable.latest.default
    
    # Dependências do Tauri para compilação no Linux
    pkgs.webkitgtk
    pkgs.gtk3
    pkgs.cairo
    pkgs.gdk-pixbuf
    pkgs.glib
    pkgs.dbus
    pkgs.openssl
    pkgs.librsvg

    # Node.js e npm (essenciais para o frontend)
    pkgs.nodejs
  ];
  # Adicionando um comentário para forçar a recarga do ambiente.
}
