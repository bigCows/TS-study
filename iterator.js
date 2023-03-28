const testArr = [
    {
        name: 'a',
        id: 1,
    },
    {
        name: 'b',
        id: 2,
    },
    {
        name: 'c',
        id: 3,
    },
    {
        name: 'd',
        id: 4,
    },
   
]

// forEach无法中断循环，for、for of 可使用continue break 跳出或终止循环
testArr.forEach(item => {
    if(item.id === 2) {
        // throw new Error('error id is not find')
    }
    console.log('hhhh');
})

for (let index = 0; index < testArr.length; index++) {
    if(testArr[index].id === 2) {
        console.log('wwww');
        // continue  // 跳出本次循环
        break  // 终止整个循环
        console.log('xxx');
    }
    console.log('1321231');
}

for (const iterator of testArr) {
    if(iterator.id === 3) {
        console.log('1');
        // continue  // 跳出本轮
        break  // 终止整个循环
        console.log('2');
    }
    console.log('3');
}

// 查找文件后缀名
const suffix = 'asdada.jsx'
console.log(suffix.substring(suffix.lastIndexOf('.') + 1));

