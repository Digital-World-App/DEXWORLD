# Painel Administrativo Desktop DEXWORLD

![Status do Build](https://img.shields.io/github/actions/workflow/status/[seu-usuario]/[seu-repo]/release.yml?branch=main)
![Versão](https://img.shields.io/github/v/release/[seu-usuario]/[seu-repo])
![Licença](https://img.shields.io/badge/licen%C3%A7a-MIT-blue.svg)

Um painel administrativo desktop seguro e multiplataforma (Windows, macOS, Linux) para orquestração de sistemas web, interações com a blockchain e gerenciamento de arquivos no IPFS.

---

## 📖 Sumário

- [Sobre o Projeto](#-sobre-o-projeto)
- [Principais Integrações](#-principais-integrações)
- [Metodologia de Segurança](#️-metodologia-de-segurança)
- [Stack de Tecnologia](#-stack-de-tecnologia)
- [Estrutura de Diretórios](#-estrutura-de-diretórios)
- [Começando](#-começando)
- [Licença](#️-licença)

## 🎯 Sobre o Projeto

Este aplicativo é um **"Hub de Orquestração"** desktop projetado para administradores e usuários avançados. Ele fornece uma interface unificada para gerenciar operações complexas que envolvem múltiplos sistemas:

- Interação com a API de um **WebApp** principal.
- Execução de transações e leitura de dados de uma **Blockchain**.
- Gerenciamento (upload/download) de arquivos no **IPFS**.

Construído com [Tauri](https://tauri.app/), ele é extremamente leve, rápido e prioriza a segurança, rodando nativamente em Windows, macOS e Linux com um único binário.

## 🔗 Principais Integrações

O aplicativo funciona como um agregador de APIs, centralizando o controle:

- **API do WebApp:** Consumo de endpoints REST (ou gRPC) para gerenciamento de dados do aplicativo web principal.
- **Blockchain:** Conexão direta com redes EVM (ex: Ethereum, Polygon) para:
  - Enviar transações assinadas.
  - Ler o estado de Smart Contracts.
  - Consultar saldos e históricos.
- **IPFS (InterPlanetary File System):** Integração com um gateway (como Pinata ou um nó local) para fazer "pin" (upload) e download de arquivos de forma descentralizada.

## 🛡️ Metodologia de Segurança

A segurança é o pilar deste projeto, especialmente no manuseio de chaves privadas da blockchain.

**NUNCA ARMAZENAMOS CHAVES PRIVADAS EM TEXTO PLANO.**

Nossa abordagem é:

1. **Armazenamento Seguro com Stronghold:** Chaves privadas (ou *seed phrases*) são criptografadas e armazenadas em um "cofre" seguro gerenciado pelo `tauri-plugin-stronghold`. Este plugin usa o framework de segurança IOTA Stronghold para fornecer proteção de nível de produção contra vazamentos de memória e ataques de persistência. O cofre é protegido por uma senha gerenciada pelo usuário.
    - **Windows:** Usa `DPAPI` para proteção adicional.
    - **macOS:** Usa o `Keychain` para proteção adicional.
    - **Linux:** Usa o `Secret Service` para proteção adicional.
2. **Isolamento de Lógica:** A lógica de segurança é estritamente isolada no backend Rust, expondo apenas os comandos necessários para o frontend.
3. **Permissões Restritas:** O Tauri é configurado com um conjunto mínimo de permissões de API (definido em `tauri.conf.json`), impedindo que o frontend acesse partes sensíveis do sistema sem autorização explícita.
4. **(Recomendação Futura):** Suporte para Hardware Wallets (Ledger, Trezor) para assinar transações, eliminando completamente a necessidade de armazenar chaves no software.

## 🛠️ Stack de Tecnologia

Esta seção detalha as principais tecnologias e versões utilizadas no projeto, garantindo um ambiente de desenvolvimento consistente. As versões listadas são baseadas nos arquivos `package.json` e `src-tauri/Cargo.toml`.

### Ambiente de Desenvolvimento

| Tecnologia | Função | Versão Utilizada |
| :--- | :--- | :--- |
| **Rust** | Linguagem do backend (core do Tauri) | (Conforme `src-tauri/Cargo.toml`) |
| **Node.js**| Ambiente de execução para o frontend | `^18.0.0` ou superior |
| **npm** | Gerenciador de pacotes do Node.js | `^9.0.0` ou superior |
| **Tauri CLI**| Ferramenta de linha de comando para Tauri v2 | `^2.0.0-beta.16` |

### Backend (Rust Crates)

Dependências gerenciadas pelo `src-tauri/Cargo.toml`.

| Dependência (Crate) | Função | Versão |
| :--- | :--- | :--- |
| **tauri** | Framework principal do backend nativo | `^2.0.0-beta.8` |
| **tauri-build** | Ferramenta de compilação do Tauri | (Conforme `Cargo.toml`) |
| **tauri-plugin-stronghold** | Armazenamento seguro de chaves | `^2.0.0-beta.6` |
| **tauri-plugin-http** | Cliente HTTP para o backend Rust | `^2.0.0-beta.4` |
| **tauri-plugin-shell** | Interação com o shell do SO | `^2.0.0-beta.4` |
| **serde / serde_json** | Serialização/Desserialização de dados | `1.0` |

### Frontend (JavaScript/TypeScript)

Dependências gerenciadas pelo `package.json`.

| Categoria | Dependência | Função | Versão |
| :--- | :--- | :--- | :--- |
| **Core** | **React** | Biblioteca principal para construir a UI | `^18.2.0` |
| | **Vite** | Ferramenta de build e dev server | `^5.2.10` |
| | **TypeScript** | Linguagem principal do frontend | `^5.4.5` |
| **Navegação** | **React Router DOM** | Gerenciamento de rotas e páginas | `^6.23.0` |
| **Estilo** | **Bootstrap** | Framework CSS base | `^5.3.3` |
| | **React Bootstrap** | Componentes React para Bootstrap | `^2.10.2` |
| | **Sass** | Pré-processador CSS | `^1.75.0` |
| **API Tauri** | **@tauri-apps/api**| API JS para chamar o backend Rust | `^2.0.0-beta.8` |
| | **@tauri-apps/plugin-* ** | APIs JS para os plugins Rust | (Conforme `package.json`) |


## 📂 Estrutura de Diretórios

A estrutura de diretórios do projeto é organizada para separar as responsabilidades e facilitar a manutenção.

```shell
/
|-- src/                     # <-- Frontend Code (TypeScript/React)
|   |-- components/          # Componentes de UI (reutilizáveis)
|   |-- pages/               # Páginas/Telas da aplicação (rotas)
|   |-- router/              # Definição e configuração das rotas
|   |-- assets/              # Imagens, fontes e outros recursos estáticos
|   |-- styles/              # Ficheiros de estilo (SCSS)
|   |-- App.tsx              # Componente raiz
|   |-- main.tsx             # Ponto de entrada do frontend
|
|-- src-tauri/               # <-- Backend Code (Rust)
|   |-- Cargo.toml           # Dependências do Rust
|   |-- tauri.conf.json      # Configuração da aplicação Tauri
|   |-- src/
|   |   |-- main.rs          # Ponto de entrada do backend
|
|-- package.json             # Dependências do Frontend
|-- README.md                # Documentação do projeto
```

## 🚀 Começando

Siga estes passos para configurar e executar o ambiente de desenvolvimento.

### Pré-requisitos

1.  **Instale o Node.js e npm**: Certifique-se de ter o [Node.js](https://nodejs.org/) (versão 18 ou superior) e o npm instalados.
2.  **Configure o Ambiente Rust**: Siga o [guia oficial de pré-requisitos do Tauri](https://tauri.app/v1/guides/getting-started/prerequisites/) para instalar o Rust e as dependências de sistema necessárias para a sua plataforma (Windows, macOS ou Linux).

### Instalação e Execução

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/[seu-usuario]/[seu-repo].git
    cd [nome-do-repo]
    ```

2.  **Instale as Dependências do Projeto:**
    Na raiz do projeto, execute o comando:
    ```bash
    npm install
    ```

3.  **Execute o Ambiente de Desenvolvimento:**
    Após a instalação, execute:
    ```bash
    npm run dev
    ```
    O aplicativo Tauri será iniciado em modo de desenvolvimento.

4.  **Compile para Produção:**
    Para compilar a versão final do aplicativo, execute:
    ```bash
    npm run tauri build
    ```

## ⚖️ Licença

Este projeto está licenciado sob a Licença MIT.
