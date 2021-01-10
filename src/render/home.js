const path = require('path');
const fs = require('fs');
const pug = require('pug');

homeContent = {

    // html title
    'title' : 'Peter\'s Site',
    // html theme
    'theme' : {
      'color' : '#444'
    },
    // meta tag data
    'meta' : {
      // favicon
      'ico' : 'favicon.ico',
      // open graph
      'og' : {
        'desc'  : 'Peter\'s Personal Site',
        'url'   : '/',
        'title' : 'Peter\'s Personal Site',
        'image' : 'favicon.ico'
      }
    },
    // stylesheets
    'styleSheets' : [
      // default stylesheet
      './home.css',
      'https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300&family=Staatliches&display=swap'
    ],
    'javaScripts' : [
      './home.js'
    ]
}

module.exports = () => {



  fs.writeFile(
    path.resolve(__dirname+'/../../dist/public/home.html'), 
    pug.renderFile(__dirname+'/../pug/home.pug', homeContent),
    (err)=>{
      if(err){
        console.log('rendering error')
      } else {
        console.log('rendered to '+__dirname+'/../pug/home.pug')
      }
    }
  )

}