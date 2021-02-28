<p align="center">
   <img src="https://raw.githubusercontent.com/tavareshenrique/nps-api-nlw/ce0018504a75455981215a7e1278101e79edc00c/assets/images/logo.svg" alt="NPS API" width="280"/>
</p>

<p align="center">
   <a href="https://www.linkedin.com/in/tavareshenrique/">
      <img alt="Henrique Tavares" src="https://img.shields.io/badge/-Henrique Tavares-BB1A34?style=flat&logo=Linkedin&logoColor=white" />
   </a>
 <img alt="Repository size" src="https://img.shields.io/github/repo-size/tavareshenrique/nps-api-nlw?color=BB1A34">

  <a aria-label="Last Commit" href="https://github.com/tavareshenrique/nps-api-nlw/commits/master">
    <img alt="Last commit on GitHub" src="https://img.shields.io/github/last-commit/tavareshenrique/nps-api-nlw?color=BB1A34">
  </a>
  <a href="https://github.com/tavareshenrique/nps-api-nlw/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/tavareshenrique/nps-api-nlw?color=BB1A34">
  </a>
  <img alt="License" src="https://img.shields.io/badge/license-MIT-BB1A34">
</p>

> <b>NPS API</b> é uma API criada utilizando NodeJS com Express e TypeScript durante a NLW#4 da [Rocketseat](https://github.com/Rocketseat). Esse projeto permite o calculo de NPS de uma empresa enviado por usuários via email.

<div align="center">
  <sub><strong>NPS API</strong> foi desenvolvido com ❤︎ pelo
    <a href="https://github.com/tavareshenrique">Henrique Tavares</a>
  </sub>
</div>

<div align="center" style="margin-top: 16px" ><a href="https://insomnia.rest/run/?label=NPS%20API&uri=https%3A%2F%2Fraw.githubusercontent.com%2Ftavareshenrique%2Fnps-api-nlw%2Fmain%2Fassets%2FInsomnia_2021-02-28.json" target="_blank"><img src="https://insomnia.rest/images/run.svg" alt="Run in Insomnia"></a></div>

# :pushpin: Conteúdo

