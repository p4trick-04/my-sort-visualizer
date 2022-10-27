/*
The purpose this kind of structure is to make the code more readable.
*/
// the html
import Header from "./componenets/headers/Header";
import Bar1 from "./componenets/Bar1";
import './styles/app.scss';
document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  ${Header()}
  <div id="a-timer">
    Time
  </div>
  <div class="arr-container">
    ${Bar1()}
  </div>
`;

// core logic(DOM, algo sorting, etc)
(async () => {

  let {default: main} = await import('./main');
  main();
})()

/* Resources:
https://javascript.info/modules-dynamic-imports
*/