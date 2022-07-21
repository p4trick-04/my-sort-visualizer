import './styles/main.scss'
import {setRandHeight,appendChildRandom} from "./utils"
import Header from "./componenets/Header"
import Settings from "./componenets/Settings"
import Bar1 from "./componenets/Bar1"

import dom_elements from "./dom_elements"
import resizeArray from "./resizeArray"
import shuffleArray from "./shuffleArray"
import algoCategoryLine from "./algoCategoryLine"
import settings from "./settings"

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
    <!-- start container -->
    <div class="container">
      <!-- start header -->
      ${Header()}
      <!-- end header -->
      ${Settings()}
      ${Bar1()}
    </div>
`
const dom = dom_elements();


// initial array. set all of the array with random height
for(let i=0; i<Number(dom.sizeRange.value); i++){
  const div = document.createElement("div") as HTMLDivElement;
  setRandHeight(div);
  appendChildRandom(dom.barContainer1,div,i);
}

resizeArray(dom.barContainer1, dom.sizeRange, dom.sizeInput)
shuffleArray(dom.barContainer1,dom.newArray)
algoCategoryLine(dom.algoMenu, dom.algoMenuLine)
settings(dom.moreSetting, dom.settingDisplay, dom.exitBtn)
