
//  problem with this is the it is not works for multiple elements we need to think about iterative approach
function customRender(reactElement, container){
    // const domElement = document.createElement(reactElement.type);
    // domElement.innerHTML = reactElement.children;
    // domElement.setAttribute('href',reactElement.props.href);
    // domElement.setAttribute('target', reactElement.props.target);
    // container.appendChild(domElement)

    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children;
    for(const prop in reactElement.props){
        // phle hota tha abhi to hai hi nhi children
        if(prop === 'children') continue;
        domElement.setAttribute(prop,reactElement.props[prop])

    }
    container.appendChild(domElement);
}
const reactElement = {
    type: 'a',
    props:{
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit google'
}
const mainContainer =  document.getElementById("root");

customRender(reactElement, mainContainer);