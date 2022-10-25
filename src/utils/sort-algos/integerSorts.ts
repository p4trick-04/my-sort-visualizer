import { delay, getHeightNode } from "../utilities";
import { unsortedColor,sortedColor } from "../colors";
import { barContainer1,speedInput,arrContainer } from "../../dom/dom_elements";

const arr: HTMLCollection = barContainer1.children;


async function lsdRadixSort(){
  const howFast: number = Number(speedInput.value);

  let max: number = getHeightNode(arr[0])
  for(let i=1; i<arr.length; i++)
    max = Math.max(max,getHeightNode(arr[i]));
  
  let lsd=1;
  const count: number[] = Array(arr.length)
  // let sortedOne: Element[] = Array(arr.length)
  let sortedOne = Array(arr.length)
  
  while(max){
    count.fill(0);

    for(let ele of Array.from(arr)){
      ele.style.backgroundColor = "yellow";
      await delay(howFast)
      let val: number = getHeightNode(ele);
      val = Math.floor(val/lsd)%10;
      count[val]++;
      ele.style.backgroundColor = unsortedColor;
    }
    
    for(let i=1; i<arr.length; i++){
      count[i] += count[i-1]
    }
    
    for(let i=arr.length-1; i>=0; i--){
      const val: number = (Math.floor(getHeightNode(arr[i])/lsd))%10;
      const idx: number = --(count[val])
      // sortedOne[idx] = arr[i];
      sortedOne[idx] = [getHeightNode(arr[i]),arr[i]]
    }

    for(let i=0; i<sortedOne.length; i++){
      arr[i].style.backgroundColor = "skyblue";
      sortedOne[i][1].style.backgroundColor = "skyblue";
      await delay(howFast)

      // arr[i].style.height = (getHeightNode(sortedOne[i])).toString() + "px";
      arr[i].style.height = sortedOne[i][0] + "px";
      await delay(howFast)

      arr[i].style.backgroundColor = unsortedColor;
      sortedOne[i][1].style.backgroundColor = unsortedColor;
    }
    // sortedOne = Array(arr.length);
    lsd*=10
    max = Math.floor(max/10)
  }
}

export {
  lsdRadixSort
}