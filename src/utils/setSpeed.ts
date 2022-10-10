export default function setSpeed(
  speedInput: HTMLInputElement,
  speedVerbose: HTMLSpanElement,
){
  speedInput.addEventListener("input",(e: Event) => {
    const target = e.target as HTMLInputElement;
    speedVerbose.textContent = target.value;
  });
}