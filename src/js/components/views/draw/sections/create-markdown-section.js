const marked = require("marked");

// create markdown content section
module.exports = function(contentSection, section){

  contentSection.innerHTML = marked(section.content);

    
}