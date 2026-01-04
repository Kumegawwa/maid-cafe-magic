# 🧁 Chest of Wonders - Maid Café Web Experience

![Project Status](https://img.shields.io/badge/Status-Concluído-success)
![Version](https://img.shields.io/badge/Version-2.0.0-blue)
![Style](https://img.shields.io/badge/Style-Pop%20%26%20Kawaii-pink)

> **O portal digital para o primeiro Maid Café de imersão em fantasia do Brasil.**

Este projeto é uma Single Page Application (SPA) moderna, desenvolvida com **React** e **TypeScript**, projetada para oferecer uma experiência de usuário imersiva, divertida e informativa ("Moe Moe Kyun!"). O site reflete a identidade visual **Pop & Kawaii** da marca, utilizando uma paleta de cores Pantone vibrante e tipografia arredondada.

---

## ✨ Funcionalidades Principais

O site foi arquitetado para guiar o cliente desde a descoberta até a reserva, com interações ricas e animações fluidas.

### 🏠 **Home (A Experiência)**
- **Hero Section Imersiva:** Apresentação impactante com elementos flutuantes animados e gradientes suaves.
- **Instagram Feed Infinito:** Carrossel automático (*marquee*) exibindo momentos mágicos do café em loop contínuo.
- **Navegação Intuitiva:** Menu responsivo com indicação visual de status (Aberto/Fechado) baseado no horário real do sistema.

### 📜 **Menu Mágico Interativo**
- **Sistema de Filtragem:** Filtros dinâmicos por categoria (Frapês, Quentes, Salgados, etc.) e restrições alimentares (Vegano, Sem Glúten, Zero Lactose).
- **Cards Detalhados:** Exibição de itens com emojis temáticos, preços destacados e etiquetas de dieta.
- **PDF Download:** Botão estilizado e animado para acesso ao cardápio ilustrado original.
- **Sticky Navigation:** Barra de categorias que se fixa ao topo para facilitar a navegação em cardápios longos.

### 🎀 **Maids & Personalidades (Interativo)**
- **Flip Cards 3D:** Uma experiência gamificada onde o usuário clica nos cartões das personalidades ("Dere Types") para ver:
  - **Frente:** Descrição da personalidade.
  - **Verso (Giro 180º):** Exemplo de atuação/diálogo e ícones temáticos.
- **Catálogo Completo:** Apresentação dos 12 arquétipos (Tsundere, Deredere, Kamidere, etc.) com cores e ícones únicos para cada um.

### ℹ️ **Informações e Institucional**
- **Regras da Casa:** Guia visual de conduta utilizando ícones claros para permissões (Fotos, Interação) e proibições.
- **Eventos:** Vitrine para aniversários, dias temáticos e pocket shows.
- **A Experiência:** Explicação didática sobre o conceito de Maid Café e rituais ("Oishikunare").
- **Contato:** Formulário estilizado, mapa de localização e links diretos para reservas externas (DGuests).

---

## 🎨 Identidade Visual (Design System)

O projeto segue um rigoroso sistema de design definido no `tailwind.config.ts`:

* **Paleta de Cores (Pantone):**
    * 🌸 `chest-pink` (#ffa8da)
    * 🥣 `chest-blue` (#73c5dd)
    * 🔮 `chest-purple` (#bcadf0)
    * ⚫ `chest-dark` (#272727)
* **Tipografia:**
    * Títulos: *Fredoka* (Arredondada e divertida).
    * Corpo: *Baloo 2* (Leitura confortável e moderna).
* **Estética:**
    * **Bordas:** Super arredondadas (`rounded-[2rem]`).
    * **Sombras:** Sombras duras e sólidas ("Pop Shadow") para efeito 2D/Sticker.
    * **Animações:** `float` (flutuar), `wiggle` (balançar), `spin-slow` e transições suaves de hover.

---

## 🛠️ Tecnologias Utilizadas

Este projeto utiliza as ferramentas mais modernas do ecossistema React:

* **Core:** [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/) + [Vite](https://vitejs.dev/)
* **Estilização:** [Tailwind CSS](https://tailwindcss.com/) + [Tailwind Animate](https://github.com/jamiebuilds/tailwindcss-animate)
* **Componentes UI:** [Shadcn/ui](https://ui.shadcn.com/) (Baseado em Radix UI)
* **Ícones:** [Lucide React](https://lucide.dev/)
* **Roteamento:** [React Router DOM](https://reactrouter.com/)
* **Gerenciamento de Estado/Cache:** [TanStack Query](https://tanstack.com/query/latest)

---

## 🚀 Como Rodar o Projeto

Pré-requisitos: Certifique-se de ter o **Node.js** instalado em sua máquina.

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/seu-usuario/maid-cafe-magic.git](https://github.com/seu-usuario/maid-cafe-magic.git)
    cd maid-cafe-magic
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    # ou
    yarn install
    ```

3.  **Inicie o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```

4.  **Acesse:**
    O projeto estará rodando em `http://localhost:5173` (ou a porta indicada no terminal).

---

## 📂 Estrutura de Pastas


```

src/
├── components/
│   ├── home/          # Componentes exclusivos da Página Inicial (Hero, Instagram, CTA)
│   ├── layout/        # Header, Footer
│   ├── ui/            # Componentes reutilizáveis (Botões, Cards, Badges - Shadcn)
│   └── ScrollToTop.tsx # Utilitário de navegação
├── pages/             # Páginas principais (Rotas)
│   ├── Index.tsx      # Home
│   ├── CardapioPage.tsx
│   ├── MaidsPage.tsx
│   ├── ContatoPage.tsx
│   ├── RegrasPage.tsx
│   ├── EventosPage.tsx
│   ├── ExperienciaPage.tsx
│   └── NotFound.tsx
├── lib/               # Utilitários globais (cn function)
└── index.css          # Estilos globais e classes utilitárias 3D manuais

```

---

## 📱 Responsividade

O site é totalmente responsivo (Mobile-First):
- **Mobile:** Menu hambúrguer lateral, grids de coluna única, elementos de toque otimizados.
- **Desktop:** Navegação em pílula, grids expandidos, efeitos de hover avançados.

---

## 🤝 Contribuição

Contribuições são bem-vindas! Se você tiver uma ideia para deixar o café ainda mais mágico:

1.  Faça um Fork do projeto.
2.  Crie uma Branch para sua Feature (`git checkout -b feature/NovaMagia`).
3.  Faça o Commit (`git commit -m 'Adiciona Nova Magia'`).
4.  Faça o Push (`git push origin feature/NovaMagia`).
5.  Abra um Pull Request.

---

<div align="center">
  <p>Feito com 💖 e muita magia para a comunidade Maid.</p>
  <p>© 2024 Chest of Wonders</p>
</div>