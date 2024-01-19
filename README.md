# Nome do Projeto

Bem-vindo ao projeto desenvolvido em TypeScript, uma aplicação robusta que incorpora as melhores práticas de desenvolvimento para APIs. Este trabalho foi criado como parte integrante do curso de formação acelerada na Softex, e visa oferecer uma experiência completa em termos de funcionalidade e tecnologia.

## Entidades

O projeto consiste em cinco entidades:

- **Client**
- **Employee**
- **Address**
- **Product**
- **Sale**

## Rotas

As rotas seguem o seguinte padrão:

### Client

- Listar todos: `GET /api/v1/clients/`
- Listar por ID: `GET /api/v1/clients/:id`
- Criar: `POST /api/v1/clients/`
- Atualizar: `PUT /api/v1/clients/:id`
- Deletar: `DELETE /api/v1/clients/:id`

### Employee

- Listar todos: `GET /api/v1/employees/`
- Listar por ID: `GET /api/v1/employees/:id`
- Criar: `POST /api/v1/employees/`
- Atualizar: `PUT /api/v1/employees/:id`
- Deletar: `DELETE /api/v1/employees/:id`

### Address

- Listar todos: `GET /api/v1/addresses/`
- Listar por ID: `GET /api/v1/addresses/:id`
- Criar: `POST /api/v1/addresses/`
- Atualizar: `PUT /api/v1/addresses/:id`
- Deletar: `DELETE /api/v1/addresses/:id`

### Product

- Listar todos: `GET /api/v1/products/`
- Listar por ID: `GET /api/v1/products/:id`
- Criar: `POST /api/v1/products/`
- Atualizar: `PUT /api/v1/products/:id`
- Deletar: `DELETE /api/v1/products/:id`

### Sale

- Listar todos: `GET /api/v1/sales/`
- Listar por ID: `GET /api/v1/sales/:id`
- Criar: `POST /api/v1/sales/`
- Atualizar: `PUT /api/v1/sales/:id`
- Deletar: `DELETE /api/v1/sales/:id`

## Principais Tecnologias

### TypeScript

TypeScript é uma linguagem de programação que adiciona tipagem estática opcional ao JavaScript, facilitando a detecção de erros durante o desenvolvimento.

### TypeORM

TypeORM é uma ferramenta ORM (Object-Relational Mapping) para TypeScript e JavaScript. Ele permite interagir com bancos de dados relacionais usando objetos JavaScript/TypeScript.

### OvernightJS

OvernightJS é um framework para Node.js que simplifica o desenvolvimento de APIs usando decorators. Facilita a configuração de rotas, middlewares e controladores.

## Relacionamentos

### Client

- Relacionamento com **Address** e **Sale** (um para muitos).

### Employee

- Relacionamento com **Address** e **Sale** (um para muitos).

### Product

- Relacionamento com **Sale** (muitos para muitos).

## Como Rodar o Projeto

1. **Pré-requisitos:**

   - Instale o Node.js
   - Instale o TypeScript globalmente: `npm install -g typescript`

2. **Configuração do Banco de Dados:**

   - Configure as credenciais do banco de dados no arquivo `ormconfig.json`.

3. **Rodando o projeto:**
   ```bash
   docker compose up -d --build
   docker exec -it app-fap bash
   npm run typeorm migratio: run
   ```
