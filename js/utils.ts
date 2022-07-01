/**
 * get a random number such that less than the interval
 */
export function getRandNum(interval: number): number{
  return Math.floor(Math.random()*interval);
}

/**
 * 
 */
export function setRandHeight(element: Node){
  let rand = getRandNum(500);

  if(rand < 30) rand = (30-rand) + 30;
  element.style.height = rand+"px";
}