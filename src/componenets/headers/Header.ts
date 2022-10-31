import Settings from "./Settings";
import AlgoMenu from "./AlgoMenu";
import MoreAlgo from "./MoreAlgo";
import shuffleArray from "./ShuffleArray";
import "../../styles/algo_wrap.scss"

export default function Header(){
  const div = document.createElement("div") as HTMLElement;
  div.innerHTML = `
    <header>
      <div class="left-wrap">
        <button class="start-btn" type="button">Start</button>
        ${shuffleArray()}

        ${Settings()}
      </div>

      <div class="algo-wrap">
        ${AlgoMenu()}
        ${MoreAlgo()}
      </div>
    </header>
  `
  return div.innerHTML;
}
