export default function MoreAlgo(){
  const div = document.createElement("div");
  div.innerHTML = `
  <div class="more-algo-container">
    <div>
      <h3>Comparasion sorts</h3>
      <ul class="more-algo-pick">
        <li>Quick sort (Hoare Partition)</li>
        <li>In-place merge sort</li>
        <li>Intro sort</li>
        <li>Heap sort</li>
        <li>Block sort</li>
        <li>Tim sort</li>
        <li>Shell sort</li>
        <li>Exchange sort</li>
        <li>Tree sort</li>
        <li>Cycle sort</li>
        <li>Patience sort</li>
        <li>Smooth sort</li>
        <li>Strand sort</li>
        <li>Tournament sort</li>
        <li>Coktail shaker sort</li>
        <li>Comb sort</li>
        <li>Gnome sort</li>
        <li>Odd-even sort</li>
      </ul>
    </div>
    <div>
      <h3>Non-comparasion sorts(Integer)</h3>
      <ul class="more-algo-pick">
        <li>Pigeonhole sort</li>
        <li>Bucket sort(uniform keys)</li>
        <li>Bucket sort(integer keys)</li>
        <li>Counting sort</li>
        <li>LSD Radix sort</li>
        <li>MSD Radix sort</li>
        <li>LSD Radix sort(in-place)</li>
        <li>Burstsort</li>
        <li>Flashsort</li>
        <li>Postman sort</li>
      </ul>
    </div>
    <div>
      <h3>Other sorts</h3>
      <ul class="more-algo-pick">
        <li>Bead sort</li>
        <li>Simple pancake sort(uniform keys)</li>
        <li>"I Can't Believe It Can" sort</li>
        <li>Spaghetti (Poll) sort</li>
        <li>Bitonic sort</li>
        <li>Sorting network</li>
        <li>Bogosort</li>
        <li>Stooge sort</li>
        <li>Slowsort</li>
      </ul>
    </div>
  </div>
  `;
  
  return div.innerHTML;
}