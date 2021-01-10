module.exports = (colors) => {

    const heroValues = {
        id : 'hero',
        viewBox : '0 0 24.316 19.844',
        width : 91.904,
        height : 75,
        path : {
            pPart : {
                id :'hero-p-part',
                d : 'm 4.228419,15.616336 h 3.17496 V 11.46804 h 4.228054 V 4.146383 l -7.402974,-8e-5 z M 7.403379,7.321184 H 8.456473 V 8.292999 H 7.403379 Z',
                style : 'fill:'+colors.pColor+';'   
            },
            yPart : {
                id :'hero-y-part',
                d : 'm 12.685007,11.46796 h 4.228054 v 0.971816 H 8.456953 v 3.17648 H 20.087942 V 4.146223 H 16.912981 V 8.292999 H 15.859888 V 4.146223 h -3.174921 z',
                style : 'fill:'+colors.yColor+';'
            },
            borderPart : {
                id :'hero-border-part',
                d : 'M 5.24e-4,19.844231 H 24.315116 V -8.73e-4 H 3.64e-4 Z M 3.175485,3.174087 H 21.141436 V 16.66903 H 3.175485 Z',
                style : 'fill:'+colors.borderColor+';'
            }
        }
    }
    
    // hero
    const heroSvg = document.createElementNS('http://www.w3.org/2000/svg','svg');
    heroSvg.id = heroValues.id;
    heroSvg.setAttribute('viewBox', heroValues.viewBox);
    heroSvg.setAttribute('width', heroValues.width);
    heroSvg.setAttribute('height', heroValues.height);
    
    const heroSvgPPart = document.createElementNS("http://www.w3.org/2000/svg", "path");
    heroSvgPPart.id = heroValues.path.pPart.id;
    heroSvgPPart.setAttribute('d', heroValues.path.pPart.d);
    heroSvgPPart.setAttribute('style', heroValues.path.pPart.style);
    
    const heroSvgYPart = document.createElementNS("http://www.w3.org/2000/svg", "path");
    heroSvgYPart.id = heroValues.path.yPart.id;
    heroSvgYPart.setAttribute('d', heroValues.path.yPart.d);
    heroSvgYPart.setAttribute('style', heroValues.path.yPart.style);
    
    const heroSvgBorderPart = document.createElementNS("http://www.w3.org/2000/svg", "path");
    heroSvgBorderPart.id = heroValues.path.borderPart.id;
    heroSvgBorderPart.setAttribute('d', heroValues.path.borderPart.d);
    heroSvgBorderPart.setAttribute('style', heroValues.path.borderPart.style);
    
    heroSvg.appendChild(heroSvgPPart);
    heroSvg.appendChild(heroSvgYPart);
    heroSvg.appendChild(heroSvgBorderPart);

    return heroSvg
}