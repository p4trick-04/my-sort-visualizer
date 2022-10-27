export default function MoreAlgo(){
  const div = document.createElement("div");
  div.innerHTML = `
  <div class="more-algo-container">
    <div>
      <h3>Comparasion sorts</h3>
      <ul class="more-algo-pick">
        <li>In-place merge sort</li>
        <li>Heap sort</li>
        <li>Tim sort</li>
        <li>Shell sort</li>
        <li>Exchange sort</li>
        <li>Cycle sort</li>
        <li>Patience sort</li>
        <li>Strand sort</li>
        <li>Coktail shaker sort</li>
        <li>Comb sort</li>
        <li>Gnome sort</li>
        <li>Odd-even sort</li>
      </ul>
    </div>
    <div>
      <h3>Non-comparasion sorts(Integer)</h3>
      <ul class="more-algo-pick">
        <li>LSD Radix sort</li>
      </ul>
    </div>
    <div>
      <h3>Other sorts</h3>
      <ul class="more-algo-pick">
        <li>Pancake sort</li>
        <li>Bogosort</li>
        <li>Stooge sort</li>
        <li>Slowsort</li>
      </ul>
    </div>
  </div>
  `;
  
  return div.innerHTML;
}