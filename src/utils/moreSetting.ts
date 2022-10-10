export default function moreSetting(
  moreSettingBtn: HTMLButtonElement, 
  moreSettingDisplay: HTMLDivElement, 
  exitBtn:HTMLButtonElement
){
  moreSettingBtn.addEventListener("click", () => {
    
    moreSettingDisplay.style.display = "flex";
    moreSettingBtn.classList.add("spin");
    
    exitBtn.addEventListener("click", () => {
      moreSettingDisplay.style.display = "none";
      moreSettingBtn.classList.remove("spin");
    });
    
    // settingDisplay.addEventListener("click", () => {
    //   settingDisplay.style.display = "none";
    //   moreSettingBtn.classList.remove("spin");
    // });
  
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