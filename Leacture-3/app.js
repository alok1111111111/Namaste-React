import React from "react";
import ReactDOM from "react-dom/client"
// we can create script to run command like
// npx parcel index.html
//npx parcel build index.html
// write in script tage
// "start":"parcel index.html"
//"build":"npx parcel build index.html"

// run command npm start/npm run start and npm run build into terminal

// npm run start -> npm start , it is not valid for other command.

// this is not a good way to write code like this
// const heading = React.createElement(
//       'h1',
//       {id:"heading" ,key:"heading"},   
//       'I am h1 child'
//      );

// jsx is not a html inside javaScript
// jsx => HTML like syntex or XML-like syntax

//console.log(heading)
// jsx code transpiled before it reaches to the javaScript engine -> parcel => babel

// jsx => React.createElement => ReactElement - JS object =>HTMLelement(render);

//const jsxHeading = <h1>Namaste React from jsx</h1>
// console.log(jsxHeading) -> same as console.log(heading)

// const HeadingComponent = () => {
//     return <h1>
//             Namaste React From functional component!
//           </h1>
// }

// we can use Reactelement inside component ,component inside component ,component inside element


const HeadingComponent = () => {
  return < div id = "container">
   
    <h1 className="heading">Namaste react  from functional component</h1>
    <h2 className="heading2">I am heading 2</h2>
  </div>
}

const Title = function(){
  return (
          <div style = { {background:"blue",color:"white",height:"100%"}} className="head">
            <h3>My name is .....</h3>
            <HeadingComponent/>
          </div>
          
        )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(Title());