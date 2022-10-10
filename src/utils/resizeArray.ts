import {getRandNum,setRandHeight,adjustInputText,appendChildRandom} from "./utilities"
function resize(curr: number,resized: number, barContainer1: HTMLElement){
  // if the the user want to increase the array
  if(resized>curr){
    // this loop is needed to prevent jumping(when the user immediately adjust the length to the largest or smallest)
    for(let i=curr; i<resized; i++){
      curr=resized;
      let div: HTMLDivElement = document.createElement("div");
      setRandHeight(div);
      appendChildRandom(barContainer1,div,i);
    }
  }
  // else if the user want to decrease the array
  else if(resized<curr){
    for(let i=curr; i>resized; i--){

      // remove the element randomly.
      barContainer1.removeChild(barContainer1.children[getRandNum(i-1)]);
      curr=resized;
    }
  }
}

const resizeArray = (
  barContainer1: HTMLElement,
  sizeRange: HTMLInputElement,
  sizeInput: HTMLInputElement
) => {

  let currSizeVal: number = barContainer1.childElementCount;

  sizeRange.addEventListener("input", (e: Event) => {
    const target = e.target as HTMLInputElement;
    // get the value
    let resizedVal = parseInt(target.value);
    // console.log(`resized size= ${resizedVal} typeof(${typeof(resizedVal)})`);
    // console.log(`curr size= ${currSizeVal} typeof(${typeof(currSizeVal)})`);

    sizeInput.value = String(resizedVal);
    adjustInputText(sizeInput,12);

    // console.log("curr size 'end'",currSizeVal,'\n\n');

    // if the the user want to increase the array
    if(resizedVal>currSizeVal){
      // this loop is needed to prevent jumping(when the user immediately adjust the length to the largest or smallest)
      for(let i=currSizeVal; i<resizedVal; i++){
        // barContainer1.children[i].style.backgroundColor = "#F65050";
        currSizeVal=resizedVal;
        let div: HTMLDivElement = document.createElement("div");
        setRandHeight(div);
        appendChildRandom(barContainer1,div,i);
      }
    }
    // else if the user want to decrease the array
    else if(resizedVal<currSizeVal){
      for(let i=currSizeVal; i>resizedVal; i--){
        // barContainer1.children[i].style.backgroundColor = "#F65050";
        // remove the element randomly.
        barContainer1.removeChild(barContainer1.children[getRandNum(i-1)]);
        currSizeVal=resizedVal;
      }
    }
  });


  sizeInput.addEventListener("change",(e: Event)=>{
    const target = e.target as HTMLInputElement;
    let resizedVal: number = parseInt(target.value);
    console.log(sizeRange.max, sizeRange.min);
    
    if(resizedVal>parseInt(sizeRange.max)) resizedVal=parseInt(sizeRange.max);
    if(resizedVal<parseInt(sizeRange.min)) resizedVal=parseInt(sizeRange.min);

    adjustInputText(sizeInput,12);
    resize(currSizeVal,resizedVal,barContainer1)
  });
}



export default resizeArray;