const mainConfig = require('main-config');

module.exports = async function(configData){

  await fetch(mainConfig.homeConfigUrl, {
    method: 'GET', 
    mode: 'cors', 
    cache: 'default',
    headers: {
      'Content-Type': 'application/json'
      
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer'
  }).then(response => response.json()).then(data => {

    configData(data.config);

  });
}