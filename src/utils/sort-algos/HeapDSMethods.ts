// @ts-nocheck
import { unsortedColor } from "../colors";
import { swapForArr,delay,getHeightNode } from "../utilities";

const getLeftChildIndex = async (i: number) => 2*i+1;

const getRightChildIndex = async (i: number) => 2*i+2;

/**
 * This is the actual heapify logic. This uses "max heap" definition to rectify the heap DS.
 * @param parentIdx This is required because we need to get the children value
 */
async function maxHeapify(
  arr: HTMLCollection, 
  parentIdx: number,
  howFast: number
){
  let largest = parentIdx;
  const leftChildIdx = await getLeftChildIndex(parentIdx);
  const rightChildIdx = await getRightChildIndex(parentIdx);

  if(leftChildIdx < arr.length) arr[leftChildIdx].style.backgroundColor = "yellow";
  if(rightChildIdx < arr.length) arr[rightChildIdx].style.backgroundColor = "yellow";
  // if(leftChildIdx < arr.length || rightChildIdx < arr.length){
  //   arr[leftChildIdx].style.backgroundColor = "yellow" || arr[rightChildIdx].style.backgroundColor = "yellow"
  // }
  await delay(howFast);
  if(
    leftChildIdx < arr.length && 
    getHeightNode(arr[leftChildIdx]) > getHeightNode(arr[largest])
  ){
    arr[largest].style.backgroundColor = "yellow"
    await delay(howFast);

    largest = leftChildIdx;
    
    arr[largest].style.backgroundColor = unsortedColor
    arr[leftChildIdx].style.backgroundColor = unsortedColor;

  }
  if(
    rightChildIdx < arr.length && 
    getHeightNode(arr[rightChildIdx]) > getHeightNode(arr[largest])
  ){
    arr[largest].style.backgroundColor = "yellow"
    await delay(howFast);

    largest = rightChildIdx

    arr[largest].style.backgroundColor = unsortedColor
    arr[rightChildIdx].style.backgroundColor = unsortedColor;
  }

  if(leftChildIdx < arr.length) arr[leftChildIdx].style.backgroundColor = unsortedColor;
  if(rightChildIdx < arr.length) arr[rightChildIdx].style.backgroundColor = unsortedColor;

  if(largest!=parentIdx){
    arr[parentIdx].style.backgroundColor = "yellow"
    arr[largest].style.backgroundColor = "yellow"
    await delay(howFast);

    swapForArr(arr,parentIdx,largest);

    arr[largest].style.backgroundColor = unsortedColor
    arr[parentIdx].style.backgroundColor = unsortedColor

    await maxHeapify(arr,largest,howFast);
  }
}

/**
 * Helper function for heapify-ing heap DS
 */
async function heapify(arr: HTMLCollection,howFast: number) {
  for(let i=arr.length-1; i>=0; i--){
    await maxHeapify(arr,i,howFast);
  }
}

async function deleteMaxHeapify(
  arr: HTMLCollection,
  arrLen: number,
  parentIdx: number,
  howFast: number
){
  let largest = parentIdx;
  const leftChildIdx = await getLeftChildIndex(parentIdx);
  const rightChildIdx = await getRightChildIndex(parentIdx);

  if(leftChildIdx < arrLen) arr[leftChildIdx].style.backgroundColor = "yellow";
  if(rightChildIdx < arrLen) arr[rightChildIdx].style.backgroundColor = "yellow";
  if(
    leftChildIdx<arrLen && getHeightNode(arr[leftChildIdx])>getHeightNode(arr[largest])
  ){
    arr[largest].style.backgroundColor = "yellow"
    await delay(howFast);

    largest = leftChildIdx;
    
    arr[largest].style.backgroundColor = unsortedColor
    arr[leftChildIdx].style.backgroundColor = unsortedColor;
  }
  if(
    rightChildIdx<arrLen && getHeightNode(arr[rightChildIdx])>getHeightNode(arr[largest])
  ){
    arr[largest].style.backgroundColor = "yellow"
    await delay(howFast);

    largest = rightChildIdx

    arr[largest].style.backgroundColor = unsortedColor
    arr[rightChildIdx].style.backgroundColor = unsortedColor;
  }

  if(leftChildIdx<arrLen) arr[leftChildIdx].style.backgroundColor = unsortedColor;
  if(rightChildIdx<arrLen) arr[rightChildIdx].style.backgroundColor = unsortedColor;

  if(largest!=parentIdx){
    arr[parentIdx].style.backgroundColor = "yellow"
    arr[largest].style.backgroundColor = "yellow"
    await delay(howFast);

    swapForArr(arr,parentIdx,largest);

    arr[largest].style.backgroundColor = unsortedColor
    arr[parentIdx].style.backgroundColor = unsortedColor

    await deleteMaxHeapify(arr,arrLen,largest,howFast);
  }
}

export {heapify,deleteMaxHeapify}