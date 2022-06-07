const sizeBar = document.getElementById("size");
const barContainer1 = document.querySelector(".bar-container-1");
const newArray = document.querySelector(".new-array");
const sizeInput = document.querySelector(".size-input");
const moreSetting = document.querySelector(".more-setting");
const settingDisplay = document.querySelector(".setting-display");
const exitBtn = document.querySelector(".exit-btn");
const menu = document.querySelector(".menu");
const menu_List = menu.children;


// set the sizeInput element "value attribute" the same as the sizeBar has
sizeInput.value = sizeBar.value;

// adjust the width according the text content
sizeInput.style.width = String(Math.floor(getTextWidth(sizeInput))+2) + "px";

let currSizeVal = parseInt(sizeBar.value);
const maxValue = sizeBar.max;

// get the gap value
let colGap = parseFloat(window.getComputedStyle(menu).getPropertyValue("column-gap"));
// console.log(colGap);

// minus 1 to exclude this: <li class="menu-line"></li>
for(let i=0; i<menu_List.length-1; i++){
  menu_List[i].addEventListener("mouseenter", (e) => {
    let menu = e.target;
    console.log(menu);
    let x = e.pageX;
    let y = e.pageY;
    console.log(`(${x},${y})`);
  });
}

function setRandHeight(element){
  let rand = Math.floor(Math.random()*500);

  // if the random num < 30, then (30-rand) is for the difference
  // rand + difference will always equal 30
  if(rand < 30) rand += (30-rand);
  element.style.height = rand+"px";
}

function appendChildRandom(element,i){
  let rand = Math.floor(Math.random()*10);
  if(rand<5){
    // insert at the end
    barContainer1.appendChild(element);
  }else if(rand>5){
    // insert random
    barContainer1.insertBefore(element,barContainer1.children[Math.floor(Math.random()*(i-1))]);
  }else{
    // insert at front
    barContainer1.insertBefore(element,barContainer1.children[0]);
  }
}

// set the random height for default length
for(let i=0; i<currSizeVal; i++){
  setRandHeight(barContainer1.children[i]);
}

// resize the length of the array
sizeBar.addEventListener("input", e => {
  // get the value
  let resizedVal = parseInt(e.target.value);
  // console.log(`resized size= ${resizedVal} typeof(${typeof(resizedVal)})`);
  // console.log(`curr size= ${currSizeVal} typeof(${typeof(currSizeVal)})`);

  sizeInput.value = resizedVal;
  let width = Math.floor(getTextWidth(sizeInput));
  // add padding to adjust the size
  let widthInPx = (width + 2) + "px";
  // console.log(widthInPx);
  sizeInput.style.width = widthInPx;

  // if the the user want to increase the length
  if(resizedVal>currSizeVal){
    // this loop is needed to prevent jumping(when the user immidiately adjust the length to maximum or min, for example)
    for(let i=currSizeVal; i<resizedVal; i++){
      // console.log("larger");
      currSizeVal=resizedVal;
      let div = document.createElement("div");
      setRandHeight(div);
      appendChildRandom(div,i);
    }
  }
  // else if the user want ot decrease the length
  else if(resizedVal<currSizeVal){
    for(let i=currSizeVal; i>resizedVal; i--){
      // console.log("lesser");

      // 1. this will generate random number between mininum length and current length.
      // 2. reason why we do this because we want to remove the bar(div) randomly with a valid index of course(meaning: if above statement(1) is satisfied, then it's a valid index to remove (the bar)+ it's a random number)
      // Math.floor(Math.random()*(i-1))

      barContainer1.removeChild(barContainer1.children[Math.floor(Math.random()*(i-1))]);
      currSizeVal=resizedVal;
    }
  }
  // console.log("curr size 'end'",currSizeVal,'\n\n');
});

// reshuffle button
newArray.addEventListener("click", () => {
  console.log(newArray);
  for(let i=0; i<barContainer1.childElementCount; i++){
    // this is fine (random index meaning random shuffle)
    let rand = Math.floor(Math.random()*barContainer1.childElementCount);
    setRandHeight(barContainer1.children[rand]);

    // this is fine too (linear from 0 till n, where n is the length of the array)
    // setRandHeight(barContainer1.children[i]);

    // they act similar though
  }
});

// let the user custom the length of the array through input size bar
sizeInput.addEventListener("click",() => {
  // console.log(sizeBar," clicked");
  sizeInput.addEventListener("input", (e) => {
    let val = e.target.value;
    // console.log(val);

    let width = Math.floor(getTextWidth(e.target));
    // add padding to adjust the size
    let widthInPx = (width + 2) + "px";
    // console.log(widthInPx);
    e.target.style.width = widthInPx;

  },false);

});

// setting button <div class="more-setting">⚙️</div>
moreSetting.addEventListener("click", () => {
  settingDisplay.style.display = "flex";
  moreSetting.classList.add("spin");
  exitBtn.addEventListener("click", () => {
    settingDisplay.style.display = "none";
    moreSetting.classList.remove("spin");
  });
});

/**
 * returns the width of child text of any DOM node as a float
 */
 function getTextWidth(el) {
  // uses a cached canvas if available
  // let canvas = getTextWidth.canvas || (getTextWidth.canvas = document.createElement("canvas"));  
  let canvas = document.createElement("canvas");
  let context = canvas.getContext("2d");

  // get the full font style property
  let font = window.getComputedStyle(el, null).getPropertyValue('font');

  // get the user input
  let getInputTxt = el.value;

  // set the font attr for the canvas text
  context.font = font;
  let textMeasurement = context.measureText(getInputTxt);
  return textMeasurement.width;
}
