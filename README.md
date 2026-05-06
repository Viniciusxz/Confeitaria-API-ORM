# 🎂 Confeitaria API ORM

API REST desenvolvida para o sistema de vendas da **Confeitaria da Vanessa**, com gerenciamento de produtos, pedidos e clientes.

## 📋 Sobre o Projeto

Este projeto foi desenvolvido com o objetivo de criar uma plataforma de vendas online para uma confeitaria artesanal, permitindo que clientes realizem encomendas de bolos, tortas e doces diretamente pelo site.

## 🗂️ Diagrama do Banco de Dados

| Tabela | Descrição |
|---|---|
| `clientes` | Dados dos clientes e login |
| `administradora` | Acesso ao painel admin |
| `categorias` | Categorias dos produtos (bolos, tortas, doces...) |
| `produtos` | Catálogo de produtos com foto, descrição e preço |
| `encomendas` | Pedidos realizados pelos clientes |
| `itens_encomenda` | Produtos de cada encomenda com quantidade e observação |

## 🚀 Funcionalidades

### Cliente
- Cadastro e login
- Visualização do catálogo por categoria
- Realização de encomendas
- Acompanhamento do status do pedido

### Administradora
- Login no painel admin
- Gerenciamento de produtos (cadastrar, editar, disponível/esgotado)
- Gerenciamento de encomendas (atualizar status)
- Notificação por email a cada novo pedido

## 🛠️ Tecnologias

- **Runtime:** Node.js 20 LTS
- **Framework:** Express.js
- **ORM:** Sequelize
- **Banco de dados:** SQLite (desenvolvimento) / PostgreSQL (produção)
- **Linter:** ESLint 10 (flat config)
- **Dev tools:** Nodemon

## 📁 Estrutura do Projeto

```
confeitaria-api-orm/
├── src/
│   ├── config/          # Configuração do banco de dados
│   ├── migrations/      # Histórico de mudanças no banco
│   ├── models/          # Modelos do Sequelize
│   ├── seeders/         # Dados iniciais para o banco
│   └── index.js         # Servidor Express
├── .gitignore
├── eslint.config.js
└── package.json
```

## ⚙️ Como rodar o projeto

**Pré-requisitos:** Node.js 20+, npm

```bash
# Clone o repositório
git clone https://github.com/Viniciusxz/Confeitaria-API-ORM.git

# Instale as dependências
npm install

# Rode as migrations para criar as tabelas
npx sequelize-cli db:migrate

# Popule o banco com dados iniciais
npx sequelize-cli db:seed:all

# Inicie o servidor em modo desenvolvimento
npm run dev
```

O servidor estará disponível em `http://localhost:3000`

## 📌 Status do Projeto

🚧 **Em desenvolvimento** — acompanhando o curso de ORM com Node.js da Alura e evoluindo para o projeto real da confeitaria.

### Roadmap MVP
- [x] Configuração do projeto
- [x] Configuração do banco de dados
- [x] Model e migration de Cliente
- [ ] Models de Categoria e Produto
- [ ] Models de Encomenda e Item da Encomenda
- [ ] Model de Administradora
- [ ] Rotas da API
- [ ] Autenticação JWT
- [ ] Integração com Mercado Pago
- [ ] Deploy

## 👨‍💻 Autor

Feito por **Vinícius** — projeto de portfólio para estágio em desenvolvimento.
