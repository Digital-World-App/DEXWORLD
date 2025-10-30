{
  description = "Ambiente de Desenvolvimento para o Painel Administrativo DEXWORLD";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-23.11";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, flake-utils }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = import nixpkgs {
          inherit system;
          config.allowUnfree = true;
        };

        tauri-build-deps = with pkgs; [
          pkg-config
          gcc  # CORREÇÃO APLICADA AQUI
          webkitgtk_4_1
          glib
          gtk3
          libayatana-appindicator
          librsvg
          openssl
          curl
          wget
          file
        ];
      in
      {
        devShells.default = pkgs.mkShell {
          buildInputs = [
            pkgs.nodejs_21
            pkgs.nodePackages.pnpm
            pkgs.rustc
            pkgs.cargo
          ] ++ tauri-build-deps;
        };
      });
}
