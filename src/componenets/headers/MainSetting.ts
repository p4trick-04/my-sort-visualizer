import "../../styles/tool_tip.scss";

export default function MainSetting(){
  const div = document.createElement("div");
  div.innerHTML = `
    <div class="main-setting">
      <div>
        <label for="size">Size</label>
        <div class="size-wrap">
          <!-- range bar input  here -->
          <input type="range" class="size-range" min="8" max="500" value="8">
          
          <span>
            <!-- user input here -->
            <input type="text" class="size-input" minlength="1" maxlength="3">
            <span>Elements</span>
          </span>
        </div>
      </div>

      <div>
        <label for="speed">Speed</label>
        <div class="speed-wrap">
          <input type="range" id="set-speed" min="1" max="2000" value="1000">
          <span class="tooltip">
            <span class="speed-verbose">1000</span>ms
            <span class="tooltip-txt">1 second = 1000 millisecond</span>
          </span>
        </div>
      </div>
    </div>`
  ;

  return div.innerHTML;
}