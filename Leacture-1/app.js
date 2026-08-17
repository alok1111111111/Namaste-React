
const heading = React.createElement(

    "h1",
    // atributes 
    {
        id: "header",
        xyz: "abc"
    },
    // childrean element
    "Hello world from React!"
);

//console.log(heading) -> this is an object
// React.createElement() is a methord which create an javaScript object . 
const root = ReactDOM.createRoot(document.getElementById("root"));

//ReactDOM.createRot() is methord which embade header into html page using render function.
// it will render my parents into my #root id div.If any thing is present inside it will replace by tag which embed by render function.
root.render(heading);