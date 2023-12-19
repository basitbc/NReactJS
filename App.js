const heading = React.createElement(
  "h1",
  { className: "heading" },
  "Hello World From React"
);

console.log(heading);

{
  /* <div id="paprent">
  <div id="child">
    <h1>Hello</h1>
  </div>
</div>; */
}

const head = React.createElement("h1", {}, "Hello");
const child = React.createElement("div", { id: "child" }, head);
const parent = React.createElement("div", { id: "parent" }, child);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
console.log(parent.props);
