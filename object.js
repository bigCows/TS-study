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



