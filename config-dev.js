//Ambiente de dev (comando para rodar esse ambiente está no package.json)

const { defineConfig } = require("cypress"); //importando função do cypress
const baseConfig = require("./cypress.config"); //importando função do arquivo
const dotenv = require('dotenv')
const path = require('path')

//configuração para alcançar o arquivo .env.dev
dotenv.config({
  path: path.resolve(__dirname, './.env.dev') //__dirname é uma variável do node. O exemplo ao lado é uma forma de gerar o caminho absoluto para o arquivo .env.dev que está no mesmo diretório do arquivo atual.
})

const e2e = {
  baseUrl: process.env.BASE_URL, //O node guarda as variaveis definidas no arquivo env.dev nesse obejto (process.env)
  env: {
    //variaveis de ambiente - credenciais
    username: process.env.USER, 
    password: process.env.PASSWORD,
  },
};

//criando um novo arquivo de config

module.exports = defineConfig({
  //exportando uma combinação das duas config acima
  ...baseConfig, //spread do js para fazer uma cópia das config que estou importando acima
  e2e, //importando a e2e acima
});
