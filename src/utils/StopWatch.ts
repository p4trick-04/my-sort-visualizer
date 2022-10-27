// @ts-nocheck
interface Options{
  delay: number
}
const StopWatch = function(elem: HTMLElement, options?: Options) {
  var timer: HTMLSpanElement = createTimer(),
    offset: number,
    clock: number,
    interval: number
  ;

  // default options
  options = options || {};
  options.delay = options.delay || 1;

  // append elements     
  elem.appendChild(timer);

  // initialize
  reset();

  // private functions
  function createTimer() {
    return document.createElement("span");
  }

  function start() {
    if (!interval) {
      offset = Date.now();
      interval = setInterval(update, options.delay);
    }
  }

  function stop() {
    if (interval) {
      clearInterval(interval);
      interval = null;
    }
  }

  function reset() {
    clock = 0;
    render();
  }

  function update() {
    clock += delta();
    render();
  }

  function render() {
    timer.innerHTML = (clock / 1000).toString();
  }

  function delta() {
    var now = Date.now(),
      d = now - offset;

    offset = now;
    return d;
  }

  // public API
  this.start = start;
  this.stop = stop;
  this.reset = reset;
};

export default StopWatch;