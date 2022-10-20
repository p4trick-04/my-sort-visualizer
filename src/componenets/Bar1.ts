import "../styles/arr_style.scss";

export default function Bar1(){
  const div = document.createElement("div") as HTMLDivElement;
  return div.innerHTML= `<div class="arr-style bar-container-1"></div>`;
}