- [API](#floppy_disk-api)
  - [NPS](#nps)
    - [Calculate](#calculate)
  - [Mail](#mail)
    - [Send Mail](#send-mail)
  - [Survey](#survey)
    - [Create Survey](#create-survey)
    - [List All Surveys](#list-all-survey)
  - [Users](#user)
    - [Create User](#create-user)
- [Tecnologias](#computer-tecnologias)
- [Executando](#construction_worker-executando)
- [Autores](#computer-autores)
- [Licença](#closed_book-licença)

# :floppy_disk: API

# NPS

## Calculate

Esse End-Point para calcular o NPS.

- **URL**

  `/nps/:surveyId`

- **Method:**

  `GET`

- **URL Params**

  - **Required:**

    `:surveyId` **-> ID do survey.**

- **Success Response:**

  - **Code:** 200 <br />
    **Content:**

    ```json
    {
      "detractor": 1,
      "pasive": 0,
      "promoters": 2,
      "totalAnswers": 3,
      "nps": 33.33
    }
    ```

---

# Mail

## Send Mail

Enviar email.

- **URL**

  `/sendMail`

- **Method:**

  `POST`

- **JSON Example:**

  ```json
  {
    "email": "henrique@email.com",
    "survey_id": "eeb3d144-df68-4f5c-8ae2-5d498a2db412"
  }
  ```

- **Success Response:**

  - **Code:** 200 <br />
    **Content:**

    ```json
    {
      "id": "13e43459-f251-499c-a5b5-1f18c5aac461",
      "user_id": "ada144d3-2164-40e6-b410-cb6f6f87c98d",
      "survey_id": "eeb3d144-df68-4f5c-8ae2-5d498a2db412",
      "created_at": "2021-02-28T00:36:15.000Z"
    }
    ```

---

# Survey

## Create Survey

Criando pesquisa.

- **URL**

  `/surveys`

- **Method:**

  `POST`

- **JSON Example:**

  ```json
  {
    "title": "Queromos ouvir sua opinião!",
    "description": "De 0 à 10, quanto você recomendaria a nossa empresa?"
  }
  ```

- **Success Response:**

  - **Code:** 200 <br />
    **Content:**

    ```json
    {
      "id": "eeb3d144-df68-4f5c-8ae2-5d498a2db412",
      "title": "Queromos ouvir sua opinião!",
      "description": "De 0 à 10, quanto você recomendaria o Henrique?",
      "created_at": "2021-02-25T16:31:06.000Z"
    }
    ```

---

## List All Surveys

Listar todas pesquisas criadas.

- **URL**

  `/surveys`

- **Method:**

  `GET`

- **Success Response:**

  - **Code:** 200 <br />
    **Content:**

    ```json
    [
      {
        "id": "eeb3d144-df68-4f5c-8ae2-5d498a2db412",
        "title": "Queromos ouvir sua opinião!",
        "description": "De 0 à 10, quanto você recomendaria a nossa empresa?",
        "created_at": "2021-02-25T16:31:06.000Z"
      }
    ]
    ```

---

# User

## Create User

Esse End-Point permite a criação de usuários.

- **URL**

  `/users`

- **Method:**

  `POST`

- **JSON Example:**

  ```json
  {
    "name": "Henrique Tavares",
    "email": "henrique@email.com"
  }
  ```

- **Success Response:**

  - **Code:** 200 <br />
    **Content:**

    ```json
    {
      "id": "3e837e85-90d2-4da0-8ce4-91e575d28c54",
      "name": "Henrique Tavares",
      "email": "henrique@email.com",
      "created_at": "2021-02-28T21:24:14.000Z"
    }
    ```

---

# :computer: Tecnologias

Este projeto foi feito utilizando as seguintes tecnologias:

- [NodeJS](https://github.com/nodejs/node)
- [Express](https://github.com/expressjs/express)
- [TypeScript](https://github.com/microsoft/TypeScript)
- [express-async-errors](https://github.com/davidbanham/express-async-errors)
- [handlebars](https://github.com/handlebars-lang/handlebars.js)
- [nodemailer](https://github.com/nodemailer/nodemailer)
- [reflect-metadata](https://github.com/rbuckton/reflect-metadata)
- [sqlite3](https://github.com/sqlite/sqlite)
- [uuid](https://github.com/uuidjs/uuid)
- [yup](https://github.com/jquense/yup)
- [jest](https://jestjs.io/)
- [supertest](https://github.com/visionmedia/supertest)
- [ts-jest](https://github.com/kulshekhar/ts-jest)
- [ts-node-dev](https://github.com/wclr/ts-node-dev)

# :construction_worker: Executando

**Passo 1:**

```bash
# Clone o Repositório
$ git@github.com:tavareshenrique/nps-api-nlw.git
```

**Passo 2:**

```bash
# Baixe as dependências
yarn
```

**Passo 3:**

```bash
# Execute o projeto
yarn dev
```

# :computer: Autores

<table>
  <tr>
    <td align="center">
      <a href="http://github.com/tavareshenrique/">
        <img src="https://avatars1.githubusercontent.com/u/27022914?v=4" width="100px;" alt="Henrique Tavares"/>
        <br />
        <sub>
          <b>Henrique Tavares</b>
        </sub>
       </a>
       <br />
       <a href="https://www.linkedin.com/in/tavareshenrique/" title="Linkedin">@tavareshenrique</a>
       <br />
       <a href="https://github.com/tavareshenrique/fastfeet-api/commits?author=tavareshenrique" title="Code">💻</a>
    </td>
    <td align="center">
      <a href="http://github.com/tavareshenrique/">
        <img src="https://avatars0.githubusercontent.com/u/28929274?s=200&v=4" width="100px;" alt="Henrique Tavares"/>
        <br />
        <sub>
          <b>Rocketseat</b>
        </sub>
       </a>
       <br />
       <a href="https://github.com/Rocketseat" title="Linkedin">@Rocketseat</a>
       <br />
       <a href="https://github.com/tavareshenrique/fastfeet-api/commits?author=tavareshenrique" title="Creators">🚀</a>
    </td>
  </tr>
</table>

# :closed_book: Licença

Este projeto está sob a licença [MIT](./LICENSE).
