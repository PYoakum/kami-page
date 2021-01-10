const createTextSection = require('create-text-section');
const createMarkdownSection = require('create-markdown-section')
const createIframeSection = require('create-iframe-section')

// create content section
module.exports = function(article, section, index){

    // create section
    const contentSection = document.createElement('div');
    contentSection.id = 'wrapper-section-'+index;
    contentSection.classList.add('content-section');

    switch (section.type){

        // text section
        case 'text':
            createTextSection(contentSection, section);
            article.append(contentSection);
            break;
        // markdown section
        case 'markdown':
            createMarkdownSection(contentSection, section);
            article.append(contentSection);
            break;
        case 'iframe':
            createIframeSection(contentSection, section);
            article.append(contentSection);
            break;
        default:
            console.log(`default, ${section.type}`)
            break;

    };

}