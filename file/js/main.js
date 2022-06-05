const sizeBar = document.getElementById("size");
const sizeVerbose = document.querySelector(".size-verbose");
const barContainer1 = document.querySelector(".bar-container-1");

let currSizeVal = parseInt(sizeBar.value);
const maxValue = sizeBar.max;


sizeVerbose.textContent = currSizeVal;

function setRandHeight(element){
  let rand = Math.floor(Math.random()*500);

  // if the random num < 30, then (30-rand) is for the difference
  // rand + difference will always equal 30
  if(rand < 30) rand += (30-rand);
  element.style.height = rand+"px";
}

function appendChildRandom(element,i){
  let rand = Math.floor(Math.random()*10);
  // insert at the end
  if(rand<5){
    console.log("end");
    barContainer1.appendChild(element);
  }else if(rand>5){
    // insert random
    console.log("random");
    barContainer1.insertBefore(element,barContainer1.children[Math.floor(Math.random()*(i-1))]);
  }else{
    console.log("front");
    // insert at front
    barContainer1.insertBefore(element,barContainer1.children[0]);
  }
}

// set the random height of default length
for(let i=0; i<currSizeVal; i++){
  setRandHeight(barContainer1.children[i]);
}

sizeBar.addEventListener("input", e => {
  // get the value
  let resizedVal = parseInt(e.target.value);
  console.log(`resized size= ${resizedVal} typeof(${typeof(resizedVal)})`);
  console.log(`curr size= ${currSizeVal} typeof(${typeof(currSizeVal)})`);

  sizeVerbose.textContent = resizedVal;
  // if the the user want to increase the length
  if(resizedVal>currSizeVal){
    // this loop is needed to prevent jumping(when the user immidiately adjust the length to maximum or min, for example)
    for(let i=currSizeVal; i<resizedVal; i++){
      console.log("larger");
      currSizeVal=resizedVal;
      let div = document.createElement("div");
      setRandHeight(div);
      appendChildRandom(div,i);
    }
  }
  // else if the user want ot decrease the length
  else if(resizedVal<currSizeVal){
    for(let i=currSizeVal; i>resizedVal; i--){
      console.log("lesser");

      // 1. this will generate random number between mininum length and current length.
      // 2. reason why we do this because we want to remove the bar(div) randomly with a valid index of course(meaning: if above statement(1) is satisfied, then it's a valid index to remove (the bar)+ it's a random number)
      // Math.floor(Math.random()*(i-1))

      barContainer1.removeChild(barContainer1.children[Math.floor(Math.random()*(i-1))]);
      currSizeVal=resizedVal;
    }
  }
  console.log("curr size 'end'",currSizeVal,'\n\n');
});
