/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
}

const fs = require('fs')
const cucumber = require('cypress-cucumber-preprocessor').default
module.exports = (on, config) => {
  on('file:preprocessor', cucumber())

  on('after:screenshot', (details) => {
    var data = new Date();

    var dia     = (data.getDate());           // 1-31
    var mes     = (data.getMonth());          // 0-11 (zero=janeiro)
    var ano    = (data.getFullYear());       // 4 dígitos
    var hora    = (data.getHours());          // 0-23
    var min     = (data.getMinutes());
    var seg     = data.getSeconds();
    var mseg    = data.getMilliseconds();

    //  yyyy-MM-dd HH-mm

    var timestamp = ano+'-'+mes+'-'+dia+' '+hora+'-'+min+'-'+seg+'-'+mseg;

    const fileName = timestamp+'.png';

    const newPath = "cypress/screenshots/"+ fileName;

    return new Promise((resolve, reject) => {
        // fs.rename moves the file to the existing directory 'new/path/to'
        // and renames the image to 'screenshot.png'
        fs.rename(details.path, newPath, (err) => {
            if (err) return reject(err)

            // because we renamed and moved the image, resolve with the new path
            // so it is accurate in the test results
            resolve({ path: newPath })
        })
    })
  })
}