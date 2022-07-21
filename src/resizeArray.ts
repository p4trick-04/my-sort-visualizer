import {getRandNum,setRandHeight,adjustInputText,appendChildRandom} from "./utils"

interface ResizeArrayProps {
  barContainer1: HTMLElement,
  sizeRange: HTMLInputElement,
  sizeInput: HTMLInputElement
}
/**
 * resize the length of the array
 */
export default function resizeArray(
  barContainer1: HTMLElement,
  sizeRange: HTMLInputElement,
  sizeInput: HTMLInputElement
){

  let currSizeVal: number = barContainer1.childElementCount;

  sizeRange.addEventListener("input", (e: Event) => {
    const target = e.target as HTMLInputElement;
    // get the value
    let resizedVal = parseInt(target.value);
    // console.log(`resized size= ${resizedVal} typeof(${typeof(resizedVal)})`);
    // console.log(`curr size= ${currSizeVal} typeof(${typeof(currSizeVal)})`);

    sizeInput.value = String(resizedVal);
    adjustInputText(sizeInput,2);

    // console.log("curr size 'end'",currSizeVal,'\n\n');

    // if the the user want to increase the array
    if(resizedVal>currSizeVal){
      // this loop is needed to prevent jumping(when the user immediately adjust the length to the largest or smallest)
      for(let i=currSizeVal; i<resizedVal; i++){
        currSizeVal=resizedVal;
        let div: HTMLDivElement = document.createElement("div");
        setRandHeight(div);
        appendChildRandom(barContainer1,div,i);
      }
    }
    // else if the user want to decrease the array
    else if(resizedVal<currSizeVal){
      for(let i=currSizeVal; i>resizedVal; i--){

        // remove the element randomly.
        barContainer1.removeChild(barContainer1.children[getRandNum(i-1)]);
        currSizeVal=resizedVal;
      }
    }
  });
}