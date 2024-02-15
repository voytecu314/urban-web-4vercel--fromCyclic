document.addEventListener("keydown", function(e) {
    if (e.key == 'Enter') {
      e.preventDefault();
    }
});

function isTextNode (node) {

    return node.nodeType === 3 && node.textContent.trim().length > 1;

}

function wrapTextContent (element) {
    
    const nodes = element.childNodes;

    for(let node of nodes) {

        if( isTextNode(node) ) { 

            const span = document.createElement('span');
            node.after(span);
            span.appendChild(node);  
            span.contentEditable = 'true';
            span.classList.add('admin-edit');
        }

        if(node.nodeType === 1 && !node.classList.contains("admin-button")) {
            wrapTextContent(node);
        } 
    }
}

document.querySelectorAll('a').forEach(anchor=>{
    anchor.removeAttribute('href');
});

wrapTextContent(document.body);


let textNodesAfterSave = [];

function getTextNodesAddressesAfterSave (element,index='') { 
    const nodes = element.childNodes;

    for (let i = 0; i < nodes.length; i++) {
        let node = nodes[i];
        //console.log(index+i,': ', node.childNodes.length, node);
        if(node.childNodes.length && !node.classList.contains("admin-button")) getTextNodesAddressesAfterSave(node,index+i+'.');
        else if(node.nodeType === 3 && node.textContent.trim().length > 1) { //if ( isTextNode() )
            const textNode = {
                numberOfOrder: textNodesAfterSave.length,
                nodeAddress: (index+i).slice(0,-2),
                textContent: node.textContent,
                optimalLength: node.textContent.length
            }
            textNodesAfterSave.push(textNode);
        }
    }

    return textNodesAfterSave;

}

document.querySelector('.admin-button>button').addEventListener('click',()=>{
    textNodesAfterSave = [];
    const fetchOpt = {
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({
            textNodesArray: getTextNodesAddressesAfterSave(document.body),
            language: displayLanguage
        })
    };

    fetch('https://urban-web.cyclic.app/urban-web/admin/text-nodes', fetchOpt)
        .then(res=>res.json())
        .then(console.log)
        .catch(console.log);

});

document.body.addEventListener("input", function({target}) {
    if(target.tagName !== 'INPUT' && target.tagName !== 'TEXTAREA') 
    console.log(target.tagName, 'text changed');
 });

Array.from(document.forms).forEach(form=>form.addEventListener('submit',(e)=>e.preventDefault()));
//setInterval(()=>window.location.reload(),1000*20); 