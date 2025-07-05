# 🎬 Cineminha - Sistema de Reserva de Assentos

Um sistema completo e intuitivo para reservar assentos de cinema online, desenvolvido com React e integrado à API Cineflex.

## � Demo Online

🔗 **Acesse o projeto em produção**: [https://cineminha-ruby.vercel.app/](https://cineminha-ruby.vercel.app/)

## �🎯 Sobre o Projeto

O **Cineminha** é uma aplicação web moderna que simula um sistema real de reserva de cinema. Com ele você pode:
- Explorar o catálogo de filmes em cartaz
- Escolher o dia e horário da sessão desejada
- Selecionar seus assentos preferidos no mapa interativo
- Preencher dados pessoais com validação de CPF
- Finalizar sua reserva com segurança (dados não expostos na URL)
- Visualizar confirmação detalhada do pedido

## ✨ Como Funciona

### 1. 🎭 Catálogo de Filmes
Explore os filmes em cartaz com informações detalhadas e pôsteres oficiais. Clique no filme desejado para ver as sessões disponíveis.

### 2. � Seleção de Sessão
Escolha o dia da semana e horário que melhor se adequa à sua agenda. Cada sessão mostra informações completas do filme.

### 3. 💺 Mapa de Assentos Interativo
Visualize o layout completo da sala e selecione seus assentos:
- **🟢 Verde**: Disponível para reserva
- **🟠 Laranja**: Selecionado por você
- **🔴 Vermelho**: Já ocupado/indisponível

### 4. 👤 Dados do Comprador
Preencha nome completo e CPF com validação automática (11 dígitos obrigatórios).

### 5. ✅ Confirmação Segura
Revise todos os detalhes da sua reserva com dados protegidos e CPF parcialmente mascarado por segurança.

## 🚀 Tecnologias

- **React 18** - Biblioteca para interfaces modernas
- **Vite** - Build tool rápida e otimizada
- **Styled Components** - CSS-in-JS para estilização componentizada
- **React Router DOM** - Roteamento SPA com navegação fluida
- **Axios** - Cliente HTTP para integração com API REST
- **API Cineflex** - Backend integrado para dados reais de filmes e sessões

## 🛠️ Como Rodar o Projeto

### Pré-requisitos
- Node.js 16+ instalado
- NPM ou Yarn

### Passos

1. **Clone o repositório**
   ```bash
   git clone https://github.com/seu-usuario/cineminha.git
   cd cineminha
   ```

2. **Instale as dependências**
   ```bash
   npm install
   # ou
   yarn install
   ```

3. **Execute em modo desenvolvimento**
   ```bash
   npm run dev
   # ou
   yarn dev
   ```

4. **Acesse no navegador**
   ```
   http://localhost:5173
   ```

### Build para Produção
```bash
npm run build
npm run preview
```

## 📁 Estrutura do Projeto

```
cineminha/
├── public/
│   └── vite.svg
├── src/
│   ├── Components/
│   │   ├── Buttons.jsx          # Componentes de botão reutilizáveis
│   │   ├── Header.jsx           # Cabeçalho da aplicação
│   │   ├── Catalog/
│   │   │   ├── index.jsx        # Lista de filmes em cartaz
│   │   │   └── styles.jsx       # Estilos do catálogo
│   │   ├── SessionsMovie/
│   │   │   ├── index.jsx        # Sessões e horários
│   │   │   └── styles.jsx       # Estilos das sessões
│   │   ├── Seats/
│   │   │   ├── index.jsx        # Seleção de assentos
│   │   │   └── styles.jsx       # Estilos dos assentos
│   │   └── Final/
│   │       ├── index.jsx        # Confirmação da reserva
│   │       └── styles.jsx       # Estilos da confirmação
│   ├── styles/
│   │   └── global.jsx           # Estilos globais
│   ├── assets/
│   │   └── IconCine.png         # Ícone da aplicação
│   ├── App.jsx                  # Configuração de rotas
│   └── main.jsx                 # Ponto de entrada
├── package.json
└── vite.config.js
```

## 🎨 Design e Funcionalidades

### Interface Moderna
- **Tema Escuro**: Design cinematográfico com fundo escuro
- **Cores Vibrantes**: Paleta laranja/amarelo para destaques e ações
- **Layout Responsivo**: Funciona perfeitamente em desktop e mobile
- **Componentes Reutilizáveis**: Botões e elementos padronizados

### Experiência do Usuário
- **Navegação Intuitiva**: Fluxo linear e claro entre páginas
- **Feedback Visual**: Estados hover, loading e validações
- **Validações Inteligentes**: CPF, campos obrigatórios e seleções
- **Segurança**: Dados sensíveis protegidos e não expostos na URL

### Integração com API
- **Dados Reais**: Filmes, sessões e assentos da API Cineflex
- **Estados Dinâmicos**: Assentos disponíveis/ocupados em tempo real
- **Reservas Funcionais**: Sistema completo de POST para confirmar reservas

## 🔒 Segurança e Boas Práticas

- **Proteção de Dados**: CPF e informações pessoais não aparecem na URL
- **Validação de CPF**: Verificação de 11 dígitos obrigatórios
- **State Management**: Dados sensíveis trafegam via React Router state
- **Mascaramento**: CPF parcialmente oculto na tela de confirmação
- **Error Handling**: Tratamento adequado de erros de API e validações

---

**Desenvolvido com ❤️ utilizando React e as melhores práticas de desenvolvimento front-end.**

