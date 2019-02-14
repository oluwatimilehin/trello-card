import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Header from "./header";
import FileList from "./filelist";
import Prompt from "./prompt";

function CardContainer({ files }) {
  return (
    <div className="container">
      <Header text="Phone Features" />
      <FileList files={files} />
      <Prompt text="Add a card" />
    </div>
  );
}

let cards = [
  {
    name: "Subwoofer",
    id: 1
  },
  {
    name: "Non-porous, Washable",
    id: 2
  },
  {
    name: "Waterproof",
    id: 3
  },
  {
    name: "Wings",
    id: 4
  },
  {
    name: "Beveled Bezel",
    id: 5
  },
  {
    name: "Seedless",
    id: 6
  }
];

ReactDOM.render(<CardContainer files={cards} />, document.getElementById("root"));
