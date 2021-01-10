const createWrapper = require('create-wrapper');
const createContentArticle = require('create-content-article');
const createContentSection = require('create-content-section');

module.exports = ( content ) => {

    createWrapper( ( wrapper ) => {

        for(let j = 0; ( j <= content.articles.length - 1 ); j++ ){

            createContentArticle( wrapper, content.articles[j], j, ( article ) => {

                for(let i = 0; ( i <= content.articles[j].sections.length - 1 ); i++ ){

                    createContentSection( article, content.articles[j].sections[i], i )
    
                }

            })
            
        }    
        
    })
    
}