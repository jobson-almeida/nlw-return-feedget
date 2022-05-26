![feedget logo](https://raw.githubusercontent.com/jobsonra/nlw-return-feedget/main/web/src/assets/feedget.svg)

## Description

This project is a personal version of **Feedget**, a feedback application developed by 🚀[Rocketseat](https://www.rocketseat.com.br) during **NLW Return**, an intense and unique one-week event, where I had the opportunity to explore concepts and share knowledge about tools and technologies.\
In this customized version I was able to put some of the SOLID development principles into practice, develop tests, and optimize the screen capture. In addition, I created a classification process and defined the theme according to the browser's appearance, among other accessibility points.\
Its current status is open to improvement and allows expansion.\
&nbsp;

## Languages and Tools

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

## Installation

```javascript
# Install server dependencies
$ cd server
$ npm install
```

```javascript
# Install web application dependencies
$ cd ..\web
$ npm install
```

&nbsp;

### To use Prisma and Nodemailer, create the `.env` file, insert these variables and define the email credentials.

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

&nbsp;

## Creating the database

```javascript
# cd server
$ npm run database:dev
```

## Running the project

```javascript
# Start server
$ cd server
$ npm run build
$ npm run start

# Start web application
$ cd ..\web
$ npm run build
$ npm run start
```

## Test

```javascript
# Run server tests
$ cd server (enter in root folder)
$ npm run test
```

&nbsp;

---

developed by Jobson Almeida
