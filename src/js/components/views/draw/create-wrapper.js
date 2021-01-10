const mainBody = document.getElementsByTagName("body")[0];

// create main content wrapper
module.exports = function(callback){

    const wrapper = document.createElement('div');
    wrapper.id = 'wrapper';
    mainBody.appendChild(wrapper);
    callback(wrapper);
    
}