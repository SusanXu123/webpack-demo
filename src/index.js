import _ from 'lodash';
import './style.css';
import Icon from './icon.png';
import printMe from './print.js'
import { cube } from './math.js'

function component() {
    var element = document.createElement('pre');
    var btn = document.createElement('button');

  // Lodash, currently included via a script, is required for this line to work
  // Lodash, now imported by this script
 
    element.innerHTML = [
      'Hello webpack', 
      '5 cubed is'+ cube(5)
    ].join('\n\n')

    element.classList.add('hello');
    // 将图像添加到我们现有的 div。
    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;

    element.appendChild(btn);
    return element;
}
document.body.appendChild(component());
// let element = component()
// document.body.appendChild(element);
// console.log('module===', module)

//   if (module.hot) {
//     module.hot.accept('./print.js', function () {
//       console.log('Accepting the updated printMe module!')
//       document.body.removeChild(element)
//       element = component()
//       document.body.appendChild(element)
//     })
//   }