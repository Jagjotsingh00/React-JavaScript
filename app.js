// with JavaScript 
const roots = document.getElementById("root");
const heading = document.createElement("heading");
heading.innerText = "Hello this is this JavaScript DOM";
roots.appendChild(heading);

// // ---------------------------------------------------------------------------

// // with React

// const parent = React.createElement(
//     "div",
//     {id:"parent"},
//     React.createElement(
//         "div",
//         {id: "child"},
//         React.createElement("h1",{},"This is h1 tag in React")
//     )
// )
// const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(parent);



// -------------------------------------------------------------------------------

const fam = React.createElement(
    "div", 
    {id: "father"},
    React.createElement("h1",{},"I am father"),
    React.createElement("h1",{},"I am mother"),
    React.createElement("h1",{},"I am child")
)
const member = ReactDOM.createRoot(document.getElementById("home"))
member.render(fam);