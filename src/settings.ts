export default function settings(
  moreSetting: HTMLDivElement, 
  settingDisplay: HTMLDivElement, 
  exitBtn:HTMLButtonElement
){
  // setting button <div class="more-setting">⚙️</div>
  moreSetting.addEventListener("click", () => {
    
    settingDisplay.style.display = "flex";
    moreSetting.classList.add("spin");
    
    exitBtn.addEventListener("click", () => {
      settingDisplay.style.display = "none";
      moreSetting.classList.remove("spin");
    });
    
    settingDisplay.addEventListener("click", () => {
      settingDisplay.style.display = "none";
      moreSetting.classList.remove("spin");
    });
  
    // // checkBox_List[3] is the gap checkbox
    // for(let i=0; i<checkBox_List.length; i++){
    //   checkBox_List[i].addEventListener("click", (e: Event) => {
    //     const target = e.target as HTMLInputElement;
  
    //     const classNamae = target.className;
    //     console.log(classNamae);
    //     if(classNamae==="gap"){
    //       if(target.checked===false){
    //         console.log("gap false");
    //         barContainer1.style.columnGap = "0px";
    //       }else{
    //         barContainer1.style.columnGap = "1px";
    //       }
    //     }
    //   });
    // }
  });

}