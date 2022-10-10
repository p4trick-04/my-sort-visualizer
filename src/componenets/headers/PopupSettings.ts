export default function Settings(){
  const div = document.createElement("div") as HTMLElement;
  div.innerHTML = `
    <div class="setting-display">
      <div class="setting-contents">
        <button class="exit-btn">❌</button>
        <h1 class="title">Settings</h1>
        <div>
          <input type="checkbox" class="timer">
          <p>timer</p>
        </div>
        <div>
          <input type="checkbox" class="asc" checked>
          <p>ascending sort</p>
        </div>
        <div>
          <input type="checkbox" class="desc">
          <p>descending sort</p>
        </div>
        <div>
          <input type="checkbox" class="gap" checked>
          <p>Gap</p>
        </div>
        <div>
          <input type="checkbox" class="pseudocode">
          <p>pseudocode</p>
        </div>
        <div>
          <input type="checkbox" class="compare">
          <p>compare algorithm</p>
        </div>
        <div>
          <p>array model</p>
        </div>
      </div>
    </div>
  `;
  
  return div.innerHTML;
}
