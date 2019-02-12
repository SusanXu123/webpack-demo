 import _ from 'lodash'
 import { cube } from './math.js'

 if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
 }
 function component() {
  var element = document.createElement('pre');
//   var button = document.createElement('button');
//   var br = document.createElement('br');
//   button.innerHTML = 'Click me and look at the console!';
  element.innerHTML = _.join([
      'Hello webpack!',
      '5 cubed is equal to ' + cube(5)
  ], '\n\n')
//   element.appendChild(br);
//   element.appendChild(button);
//   // Note that because a network request is involved, some indication
//   // of loading would need to be shown in a production-level site/app.
//   // 注意当调用 ES6 模块的 import() 方法（引入模块）时，必须指向模块的 .default 值，因为它才是 promise 被处理后返回的实际的 module 对象。
//   button.onclick = e => import( /* webpackChunkName: "print" */ './print').then(module => {
//     var print = module.default;
//     print();
//   })
  return element;
 }

 document.body.appendChild(component());