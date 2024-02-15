var displayLanguage = 'preferred';

function getNodeByAddress (address) {

    const addressArray = address.split('.');
    
    return addressArray.reduce((node, index)=>{
        const childNode = node.childNodes[index];
        return childNode;
    },document.body);

}

function fetchLanguage (language=displayLanguage) {

    fetch('https://urban-web.cyclic.app/urban-web/language/'+language).then(res=>res.json()).then(data=>{
        
        data && data.forEach( textNode => getNodeByAddress(textNode.nodeAddress).textContent = textNode.textContent);

        }).catch(console.log);
}

const langButtons = document.querySelectorAll('.language-button');

langButtons.forEach(button => {
    const language = button.dataset.lang;
    button.addEventListener('click',()=>{
        
        fetchLanguage(language);

        displayLanguage = language;

    })
});

fetchLanguage();