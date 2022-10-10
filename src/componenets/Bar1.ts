import "../styles/bar_container.scss";

export default function Bar1(){
  const div = document.createElement("div") as HTMLDivElement;
  return div.innerHTML= `<div class="bar-container-1"></div>`;
}