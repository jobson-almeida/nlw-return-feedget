<p align="center">
<a href="https://github.com/jobsonra/nlw-return-feedget"><img alt="feedget logo" src="https://raw.githubusercontent.com/jobsonra/nlw-return-feedget/main/web/src/assets/feedget.svg"></a>
</p>

## Description

This project is a private take on **Feedget**, a feedback app developed by 🚀[Rocketseat](https://www.rocketseat.com.br) during the **NLW Return**, an intense week-long event, where we were offered the possibility to explore concepts and share knowledge about tools and technologies.

## Languages and Tools

</br> 
<p align="left">
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
  </a>
  <a href="https://www.prisma.io/" target="_blank" rel="noreferrer">
    <img
      src="https://cdn.worldvectorlogo.com/logos/prisma-3.svg"
      alt="prisma"
      title="prisma"
      width="40"
      height="40"
    />
  </a>
  <a href="https://jestjs.io" target="_blank" rel="noreferrer">
    <img
      src="https://www.vectorlogo.zone/logos/jestjsio/jestjsio-icon.svg"
      alt="jest"
      title="jest"
      width="40"
      height="40"
    />
  </a>
  <a href="https://nodejs.org" target="_blank" rel="noreferrer">
    <img
      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg"
      alt="nodejs"
      title="nodejs"
      width="40"
      height="40"
    />
  </a>
      <a href="https://nodemailer.com/about/" target="_blank" rel="noreferrer">
    <img
      src="https://nodemailer.com/nm_logo_200x136.png"
      alt="nodemailer"
      title="nodemailer"
      width="58.82352"
      height="40"
    />
  </a> 
  <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
    <img
      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg"
      alt="react"
      title="react"
      width="40"
      height="40"
    />
  </a>
  <a href="https://www.sqlite.org/" target="_blank" rel="noreferrer">
    <img
      src="https://www.vectorlogo.zone/logos/sqlite/sqlite-icon.svg"
      alt="sqlite"
      title="sqlite"
      width="40"
      height="40"
    />
  </a>
  <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer">
    <img
      src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"
      alt="tailwind"
      title="tailwind"
      width="40"
      height="40"
    />
  </a>
  <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer">
    <img
      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"
      alt="typescript"
      title="typescript"
      width="40"
      height="40"
    />
  </a>
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

## Installation

```javascript
# Install web application dependencies from folder web
$ npm install
```

```javascript
# Install server dependencies from folder server
$ npm install
```

To use Prisma and Nodemailer, set the variables in the `.env` file, located in the server folder, and enter the database path and email credentials.

```dosini
DOMAIN="localhost"
PORT="3333"

DATABASE_URL="file:./dev.db"

NODEMAILER_HOST="host"
NODEMAILER_PORT=0000
NODEMAILER_USER="user"
NODEMAILER_PASS="pass"
NODEMAILER_FROM="title <user@email.com>"
NODEMAILER_TO="title <user@email.com>"
```

## Creating the database

```javascript
# cd server
$ npm run database:dev
```

## Running the app

```javascript
# Start server from your folder
$ npm run build
$ npm run start

# Launch web application from your folder
$ npm run build
$ npm run start
```

## Test

```javascript
# Run tests on server folder
$ npm run test

```

---

developed by Jobson Almeida
