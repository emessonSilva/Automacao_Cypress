//Ambiente de qa  (comando para rodar esse ambiente está no package.json)

const { defineConfig } = require("cypress"); //importando função do cypress
const baseConfig = require("./cypress.config"); //importando função do arquivo

const e2e = {
  baseUrl: "https://www.qa.saucedemo.com/",
  env: {
    //variaveis de ambiente - credenciais
    username: "qa_sauce",
    password: "qa_secret",
  },
};

//criando um novo arquivo de config

module.exports = defineConfig({
  //exportando uma combinação das duas config acima
  ...baseConfig, //spread do js para fazer uma cópia das config que estou importando acima
  e2e, //importando a e2e acima
});
