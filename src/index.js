import _ from "lodash";
import printMe from "./print";
import "./style.css";
import Icon from "./icon.png";
import xml from "./data.xml"

const component = () => {
  const element = document.createElement("div");
  const btn = document.createElement('button');
  const img = new Image();
  img.src = Icon;

  element.innerHTML = _.join(["Hello", "webpack"], " ");
  btn.innerHTML = "Print";
  element.classList.add("hello");
  btn.onclick = printMe;
  element.appendChild(img);
  element.appendChild(btn);

  console.log(xml);

  return element;
}

document.body.appendChild(component());