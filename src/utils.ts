/**
 * get a random number such that less than the interval
 */
function getRandNum(interval: number): number{
  return Math.floor(Math.random()*interval);
}

/**
 * 
 */
function setRandHeight(element: HTMLElement){
  let rand = getRandNum(500);

  if(rand < 30) rand = (30-rand) + 30;
  element.style.height = rand+"px";
}


export {getRandNum,setRandHeight}