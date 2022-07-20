import {getRandNum,setRandHeight} from "./utils"
const sizeRange: HTMLInputElement = document.querySelector("size-range");
const sizeInput: HTMLInputElement = document.querySelector(".size-input");

const barContainer1: HTMLElement = document.querySelector(".bar-container-1");
const bar_List: HTMLCollection = barContainer1.children;
const newArray: HTMLElement = document.querySelector(".new-array");
const moreSetting: HTMLElement = document.querySelector(".more-setting");



// set the sizeInput element "value attribute" the same as the sizeRange has
sizeInput.value = String(bar_List.length);

// adjust the width according the text content
adjustInputText(sizeInput,2);

let currSizeVal: number = bar_List.length;

// initial array
// set all of the array with random height
for(let i=0; i<currSizeVal; i++){
  const bar = barContainer1.children[i] as HTMLElement
  setRandHeight(bar);
}





/**
 * insert element in three ways
 */
function appendChildRandom(element: HTMLElement,interval: number): void{
  let rand = getRandNum(10);
  if(rand<5){
    // insert at the end
    barContainer1.appendChild(element);
  }else if(rand>5){
    // insert random
    barContainer1.insertBefore(element,bar_List[getRandNum(interval-1)]);
  }else{
    // insert at the beginning
    barContainer1.insertBefore(element,bar_List[0]);
  }
}

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

function adjustInputText(inputTxt,extraPadding=0){
  let width = Math.floor(getTextWidth(inputTxt));
  // add padding to adjust the size
  let widthInPx = (width + extraPadding) + "px";

  // console.log(widthInPx);
  inputTxt.style.width = widthInPx;
}




// navbar line animation
{
  const menu: HTMLElement = document.querySelector(".menu");
  const menu_List: HTMLCollection = menu.children;
  const menuLine: HTMLElement = document.querySelector(".menu-line");
  let leftDef: number=0, widthDef: number=0;
  let leftAnimation: number, widthAnimation: number;
  // is first time hover?
  let isFirstTime: boolean=true;

  // minus 1 to exclude this: <li class="menu-line"></li>
  for(let i=0; i<menu_List.length-1; i++){
    /* references
    https://stackoverflow.com/questions/442404/retrieve-the-position-x-y-of-an-html-element
    https://stackoverflow.com/questions/11634770/get-position-offset-of-element-relative-to-a-parent-container
    */


    menu_List[i].addEventListener("mouseover", (e: Event) => {
      let menu = e.target as HTMLInputElement;
      console.log(menu);
      console.log(menu.offsetLeft);

      // show the line
      menuLine.style.display = "block";
      
      // set the with same as the hovered element
      // reason why we do this weird arithmetic operation:
      // 16*2 is the total of left and right padding. We want to exclude padding so that we get the actual content width
      // so with that said we need to substract the total width with the paddings
      // menu.offsetWidth is the total width(which is paddings included)
      widthAnimation = menu.offsetWidth-16*2;
      menuLine.style.width = menu.offsetWidth-16*2 + "px";
      
      // adjust the coordinate
      leftAnimation = menu.offsetLeft+16;
      menuLine.style.left = menu.offsetLeft+16 + "px";
    });
    
    menu_List[i].addEventListener("click", (e) => {
      console.log("clicked");

      // then we can modify the line
      menuLine.style.width = widthAnimation + "px";
      menuLine.style.left = leftAnimation + "px";

      widthDef = widthAnimation;
      leftDef = leftAnimation;
      isFirstTime=false;
    });
  }
  menu.addEventListener("mouseleave", (e) => {
    if(isFirstTime===true){
      menuLine.style.display = "none"
    }
    menuLine.style.width = widthDef + "px";
    menuLine.style.left = leftDef + "px";
  });
}



function resizeArray(resizedVal: number): void{
  // if the the user want to increase the array
  if(resizedVal>currSizeVal){
    // this loop is needed to prevent jumping(when the user immediately adjust the length to the largest or smallest)
    for(let i=currSizeVal; i<resizedVal; i++){
      currSizeVal=resizedVal;
      let div: HTMLDivElement = document.createElement("div");
      setRandHeight(div);
      appendChildRandom(div,i);
    }
  }
  // else if the user want to decrease the array
  else if(resizedVal<currSizeVal){
    for(let i=currSizeVal; i>resizedVal; i--){

      // remove the element randomly.
      barContainer1.removeChild(bar_List[getRandNum(i-1)]);
      currSizeVal=resizedVal;
    }
  }
}

// resize the length of the array
sizeRange.addEventListener("input", (e: Event) => {
  const target = e.target as HTMLInputElement;
  // get the value
  let resizedVal = parseInt(target.value);
  // console.log(`resized size= ${resizedVal} typeof(${typeof(resizedVal)})`);
  // console.log(`curr size= ${currSizeVal} typeof(${typeof(currSizeVal)})`);

  sizeInput.value = String(resizedVal);

  adjustInputText(sizeInput,2);

  resizeArray(resizedVal);
  // console.log("curr size 'end'",currSizeVal,'\n\n');
});

// reshuffle button
function shuffle(): void{
  for(let i=0; i<barContainer1.childElementCount; i++){
    // this is fine (random index meaning random shuffle)
    let rand = getRandNum(barContainer1.childElementCount);
    setRandHeight(bar_List[rand] as HTMLElement) ;

    // this is fine too (linear from 0 till n)
    // setRandHeight(barContainer1.children[i]);

    // both have the same purpose
  }
}

newArray.addEventListener("mousedown", () => {
  // console.log(newArray);
  let setInt = setInterval(shuffle,50);
  newArray.addEventListener("mouseup",() => {
    clearTimeout(setInt);
  });
});


newArray.addEventListener("click", () => {
  shuffle();
});


// let the user custom the length of the array through input
sizeInput.addEventListener("click",() => {
  const maxValue = sizeRange.max;
  // console.log(sizeRange," clicked");
  sizeInput.addEventListener("input", (e) => {
    const target = e.target as HTMLInputElement;
    if(target.value>maxValue){
      sizeInput.value = maxValue;
      target.value = maxValue;
    }
    console.log(target.value);

    adjustInputText(target,2);
    resizeArray(Number(target.value));
  },false);
});

const checkBox_List: NodeList = document.querySelectorAll("input[type='checkbox']")

// setting button <div class="more-setting">⚙️</div>
moreSetting.addEventListener("click", () => {
  const settingDisplay: HTMLElement = document.querySelector(".setting-display");
  const exitBtn: HTMLElement = settingDisplay.querySelector(".exit-btn");
  
  settingDisplay.style.display = "flex";
  moreSetting.classList.add("spin");
  
  exitBtn.addEventListener("click", () => {
    settingDisplay.style.display = "none";
    moreSetting.classList.remove("spin");
  });
  
  // settingDisplay.addEventListener("click", () => {
    //   settingDisplay.style.display = "none";
    //   moreSetting.classList.remove("spin");
    // });
  // checkBox_List[3] is the gap checkbox
  for(let i=0; i<checkBox_List.length; i++){
    checkBox_List[i].addEventListener("click", (e: Event) => {
      const target = e.target as HTMLInputElement;

      const classNamae = target.className;
      console.log(classNamae);
      if(classNamae==="gap"){
        if(target.checked===false){
          console.log("gap false");
          barContainer1.style.columnGap = "0px";
        }else{
          barContainer1.style.columnGap = "1px";
        }
      }
    });
  }
});

