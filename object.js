let obj = { name: 'xiaoming', age: 18, tea: true }

// for (let i in obj) {
const item = Object.prototype.hasOwnProperty(obj)
console.log(item);
// }

let num = 111

let a = function () {
    console.log('aaa');
}
export { num, a }

function b() {
    console.log('bbb');
}

export default b

for (const key in obj) {
    // if (Object.hasOwnProperty.call(obj, key)) {
    //     const element = object[key];
        
    // }
    
}

// 第一次i为0，i++先进行运算，先返回值，在自增，i++返回值为0，但是i已经是自增后的新值1，然后,0<5，所以打印出来的是i新值1
// 第一次i为0，
// let i = 0;
// while (i++ < 5) console.log(i);


// 第一次i为0，++i先进行自增，先自增，再返回值，++i返回值为1，i也是已经是自增后的新值1，然后,1<5，所以打印出来的是i新值1
let i = 0;
while (++i < 5) console.log(i);
console.log('---------------');
var aa = 1
var bb = aa++
console.log(bb,'bb');
console.log(aa,'aa');

var cc  = 1
var dd = ++cc
console.log(dd,'dd');
console.log(cc,'cc');


// var a
// if(1) {
//   console.log(a);
//   a=1
//   function a() {}
//   a=6
// }
// console.log(a);


// if(1) {
//   console.log(a);
//   a=1
//   // function a() {}
//   a=6
// }
// console.log(a);