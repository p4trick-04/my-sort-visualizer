export default function dom_elements(){
  const barContainer1 = document.querySelector<HTMLDivElement>(".bar-container-1")!;
  const sizeRange = document.querySelector<HTMLInputElement>(".size-range")!;
  const sizeInput = document.querySelector<HTMLInputElement>(".size-input")!;
  const algoMenu = document.querySelector<HTMLUListElement>(".algo-menu")!;
  const algoMenuLine = document.querySelector<HTMLLIElement>(".algo-menu-line")!;
  const moreSetting = document.querySelector<HTMLDivElement>(".more-setting")!;
  const settingDisplay = document.querySelector<HTMLDivElement>(".setting-display")!;
  const exitBtn = document.querySelector<HTMLButtonElement>(".exit-btn")!;
  const newArray = document.querySelector<HTMLButtonElement>(".new-array")!;
  const checkBox_List: NodeList = document.querySelectorAll("input[type='checkbox']")!;

  const dom = {
    newArray,
    barContainer1,
    sizeRange,
    sizeInput,
    algoMenu,
    algoMenuLine,
    moreSetting,
    settingDisplay,
    exitBtn,
    checkBox_List
  }
  return dom;
}
