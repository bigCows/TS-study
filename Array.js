/**
 * 常用数组API示例
 */

let arr = [
    {
        name: 'a',
        id: 1,
        filter: 2

    },
    {
        name: 'c',
        id: 2,
        filter: 2
    },
    {
        name: 'c',
        find: 'true'
    }
]

// some 有任意一项满足代码体，就会返回true,且终止函数，不改变原数组
const some = arr.some(item => item.id)
console.log(some); // true

// every 有任意一项不满足代码体，就会返回false,且终止函数，不改变原数组
const every = arr.every(item => item.id)
console.log(every); // false

// map 数组每一项都执行map函数体代码,返回新数组，包含执行过函数体的代码,不改变原数组
const map = arr.map(item => item.name)
const maps = arr.map(item => item.id = 999)
console.log(map); // [ 'a', 'c', 'c' ]
console.log(maps); // [ 999, 999, 999 ]

// filter 数组每项都会执行函数体代码，将符合函数体的项组成新的数组返回,不改变原数组
const filter = arr.filter(item => item.filter)
console.log('-------');
console.log(filter); // [ { name: 'a', id: 999, filter: 2 }, { name: 'c', id: 999, filter: 2 } ]
console.log('!!!!!!!!!');


// find 查找满足条件的一项并返回，找不到返回undefined,不改变原数组，不改变原数组
const find = arr.find(item => item.find === 'true')
console.log(find); // { name: 'c', find: 'true', id: 999 }

// findIndex 查找满足条件的项，返回其索引，没有返回-1,不改变原数组
const findIndex = arr.findIndex(item => item.find === 'true')
const disFindIndex = arr.findIndex(item => item.find === true)
console.log(findIndex); // 2
console.log(disFindIndex); // -1

// reduce 接收两个参数，cab，initValue,cab是函数，接受4个参数，累加值，当前项，当前项索引，原始数组,不给初始值或初始值为0，cab第一个参数将为初始值，当前值为数组中第二个数
let arrs = [1, 2, 3, 4]
let reduce = arrs.reduce((accumulator, currentVal, currentIdx, sourceArr) => {
    console.log(currentVal); // 1,2,3,4
    return accumulator + currentVal
}, 3)
console.log(reduce); // 10

// reduceRight 函数执行从后向前执行，与reduce一致
let arrS = [1, 2, 3, 4]
let reduceRight = arrS.reduceRight((accumulator, currentVal, currentIdx, sourceArr) => {
    console.log(currentVal); // 4,3,2,1
    return accumulator + currentVal
})
console.log(reduceRight); // 10

// reduce 去重
const arr1 = [1, 2, 1, 3, 4, 6, 89, 45, 2, 1, 2, 3, 4, 56, 7, 8, 9, 7, 8, 9,
]

let res = arr1.reduce(
    (count, cur) => {
        if (count.indexOf(cur) === -1) {
            count.push(cur)
        }
        return count
    },
    []
)
console.log(res);

// reduce 找最大值

const max = arr1.reduce((count, cur) =>
    Math.max(count, cur)
)
console.log(max);

const max1 = Math.max(...arr1)
console.log(max1);

// import num from './object'
import { num, a } from "./object.js";
import b from './object.js'
console.log(a());
console.log(num);
console.log(b());

