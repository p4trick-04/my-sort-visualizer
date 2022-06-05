const sizeBar = document.getElementById("size");
const sizeVerbose = document.querySelector(".size-verbose");
const barContainer1 = document.querySelector(".bar-container-1");

let currSizeVal = parseInt(sizeBar.value);
const maxValue = sizeBar.max;


sizeVerbose.textContent = currSizeVal;

sizeBar.addEventListener("input", e => {
  let resizedVal = parseInt(e.target.value);
  console.log(`resized size= ${resizedVal} typeof(${typeof(resizedVal)})`);
  console.log(`curr size= ${currSizeVal} typeof(${typeof(currSizeVal)})`);

  sizeVerbose.textContent = resizedVal;
  if(resizedVal>currSizeVal){
    console.log("larger");
    currSizeVal=resizedVal;
    let div = document.createElement("div");
    barContainer1.appendChild(div);
  }else if(resizedVal<currSizeVal){
    console.log("lesser");
    barContainer1.removeChild(barContainer1.children[resizedVal]);
    currSizeVal=resizedVal;
  }
  console.log("curr size 'end'",currSizeVal,'\n');
});
