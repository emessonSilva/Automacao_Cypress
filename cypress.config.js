const { defineConfig } = require("cypress");

module.exports = defineConfig({
  //configuração para gerar relatórios (reporter)
  reporter: "cypress-multi-reporters",
  reporterOptions: {
    reporterEnabled: "cypress-mochawesome-reporter, mocha-junit-reporter",
    mochaJunitReporterReporterOptions: {
      mochaFile: "cypress/reports/junit/results-[hash].xml", //onde será armazenado
    },
    cypressMochawesomeReporterReporterOptions: {
      charts: true,
      reportPageTitle: "Relatório de testes",
      embeddedScreenshots: true, //para os screenshots serem anexados automaticamente
      inlineAssets: true, //gerar um único arquivo html
      saveAllAttempts: false, //se tiver retentativa de teste, não salvar todos os resultados
    },
  },
  chromeWebSecurity: false, //tirar erros do chrome
  experimentalStudio: true, //para utilizar o cypress studio
  e2e: {
    baseUrl: 'https://www.saucedemo.com/',
    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on); //para as configurações do mochawesome sejam reconhecidas
    },
  },
});
