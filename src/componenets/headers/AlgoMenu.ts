
export default function AlgoMenu(){
  const div = document.createElement("div") as HTMLElement;
  div.innerHTML = `
    <ul class="algo-menu" style="border:1px solid black">
      <li>Quick (Lomuto Partition)</li>
      <li>Merge</li>
      <li>Bubble</li>
      <li>Insertion</li>
      <li>Selection</li>
      <li class="algo-menu-line"></li>
    </ul>
    <button class="more-algo-btn">
      More
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-double-right" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z"/>
        <path fill-rule="evenodd" d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z"/>
      </svg>
    </button>
  `;

  return div.innerHTML;
}

