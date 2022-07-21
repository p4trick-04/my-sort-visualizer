/**
 * get a random number such that less than the given interval
 */
function getRandNum(interval: number){
  return Math.floor(Math.random()*interval);
}

/**
 * 
 */
function setRandHeight(element: HTMLElement){
  let rand: number = getRandNum(500);

  if(rand < 30) rand = (30-rand) + 30;
  element.style.height = String(rand)+"px";
}

/**
 * returns the width of child text of any DOM node as a float
 */
function getTextWidth(el: HTMLInputElement) {
  // uses a cached canvas if available
  // let canvas = getTextWidth.canvas || (getTextWidth.canvas = document.createElement("canvas"));  
  let canvas: HTMLCanvasElement = document.createElement("canvas");
  let context: CanvasRenderingContext2D = canvas.getContext("2d")!;

  // get the full font style property
  let font: string = window.getComputedStyle(el, null).getPropertyValue('font');

  // get the user input
  let getInputTxt: string = el.value;

  // set the font attr for the canvas text
  context.font = font;
  let textMeasurement = context.measureText(getInputTxt);
  return textMeasurement.width;
}

function adjustInputText(inputTxt: HTMLInputElement, extraPadding: number=0){
  let width = Math.floor(getTextWidth(inputTxt));
  // add padding to adjust the size
  let widthInPx = (width + extraPadding) + "px";

  // console.log(widthInPx);
  inputTxt.style.width = widthInPx;
}

/**
 * insert element in three ways
 * @src source element
 * @dst destination element
 */
 function appendChildRandom(dst: HTMLElement, src: HTMLElement,interval: number){
  let rand = getRandNum(10);
  if(rand<5){
    // insert at the end
    dst.appendChild(src);
  }else if(rand>5){
    // insert random
    dst.insertBefore(src,dst.children[getRandNum(interval-1)]);
  }else{
    // insert at the beginning
    dst.insertBefore(src,dst.children[0]);
  }
}


export {getRandNum,setRandHeight,adjustInputText,appendChildRandom}