const path = require('path');

var generalScripts = {
  resolve : {
    alias: {

      'main-config'             : path.join(__dirname, './js-config.js'),

      // navbar content
      'create-navbar'           : path.join(__dirname, './src/js/components/views/navbar/create-navbar.js'),
      'create-svg-hero'         : path.join(__dirname, './src/js/components/views/navbar/svg-hero.js'),
      'create-svg-nav-button'   : path.join(__dirname, './src/js/components/views/navbar/svg-nav-button.js'),
    
      // navbar other
      'navbar-actions'          : path.join(__dirname, './src/js/components/actions/navbar.js'),

      // content functions
      'create-content-article'  : path.join(__dirname, './src/js/components/views/draw/create-content-article.js'),
      'create-wrapper'          : path.join(__dirname, './src/js/components/views/draw/create-wrapper.js'),
      'create-footer'           : path.join(__dirname, './src/js/components/views/draw/create-footer.js'),

      // create sections
      'create-content-section'  : path.join(__dirname, './src/js/components/views/draw/sections/create-content-section.js'),
      'create-text-section'     : path.join(__dirname, './src/js/components/views/draw/sections/create-text-section.js'),
      'create-markdown-section' : path.join(__dirname, './src/js/components/views/draw/sections/create-markdown-section.js'),
      'create-iframe-section'   : path.join(__dirname, './src/js/components/views/draw/sections/create-iframe-section.js'),

      // url-specific
      'create-component'        : path.join(__dirname, './src/js/components/views/create-component.js'),

      //home specific
      'create-main-view'        : path.join(__dirname, './src/js/components/views/home/create-main-view.js'),
      'fetch-home-config'       : path.join(__dirname, './src/js/components/views/home/fetch-home-config.js'),
      'fetch-home-content'      : path.join(__dirname, './src/js/components/views/home/fetch-home-content.js')

    }
  }
};

var homeJs = Object.assign({}, generalScripts, {
  mode: "production",
  entry: [
    "./src/js/pages/home.js"
  ],
  output: {
    filename: "./public/home.js"
  }
})


module.exports = [
  homeJs
]
