/**
 * Get a random number between given value.
 * @param interval Max number to be generated
 * @returns A number that is between 0 and interval.
 */
function getRandNum(interval: number) {
  return Math.floor(Math.random()*interval);
}






/**
 * Set random height for HTMLElement
 */
function setRandHeight(element: HTMLElement) {
  let rand: number = getRandNum(500)+30;

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





/**
 * remove last string and convert it to a number data type!\
 * For example: "12px" --> 12
 */
const removeLastString = (str: string) => Number(str.slice(0,str.lastIndexOf("px")));





function adjustInputText(inputTxt: HTMLInputElement, extraWidth: number=0) {
  let width = Math.floor(getTextWidth(inputTxt));
  // add padding to adjust the size
  const paddingLeft: string = window.getComputedStyle(inputTxt, null).getPropertyValue('padding-left');
  const paddingRight: string = window.getComputedStyle(inputTxt, null).getPropertyValue('padding-right');
  let totalWidth = (width + extraWidth) + "px";

  // console.log(`
  //   normal_width: ${width},
  //   pad_left: ${paddingLeft}, 
  //   pad_right: ${paddingRight},
  //   total_width: ${totalWidth}
  // `);

  if(totalWidth==="2px") totalWidth="10px"
  inputTxt.style.width = totalWidth;
  inputTxt.style.paddingRight = paddingRight;
  inputTxt.style.paddingLeft = paddingLeft;
}






/**
 * insert element in three ways
 * @param src source element
 * @param dst destination element
 */
function appendChildRandom(dst: HTMLElement, src: HTMLElement,interval: number): void {
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





/**
 * @param delayTime How long is the delay should be taken?
 */
function delay(delayTime: number): Promise<void>{
  return new Promise<void>((resolve) =>
    setTimeout(() => {
      resolve();
    }, delayTime)
  );
}





/**
 * Swap between two values. Customed for array usage only.
 * @param arr any types of array(array of int/string/boolean)
 * @param a First index
 * @param b Second index
 */
function swapForArr(arr: Array<any> | HTMLCollection, a: number,b: number){
  if(arr instanceof HTMLCollection){
    let temp = (arr[a] as HTMLElement).style.height;
    (arr[a] as HTMLElement).style.height = (arr[b] as HTMLElement).style.height;
    (arr[b] as HTMLElement).style.height = temp;
  }else{
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
  }
}





function printHTMLCollection(arr: HTMLCollection){
  let str: string = "";
  for(let i=0; i<arr.length; i++){
    str += removeLastString((arr[i] as HTMLElement).style.height).toString() + ','
  }
  return new Promise<void>(resolve => {
    console.log(`[${str}]`);
    resolve();
  });
}





const getHeightNode = (ele: HTMLElement) => removeLastString(ele.style.height);

export {
  getRandNum,
  setRandHeight,
  adjustInputText,
  appendChildRandom,
  removeLastString,
  delay,
  swapForArr,
  printHTMLCollection,
  getHeightNode
};