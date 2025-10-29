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
  - [Pré-requisitos](#pré-requisitos)
  - [Instalação](#instalação)
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
2. **Isolamento de Lógica:** A lógica de segurança é estritamente isolada no módulo `core/security/key.manager.ts`, facilitando auditorias e prevenindo vazamentos acidentais para outras partes do app.
3. **Permissões Restritas:** O Tauri é configurado com um conjunto mínimo de permissões de API (definido em `tauri.conf.json`), impedindo que o frontend acesse partes sensíveis do sistema sem autorização explícita.
4. **(Recomendação Futura):** Suporte para Hardware Wallets (Ledger, Trezor) para assinar transações, eliminando completamente a necessidade de armazenar chaves no software.

## 🛠️ Stack de Tecnologia

Este projeto utiliza uma arquitetura moderna para garantir performance, segurança e uma ótima experiência de desenvolvimento.

| Camada | Tecnologia | Versão (Exemplo) | Propósito |
| :--- | :--- | :--- | :--- |
| **Core (Desktop)** | [Tauri](https://tauri.app/) | `~1.6.0` | Framework leve e seguro (Rust) |
| **Frontend (UI)** | [TypeScript](https://www.typescriptlang.org/) | `~5.4.0` | Linguagem principal |
| **Framework de UI** | [React](https://react.dev/) | `~18.2.0` | Construção da interface |
| **Estado Global** | [Zustand](https://github.com/pmndrs/zustand) | `~4.5.0` | Gerenciamento de estado |
| **API (Web)** | [Axios](https://axios-http.com/) | `~1.6.0` | Cliente HTTP |
| **Blockchain** | [Ethers.js](https://ethers.org/) | `~6.11.0` | Interação com Blockchain |
| **IPFS** | [ipfs-http-client](https://github.com/ipfs/js-ipfs/tree/master/packages/ipfs-http-client) | `~60.0.0` | Interação com IPFS |
| **Build** | [Vite](https://vitejs.dev/) | `~5.2.0` | Build do frontend |

#### Bibliotecas de UI e Componentes

| Categoria | Biblioteca | Propósito |
| :--- | :--- | :--- |
| **Roteamento** | React Router DOM | Navegação e gerenciamento de rotas no app. |
| **Gráficos** | ApexCharts | Criação de gráficos interativos e visualizações de dados. |
| **Calendário** | FullCalendar | Implementação de um calendário completo com eventos. |
| **Mapas** | React jVectorMap | Renderização de mapas vetoriais interativos. |
| **Upload de Arquivos** | React Dropzone | Componente para upload de arquivos com "arrastar e soltar". |
| **Carrosséis** | Swiper | Criação de sliders e carrosséis modernos. |
| **Seletores de Data** | Flatpickr | Componente leve para seleção de datas e horas. |
| **Metadados da Página**| React Helmet Async | Gerenciamento do `<head>` do HTML (títulos, meta tags). |
| **Utilitários de CSS**| clsx + tailwind-merge | Combinação inteligente de classes do Tailwind CSS. |

## 📂 Estrutura de Diretórios

A estrutura de diretórios do projeto é organizada para separar as responsabilidades e facilitar a manutenção.

```shell
/
|-- .storybook/            # Configuração do Storybook (para isolar componentes de UI)
|-- cypress/               # Testes End-to-End (E2E)
|
|-- src/                     # <-- Frontend Code (TypeScript/React)
|   |-- assets/              # Ativos estáticos (imagens, svgs)
|   |-- components/          # Componentes de UI
|   |   |-- ui/                # Componentes puros (Button, Modal, Input)
|   |   |   |-- Button.tsx
|   |   |   |-- Button.test.tsx  # <-- Teste unitário (ex: Vitest)
|   |   |   |-- Button.stories.tsx # <-- Storybook
|   |   |-- shared/            # Componentes compostos e compartilhados (PageMeta)
|   |   |-- features/          # Componentes de domínio de negócio (ecommerce/)
|   |
|   |-- contexts/            # Provedores de Contexto React
|   |-- hooks/               # Hooks customizados (useModal)
|   |-- icons/               # Ícones em formato de componentes SVG
|   |-- layouts/             # Estrutura principal do layout (Sidebar, Header)
|   |-- locales/             # Arquivos de tradução (i18n)
|   |   |-- en-US.json
|   |   |-- pt-BR.json
|   |
|   |-- pages/               # Páginas/Telas da aplicação (rotas)
|   |   |-- dashboard/
|   |   |   |-- index.tsx
|   |
|   |-- router/              # Definição e configuração das rotas (React Router)
|   |   |-- index.tsx
|   |
|   |-- services/            # Lógica de negócio, chamadas de API (blockchain.service.ts)
|   |-- store/               # Estado global (Zustand, Redux)
|   |   |-- userSlice.ts
|   |
|   |-- types/               # Tipos e interfaces globais (user.types.ts)
|   |-- utils/               # Funções puras e helpers (formatDate)
|   |
|   |-- App.tsx              # Componente raiz (geralmente carrega o router)
|   |-- main.tsx             # Ponto de entrada do frontend
|   |-- index.css            # Estilos globais e Tailwind
|
|-- src-tauri/               # <-- Backend Code (Rust)
|   |-- ... (Estrutura padrão do Tauri)
|
|-- .env.example             # Modelo de variáveis de ambiente
|-- .eslintrc.json           # Configuração do ESLint (qualidade de código)
|-- .gitignore
|-- .prettierrc              # Configuração do Prettier (formatação de código)
|-- package.json
|-- tsconfig.json
|-- vite.config.ts
|-- vitest.config.ts         # Configuração do Vitest (testes unitários)
```

## 🚀 Começando

Siga estas etapas para configurar o ambiente de desenvolvimento.

### Pré-requisitos

Existem duas maneiras de configurar o ambiente: a **recomendada (com Nix)** e a manual.

#### Método Recomendado: Usando Nix

O projeto inclui um arquivo `flake.nix` que cria um ambiente de desenvolvimento 100% reprodutível com todas as dependências necessárias (Rust, Node.js, bibliotecas de sistema do Tauri, etc.).

1. **Instale o Nix**: Siga o guia oficial de instalação do Nix.
2. **Habilite os Flakes**: Adicione `experimental-features = nix-command flakes` ao seu arquivo de configuração do Nix (`~/.config/nix/nix.conf` ou `/etc/nix/nix.conf`).
3. **Entre no Ambiente**: Na raiz do projeto, execute o comando:

    ```bash
    nix develop
    ```

    O Nix irá baixar e configurar todas as ferramentas. Você estará em um shell pronto para o desenvolvimento.

> **Dica:** Para carregar o ambiente automaticamente ao entrar na pasta, instale o direnv e execute `direnv allow` uma vez na raiz do projeto.

#### Método Manual

Se você não usa Nix, precisará do seguinte software instalado em sua máquina:

1. **Rust** e suas ferramentas de build.
2. **Node.js**: Versão **18.x** ou **20.x (LTS)** ou superior.
    - O ambiente Nix está configurado para usar a **versão 20.x**. Recomendamos o uso do nvm (Node Version Manager) para gerenciar as versões do Node.js.
3. **Dependências de Sistema do Tauri**: Siga o guia oficial para o seu sistema operacional.
    - O guia oficial do Tauri é a melhor fonte: **[Tauri Prerequisites](https://tauri.app/v1/guides/getting-started/prerequisites)**

### Instalação

1. Clone o repositório:

    ```bash
    git clone https://github.com/[seu-usuario]/[seu-repo].git
    cd DEXWORLD
    ```

2. **(Se usando o método manual) Verifique e configure a versão do Node.js**:

    ```bash
    # Verifique sua versão atual
    node -v # Deve ser v20.x.x ou superior
    # Se não for a v18+, instale e use uma versão LTS com o nvm:
    nvm install 20
    nvm use 20
    ```

3. **Instale as dependências do projeto** (dentro do shell do Nix ou após a configuração manual):

    ```bash
    pnpm install
    ```

4. **Execute o ambiente de desenvolvimento**:

    ```bash
    pnpm tauri dev
    ```

    > **Nota:** Estamos usando `pnpm` para maior confiabilidade no gerenciamento de dependências.

5. **Para compilar a versão final (produção)**:

    ```bash
    npm run tauri build
    ```

## ⚖️ Licença

Este projeto está licenciado sob a Licença MIT. Veja o arquivo `LICENSE` para mais detalhes.
