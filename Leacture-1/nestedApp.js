/**
 * 
 *  <div id = "parent">
 *      <div id = "child1">
 *          <h1>I am h1 tage </h1>
 *          <h2>I am h2 tage </h2>
 *      </div>
 *      <div id = "child2">
 *          <h1>I am h1 tage </h1>
 *          <h2>I am h2 tage </h2>
 *      </div>
 * </div>
 * if something is allready present within the root div of html page,it will replace with render element.
 * other element which is not inside root div will not effected.
 * if we want to add children tag , we have to pass React.createElement(-----) as an third argument.
 * To create sibling elements we have to pass tags inside an array.
 * 
 * reactElement(object) => HTML(Browser understands)
 * React.createElement(____) => javaScript object.
 */

const parent = React.createElement(
    "div",
    {id:"parent"},
    [
        React.createElement(
            "div",
            {id:"child1"},
            [
                React.createElement(
                    "h1",
                    {},
                    "I am h1 tage"
                ),
                React.createElement(
                    "h2",
                    {},
                    "I am h2 tage"
                )
            ]
        )
        ,
        React.createElement(
            "div",
            {id:"child2"},
            [
                React.createElement(
                    "h1",
                    {},
                    "I am h1 tage"
                ),
                React.createElement(
                    "h2",
                    {},
                    "I am h2 tage"
                )
            ]
        )
    ]

);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);//render root object, created by React.createElement(____).




