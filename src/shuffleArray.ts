import {getRandNum,setRandHeight} from "./utils"

interface ShuffleArrayProps {
  barContainer1: HTMLElement,
  newArray: HTMLButtonElement,
}
// {barContainer1,newArray}: ShuffleArrayProps
//  barContainer1: HTMLElement,newArray: HTMLButtonElement,
export default function shuffleArray(barContainer1: HTMLElement,newArray: HTMLButtonElement){
  newArray.addEventListener("click",() => {
    for(let i=0; i<barContainer1.childElementCount; i++){
      // this is fine (random index meaning random shuffle)
      let rand = getRandNum(barContainer1.childElementCount);
      setRandHeight(barContainer1.children[rand] as HTMLElement) ;
  
      // this is fine too (linear-from 0 till n)
      // setRandHeight(barContainer1.children[i]);
  
      // both share the same purpose
    }
  });

}