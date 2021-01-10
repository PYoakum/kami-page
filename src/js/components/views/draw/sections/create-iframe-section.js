// create iframe content section
module.exports = function(contentSection, section){

    if(section.title){

        let contentTitle = document.createElement('h3');
        let sectionId = String(section.title).toLowerCase().replace(/[^a-zA-Z0-9-_]/g, '-');
        contentTitle.id = sectionId;
        contentTitle.innerText = section.title;
        contentTitle.classList += 'frame-title';
        contentSection.append(contentTitle);

        let contentText = document.createElement('iframe');
        contentText.src = section.content;
        contentText.style.width = section.width;
        contentText.style.height = section.height;
        contentText.setAttribute('scrolling','no');
        contentSection.append(contentText);  

    } else if(!section.title){

        let contentText = document.createElement('iframe');
        contentText.src = section.content;
        contentSection.append(contentText);  

    }
    
}