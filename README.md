![feedget logo](https://raw.githubusercontent.com/jobsonra/nlw-return-feedget/main/web/src/assets/feedget.svg)

## Description

Este projeto é uma versão pessoal do **Feedget**, uma aplicação de feedback desenvolvida pela 🚀[Rocketseat](https://www.rocketseat.com.br) durante o **NLW Return**, um evento intenso e único de uma semana, onde tive a oportunidade de explorar conceitos e compartilhar conhecimentos sobre ferramentas e tecnologias.\
Nesta versão customizada pude colocar em prática alguns dos princípios de desenvolvimento do SOLID, desenvolver testes e otimizar a captura de tela. Além disso, criei um processo de classificação e defini o tema de acordo com a aparência do navegador, entre outros pontos de acessibilidade.\
Seu status atual está aberto a melhorias e permite expansão.\
&nbsp;

## Linguagens e Ferramentas

&nbsp;

<p>  
    <a
    href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
    target="_blank"
    rel="noreferrer"
  >
    <img
      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
      alt="javascript"
      title="javascript"
      width="40"
      height="40"
    />
  </a>&nbsp;  
  <a href="https://www.prisma.io/" target="_blank" rel="noreferrer">
    <img
      src="https://cdn.worldvectorlogo.com/logos/prisma-3.svg"
      alt="prisma"
      title="prisma"
      width="40"
      height="40"
    />
  </a>&nbsp;
  <a href="https://jestjs.io" target="_blank" rel="noreferrer">
    <img
      src="https://www.vectorlogo.zone/logos/jestjsio/jestjsio-icon.svg"
      alt="jest"
      title="jest"
      width="40"
      height="40"
    />
  </a>&nbsp;
  <a href="https://nodejs.org" target="_blank" rel="noreferrer">
    <img
      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg"
      alt="nodejs"
      title="nodejs"
      width="40"
      height="40"
    />
  </a>&nbsp;
      <a href="https://nodemailer.com/about/" target="_blank" rel="noreferrer">
    <img
      src="https://nodemailer.com/nm_logo_200x136.png"
      alt="nodemailer"
      title="nodemailer"
      width="58.82352"
      height="40"
    />
  </a>&nbsp;
  <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
    <img
      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg"
      alt="react"
      title="react"
      width="40"
      height="40"
    />
  </a>&nbsp;
  <a href="https://www.sqlite.org/" target="_blank" rel="noreferrer">
    <img
      src="https://www.vectorlogo.zone/logos/sqlite/sqlite-icon.svg"
      alt="sqlite"
      title="sqlite"
      width="40"
      height="40"
    />
  </a>&nbsp;
  <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer">
    <img
      src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"
      alt="tailwind"
      title="tailwind"
      width="40"
      height="40"
    />
  </a>&nbsp;
  <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer">
    <img
      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"
      alt="typescript"
      title="typescript"
      width="40"
      height="40"
    />
  </a>&nbsp;
    <a
    href="https://www.npmjs.com/"
    target="_blank"
    rel="noreferrer"
  >
    <img
      src="https://www.vectorlogo.zone/logos/npmjs/npmjs-ar21.svg"
      alt="npm"
      title="npm"
      width="100"
      height="40"
    />
  </a>
</p>
 
&nbsp;

## Instalação

```javascript
# Instalar dependências do servidor
$ cd server
$ npm install
```

```javascript
# Instalar dependências da aplicação web
$ cd ..\web
$ npm install
```

&nbsp;

### Para usar o Prisma e o Nodemailer, crie o arquivo `.env`, insira essas variáveis e defina as credenciais de e-mail.

```dosini
DOMAIN="localhost"
PORT="3333"

DATABASE_URL="file:./dev.db"

NODEMAILER_HOST="host"
NODEMAILER_PORT=0000
NODEMAILER_USER="usuário"
NODEMAILER_PASS="senha"
NODEMAILER_FROM="título <usuário@email.com>"
NODEMAILER_TO="título <usuário@email.com>"
```

&nbsp;

## Criando o banco de dados

```javascript
# cd server
$ npm run database:dev
```

## Executando o projeto

```javascript
# Iniciando servidor
$ cd server
$ npm run build
$ npm run start

# Iniciando aplicação web
$ cd ..\web
$ npm run build
$ npm run start
```

## Teste

```javascript
# Executar testes do servidor
$ cd server (in root folder)
$ npm run test
```

&nbsp;

---

developed by Jobson Almeida
