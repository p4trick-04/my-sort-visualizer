import { ascending,descending } from "../dom/dom_elements";

export default function moreSetting(
  moreSettingBtn: HTMLButtonElement, 
  moreSettingDisplay: HTMLDivElement, 
  exitBtn:HTMLButtonElement,
  checkBox_List: NodeList,
  barContainer1: HTMLDivElement,
){
  moreSettingBtn.addEventListener("click", () => {
    
    moreSettingDisplay.style.display = "flex";
    moreSettingBtn.classList.add("spin");
    
    exitBtn.addEventListener("click", () => {
      moreSettingDisplay.style.display = "none";
      moreSettingBtn.classList.remove("spin");
    });
    
    // checkBox_List[3] is the gap checkbox
    for(let i=0; i<checkBox_List.length; i++){
      checkBox_List[i].addEventListener("click", (e: Event) => {
        const target = e.target as HTMLInputElement;
  
        const classNamae = target.className;
        console.log(classNamae);
        // gap setting
        if(classNamae==="gap"){
          if(target.checked===false){
            console.log("gap false");
            barContainer1.style.columnGap = "0px";
          }else{
            barContainer1.style.columnGap = "1px";
          }
        }
      });
    }
    ascending.addEventListener("click",function(){
      // if both ascending and descending are not checked, then check current input which is ascending in this event
      if(this.checked===false && descending.checked===false){
        this.checked=true;
      }
      else{
        this.checked = true;
        descending.checked=false;
      }
    });

    descending.addEventListener("click",function(){
      // if both ascending and descending are not checked, then check current input which is descending in this event
      if(this.checked===false && ascending.checked===false){
        this.checked=true;
      }
      else {
        this.checked = true;
        ascending.checked=false;
      }
    });
  });

}