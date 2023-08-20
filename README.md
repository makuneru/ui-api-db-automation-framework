# ui-api-db-automation-framework-template

Automation Framework that Supports UI, API and Database Automation

# Built With TS - webdriver.io - Axios - MySQL - Mocha - Chai

\*<a href="https://www.typescriptlang.org/">TypeScript</a> - Programming Language

\*<a href="https://mochajs.org/">Mocha</a> - Core Test Framework

\*<a href="https://www.chaijs.com/">Chai</a> - Assertion Library

\*<a href="https://webdriver.io/">webdriver.io</a> - Next-gen browser and mobile automation test framework for Node.js.

\*<a href="https://axios-http.com/docs/intro">Axios</a> - Axios is a promise-based HTTP Client for node.js and the browser.

\*<a href="https://www.npmjs.com/package/mysql2">Mysql2</a> - Use to connect with MySQL Databases.

#Setup

1. Download and install <a href="https://nodejs.org/en/download/">node.js</a> (LTS)
2. Donwload and install <a href="https://code.visualstudio.com/download">Visual Studio Code.</a>
3. Open Visual Studio Code
4. Clone this project repository
5. Open new terminal
6. Install all dependencies using -> npm install
7. Run all test using this command:
   for UI: npm run test-ui

   for API: npm run test-api
      or npx wdio run ./wdio.conf.ts  --spec ./src/tests/api/bg.api.test.ts

   for DB: npm run test-db
      or npx wdio run ./wdio.conf.ts  --spec ./src/tests/database/db.test.ts
8. to open allure report -> allure generate allure-results --clean && allure open
