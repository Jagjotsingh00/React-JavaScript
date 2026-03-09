const roots = document.getElementById("root");
const heading = document.createElement("heading");
heading.innerText = "Hello this is this JavaScript DOM";
roots.appendChild(heading);



const parent = React.createElement(
    "div",
    {id:"parent"},
    React.createElement(
        "div",
        {id: "child"},
        React.createElement("h1",{},"This is h1 tag in React")
    )
)
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(parent);