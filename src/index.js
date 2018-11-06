import _ from 'lodash';
import './style.css';
import Icon from './icon.png';
import printMe from './print.js'

function component() {
    var element = document.createElement('div');
    var btn = document.createElement('button');

  // Lodash, currently included via a script, is required for this line to work
  // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');
    // 将图像添加到我们现有的 div。
    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;

    element.appendChild(btn);
    return element;
}

  document.body.appendChild(component());