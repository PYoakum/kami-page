const fetchHomeContent = require('fetch-home-content');
const fetchHomeConfig = require('fetch-home-config');

async function init(){

  fetchHomeConfig((configData)=>fetchHomeContent(configData))

}

window.addEventListener ?
window.addEventListener("load", init, false) :
window.attachEvent && window.attachEvent("onload", init);
