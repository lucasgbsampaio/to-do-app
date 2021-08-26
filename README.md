<h1 align="center">
     <a href="https://to-do-lisst.herokuapp.com/" alt="site do to-do-list"> To-Do List. </a>
</h1>

<h3 align="center">
    📋 To-Do List é uma aplicação de registro de tarefas.
</h3>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/lucasgbsampaio/to-do-app?color=%2304D361">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/lucasgbsampaio/to-do-app">

  <a href="https://www.twitter.com/lucasgbsampaio/">
    <img alt="Siga no Twitter" src="https://img.shields.io/twitter/url?url=https%3A%2F%2Fgithub.com%2Flucasgbsampaio%2Fto-do-app">
  </a>
  
  <a href="https://github.com/lucasgbsampaio/to-do-app/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/lucasgbsampaio/to-do-app">
  </a>
    
   <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen">
   <a href="https://github.com/lucasgbsampaio/to-do-app/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/lucasgbsampaio/to-do-app?style=social">
  </a>

</p>

<h4 align="center">
	🚧 Concluído 🚧
</h4>

# Tabela de conteúdos

<!--ts-->

- [Sobre o projeto](#-sobre-o-projeto)
- [Funcionalidades](#-funcionalidades)
- [Demonstração da aplicação](#-demonstração-da-aplicação)
- [Como executar o projeto](#-como-executar-o-projeto)
  - [Pré-requisitos](#pré-requisitos)
    - [Rodando o Backend (servidor)](#user-content--rodando-o-backend-servidor)
    - [Rodando a aplicação web (Frontend)](#user-content--rodando-a-aplicação-web-frontend)
- [Tecnologias](#-tecnologias)

  - [WebSite](#user-content-website--react)
  - [Server](#user-content-server--nodejs)

- [Autor](#-autor)
- [Licença](#user-content--licença)

<!--te-->

## 💻 Sobre o projeto

Registro de tarefas para ter organização e planejamento ao receber uma lista de afazeres.

---

## ⚙️ Funcionalidades

As seguintes funcionalidades estão disponíveis:

- [x] Os usuários podem se registrar, onde podem:

  - [x] registrar tarefas
  - [x] excluir tarefas
  - [x] concluir tarefas

---

## 🔍 Demonstração da aplicação

A aplicação está hospedada no [Heroku](https://to-do-lisst.herokuapp.com/)

### Web

<p align="center" style="display: flex; align-items: flex-start; justify-content: center;">
  <img alt="to-do-list" title="to-do-list" src="./github/assets/to-do-list.gif" >
</p>

---

## 🚀 Como executar o projeto

Este projeto é divido em duas partes:

1. Backend (pasta src)
2. Frontend (pasta frontend)

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/) e [Yarn](https://yarnpkg.com/). Além disso,
será preciso ter uma conta no [MongoDB](https://www.mongodb.com/) para ter acesso ao banco de dados.

#### 🎲 Rodando o Backend (servidor)

```bash

# Clone este repositório
$ git clone https://github.com/lucasgbsampaio/to-do-app.git

# Acesse a pasta do projeto no terminal/cmd para ter acesso a raiz da pasta
$ cd to-do-app

# Instale as dependências
$ yarn

# Crie um arquivo .env na raiz seguindo as especificações do arquivo .env.sample

# Execute a aplicação
$ yarn start

# O servidor iniciará na porta:8080 - acesse http://localhost:8080

```

#### 🧭 Rodando a aplicação web (Frontend)

```bash


# Acesse a pasta do frontend no seu terminal/cmd
$ cd frontend

# Instale as dependências
$ yarn

# Execute a aplicação
$ yarn start

# A aplicação será aberta na porta:3000 - acesse http://localhost:3000

```

---

## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

#### **Website** ([React](https://reactjs.org/))

- **[React Router Dom](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom)**
- **[dotenv](https://github.com/motdotla/dotenv#readme)**

> Veja o arquivo [package.json](https://github.com/lucasgbsampaio/to-do-app/blob/master/frontend/package.json)

#### **Server** ([NodeJS](https://nodejs.org/en/))

- **[Express](https://expressjs.com/)**
- **[CORS](https://expressjs.com/en/resources/middleware/cors.html)**
- **[dotenv](https://github.com/motdotla/dotenv#readme)**
- **[Mongoose](https://mongoosejs.com/)**
- **[JsonWebToken](https://www.npmjs.com/package/jsonwebtoken)**
- **[BodyParser](https://www.npmjs.com/package/body-parser)**
- **[bcrypt](https://www.npmjs.com/package/bcrypt)**

> Veja o arquivo [package.json](https://github.com/lucasgbsampaio/to-do-app/blob/master/package.json)

---

## 👨‍💻 Autor

- **Lucas Sampaio (lucasgbsampaio)** - [Twitter](https://twitter.com/lucasgbsampaio) - [LinkedIn](https://www.linkedin.com/in/lucasgbsampaio/)

---

## 📝 Licença

Este projeto está sob a licença [MIT](./LICENSE).

---
