import React from "react";
import ReactDOM from "react-dom/client"

// write command npx parcel index.html or npx parcel build index.html to download file like dist and .parcel-cache
// write command npm install to download node_modules
// we don't need to push file that can be regenerated

//To support orlder version of browser ,we will use browserlist
// write in package.jason

// "browserlist":[
// "last 2 chrome version",
// "last 2 firefox version"
//]
// ["last 2 version"] -> for last 2 version of all the browser

const heading = React.createElement(
    "div",
    {id:"head"},
    [
        React.createElement(
            'div',
            {id:"child1" ,key:"child1"},
            [
                React.createElement(
                'h1',
                {key:"h1"},
                'I am h1 child'
                ),
                React.createElement(
                'h2',
                {key:"h2"},
                'I am h2 child'
                )
            ]
        ),
        React.createElement(
            'div',
            {id:"child2",key:"child2"},
            [
                React.createElement(
                'h1',
                {key:"h1"},
                'I am h1 child'
                ),
                React.createElement(
                'h2',
                {key:"h2"},
                'I am h2 child'
                )
            ]
        )
    ]
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);