{
  description = "Ambiente de Desenvolvimento para o Painel Administrativo DEXWORLD";

  inputs = {
    # Usamos um canal estável do Nixpkgs para garantir reprodutibilidade.
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-23.11";
    # Utilitário para facilitar a criação de flakes para múltiplos sistemas.
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, flake-utils }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = import nixpkgs {
          inherit system;
          # Permite a instalação de pacotes com licenças não-livres, se necessário.
          config.allowUnfree = true;
        };

        # Dependências de sistema para o Tauri v2 no Linux (baseado em Debian/Ubuntu)
        # Essencial para a compilação do backend e da webview.
        tauri-build-deps = with pkgs; [
          # Essenciais para compilação C/C++
          pkg-config
          build-essential

          # Dependências do WebKitGTK (o motor do navegador)
          webkitgtk_4_1
          glib
          gtk3

          # Dependências para ícones na bandeja do sistema e outras integrações
          libayatana-appindicator
          librsvg

          # Bibliotecas comuns necessárias
          openssl
          curl
          wget
          file
        ];
      in
      {
        devShells.default = pkgs.mkShell {
          buildInputs = [
            # Ferramentas de desenvolvimento principais
            pkgs.nodejs_20 # Versão LTS recomendada
            pkgs.pnpm
            pkgs.rustc
            pkgs.cargo
          ] ++ tauri-build-deps;
        };
      });
}