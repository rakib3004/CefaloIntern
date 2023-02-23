// draw back of asynchronous javascript
let a= 15;
let b = 0;


setTimeout(()=>{
    b=75;

})

console.log(a+b);

console.log('%s has %d SBO their share in total revenu is: %o, how ever pi value is more than %i','Cefalo',5,[10,12,15,16,74], 3.1415926535897926);

const ProgressBar = require('progress');
const bar = new ProgressBar(':bar', { total: 1129 });
const timer = setInterval(() => {
  bar.tick();
  if (bar.complete) {
    clearInterval(timer);
  }
}, 100);
