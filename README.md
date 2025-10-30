# Hub de Orquestração Desktop

![Status do Build](https://img.shields.io/github/actions/workflow/status/[seu-usuario]/[seu-repo]/release.yml?branch=main)
![Versão](https://img.shields.io/github/v/release/[seu-usuario]/[seu-repo])
![Licença](https://img.shields.io/badge/licen%C3%A7a-MIT-blue.svg)

Um painel administrativo desktop seguro e multiplataforma (Windows, macOS, Linux) para orquestração de sistemas web, interações com a blockchain e gerenciamento de arquivos no IPFS. Construído com Tauri e Rust, priorizando segurança e performance.

---

## 📖 Sumário

- [Sobre o Projeto](#-sobre-o-projeto)
- [Principais Integrações](#-principais-integrações)
- [Metodologia de Segurança](#️-metodologia-de-segurança)
- [Stack de Tecnologia e Orientações](#-stack-de-tecnologia-e-orientações)
- [Estrutura de Diretórios](#-estrutura-de-diretórios)
- [Começando](#-começando)
- [Licença](#️-licença)

## 🎯 Sobre o Projeto

Este aplicativo é um **"Hub de Orquestração"** desktop projetado para administradores e usuários avançados. Ele fornece uma interface unificada para gerenciar operações complexas que envolvem múltiplos sistemas:

- Interação com a API de um **WebApp** principal.
- Execução de transações e leitura de dados de uma **Blockchain**.
- Gerenciamento (upload/download) de arquivos no **IPFS**.

Construído com [Tauri](https://tauri.app/), ele é extremamente leve, rápido e prioriza a segurança, rodando nativamente com um único binário.

## 🔗 Principais Integrações

- **API do WebApp:** Consumo de endpoints para gerenciamento de dados do aplicativo web principal.
- **Blockchain:** Conexão direta com redes EVM para enviar transações assinadas e ler o estado de Smart Contracts.
- **IPFS (InterPlanetary File System):** Integração com um gateway para upload e download de arquivos de forma descentralizada.

## 🛡️ Metodologia de Segurança

A segurança é o pilar deste projeto.

**NUNCA ARMAZENAMOS CHAVES PRIVADAS EM TEXTO PLANO.**

Nossa abordagem é:

1.  **Armazenamento Seguro com Stronghold:** Chaves privadas ou *seed phrases* são criptografadas e armazenadas em um "cofre" seguro gerenciado pelo `tauri-plugin-stronghold`.
2.  **Isolamento de Lógica:** A lógica de segurança é estritamente isolada no backend Rust.
3.  **Permissões Restritas:** A aplicação é configurada com um conjunto mínimo de permissões de API.

## 🛠️ Stack de Tecnologia e Orientações

Esta seção detalha as tecnologias do projeto e serve como guia para os desenvolvedores. As dependências e versões são gerenciadas declarativamente nos arquivos `package.json` (frontend), `src-tauri/Cargo.toml` (backend) e `.idx/dev.nix` (ambiente).

### **1. Ambiente de Desenvolvimento**

O ambiente é 100% gerenciado pelo **Nix**. O arquivo `.idx/dev.nix` instala automaticamente:
- **Node.js (v20.x):** Para o ecossistema de frontend.
- **Toolchain do Rust:** Compilador (`rustc`) e gerenciador de pacotes (`cargo`).
- **Bibliotecas de Sistema:** Todas as dependências (`webkit2gtk`, etc.) necessárias para o Tauri em Linux.

### **2. Backend (Core em Rust)**

- **Framework:** [Tauri v2](https://v2.tauri.app/)
- **Linguagem:** Rust
- **Orientação:** Toda a lógica sensível, interações com o sistema e tarefas pesadas devem ser implementadas aqui. As funções são expostas de forma segura ao frontend como "comandos" do Tauri.

### **3. Frontend (Interface do Usuário)**

O frontend é uma Single-Page Application (SPA) construída com a seguinte stack:

| Tecnologia | Função | Pacote(s) Chave | Orientação de Uso |
| :--- | :--- | :--- | :--- |
| **React** | Framework Principal | `react`, `react-dom` | Use para criar componentes de UI funcionais e gerenciar o estado local. |
| **TypeScript** | Linguagem | `typescript` | Utilize tipagem estrita para garantir a segurança e manutenibilidade do código. |
| **Material-UI (MUI)** | Biblioteca de Componentes | `@mui/material` | A base para a UI. Utilize seus componentes (Button, TextField, etc.) para construir as telas. |
| **React Router** | Roteamento | `react-router-dom` | Defina as páginas e a navegação da aplicação no arquivo `src/routes.tsx`. |
| **Vite** | Build Tool | `vite` | O motor de desenvolvimento. O comando `npm run dev` o utiliza para compilação e hot-reload. |
| **API Tauri** | Ponte Frontend-Backend | `@tauri-apps/api` | Use para invocar os comandos Rust definidos no backend de forma segura e assíncrona. |


## 📂 Estrutura de Diretórios Proposta

A estrutura do projeto é modular e orientada a funcionalidades (`features`) para promover escalabilidade e manutenibilidade.

```shell
/
|-- src/                     # <-- Frontend Code (TypeScript/React)
|   |-- api/                 # Interface de comunicação com o backend Rust
|   |-- components/          # Componentes de UI globais e reutilizáveis
|   |-- features/            # Módulos de funcionalidades (ex: blockchain, ipfs)
|   |-- store/               # Gerenciamento de estado global
|   |-- App.tsx              # Componente raiz
|   |-- routes.tsx           # Definição das rotas
|
|-- src-tauri/               # <-- Backend Code (Rust)
|   |-- Cargo.toml           # Dependências e manifesto do Rust
|   |-- tauri.conf.json      # Configuração da aplicação Tauri
|   |-- src/
|   |   |-- commands/        # Comandos Tauri expostos ao frontend
|   |   |-- core/            # Lógica de negócio central
|   |   |-- security/        # Módulo do Stronghold e gestão de chaves
|   |   |-- main.rs          # Ponto de entrada do backend
|
|-- .idx/
|   |-- dev.nix              # Configuração declarativa do ambiente de dev
|
|-- package.json             # Dependências do Frontend
|-- README.md                # Esta documentação
```

## 🚀 Começando

Este projeto utiliza [Nix](https://nixos.org/) para gerenciar o ambiente de desenvolvimento, garantindo uma configuração fácil e consistente.

### Pré-requisitos

1.  Um ambiente compatível com Nix (como o Google's IDX, ou um sistema com Nix instalado).
2.  Clone o repositório.

### Instalação e Execução

Ao abrir o projeto em um ambiente Nix, todas as dependências de sistema (Node.js, Rust, etc.) serão instaladas automaticamente.

1.  **Instale as dependências do Node.js:**
    ```bash
    npm install
    ```

2.  **Execute o Ambiente de Desenvolvimento:**
    ```bash
    npm run dev
    ```

3.  **Compile para Produção:**
    ```bash
    npm run build
    ```

## ⚖️ Licença

Este projeto está licenciado sob a Licença MIT.
