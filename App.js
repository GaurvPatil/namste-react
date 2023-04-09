{
  /* <div id = "parent">
    <div id = "child">
        <h1> nested elements </h1>
          <h2> nested elements 2 </h2>
    </div>
 <div id = "child2">
        <h1> nested elements </h1>
          <h2> nested elements 2 </h2>
    </div>
</div> */
}

const parent = React.createElement(
  "div",
  { id: "parent" },
[
    React.createElement("div", { id: "child" }, [
        React.createElement("h1", {}, "neted elemtns"),
        React.createElement("h2", {}, "neted elemtns2"),
      ]) , 
      React.createElement("div", { id: "child2" }, [
        React.createElement("h1", {}, "neted elemtns"),
        React.createElement("h2", {}, "neted elemtns2"),
      ])
]
 
);
console.log(parent);
const heading = React.createElement("h1", { id: "heading" }, "hello react");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
