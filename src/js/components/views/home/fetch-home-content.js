const mainConfig = require('main-config');
const createMainView = require('create-main-view');
const createNavbar = require('create-navbar');
const navbarActions = require('navbar-actions');
const createFooter = require('create-footer');

module.exports = async function(config){
  await fetch(mainConfig.homeContentUrl, {
    method: 'GET', 
    mode: 'cors', 
    cache: 'default',
    headers: {
      'Content-Type': 'application/json'
    },
    redirect: 'follow', 
    referrerPolicy: 'no-referrer'
  }).then(response => response.json()).then(data => {
    
    let content = data;

    // create main view
    createMainView(content); 

    // create footer
    createFooter(config.footer)

    // create navbar
    createNavbar(config, (navbar)=>{
        
      navbarActions(navbar)

    });   
    
  });
}