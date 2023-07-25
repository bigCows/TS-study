"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let cc = '123';
// let nums = '123' 
// console.log(nums);
let strs;
// strs = 123
// nums.set()
let nums;
nums = 123;
nums = '123';
let numss = 12;
numss = '123';
numss = true;
numss = undefined;
numss = null;
numss = function () { };
let hh;
hh = '123';
hh = 123;
hh = undefined;
console.log(typeof (hh));
// interface Type {
//     name: string,
//     readonly id: number,
//     age12?: number,
//     [propName: string]: string | number
// }
// //  tom的类型是Type，所以tom的属性必须和Type相同，不能多不能少，
// let tom: Type = {
//     name: 'cat',
//     id: 12,
//     age12: 19,
//     sex: 'boy',
//     abc:'123'
// }
// 定义数组
// 类型+ []
let array = [1, 2, 3];
// 泛型定义
let Arr = [];
let resArr = [1, 2, 3];
// 类数组-- 不能用普通数组形式来表现，应该使用接口形式
function fn() {
    let args = arguments;
}
Arr.push('123');
//  函数
//  函数声明
function fn1(x, y) {
    return x + y;
}
console.log(fn1(1, '2')); // '12'
// 此处第一个=>不是箭头函数，左边为输入类型，右边为输出类型，第二个=>表示为箭头函数
let fn2 = (x, y) => {
    return x + y;
};
console.log(fn2(5, 9));
let fn3 = function (x, y) {
    return x + y;
};
console.log(fn3(1, 2));
// 可选参数 必须写在必须参数后
let fn4 = function (x, y, z) {
    return x + y;
};
console.log(fn4(1, 2));
// 参数默认值
// TS会将添加默认值的形参转化为可选参数，此时可以写在必传参数前面
let fn5 = function (x = 2, y) {
    return x + y;
};
console.log(fn5(undefined, 2)); // 4
// 剩余参数
let fn6 = function (x, ...rest) {
    console.log(...rest);
};
console.log(1, 2, 3, 4);
function fun(x) {
    if (typeof (x) === 'number') {
        return x.toString().trim().split('').reverse().join('');
    }
    return x.trim().split('').reverse().join('');
}
// console.log(fun(123));
console.log(fun('143'));
let aaa = [1, 2, '3'];
let bbb = [1, '2', true];
const istype;
let cat = {
    name: '猫',
    run() {
        console.log('run');
    }
};
let fishs = {
    name: '鱼',
    id: 1,
    swim() {
        console.log('fish');
    }
};
function getName(animal) {
    // return animal.name 可访问到共有属性name
    return animal.id;
}
console.log(getName(cat));
function getX(x) {
    return x;
}
console.log(getX(1));
let str = '123'; // 宽泛类型
let str1 = '555'; // 值类型
const str2 = '3443'; // 值类型
let str3 = '123'; // 将宽泛类型转为值类型
let arr4 = [1, 2, str, str1]; // 1,2,string,555
// 元组对于类型的数量和顺序都有限制，添加数据可使用push方法，直接添加会报错
let ar1;
ar1 = ['qwe', 213];
// ar1 = [123,'q3we']
ar1[0] = '23';
// ar1[0] = 123
// 常规定义数组联合类型 顺序和数量没有限制
let ar2;
ar2 = [123, 123, '123', 123];
// 泛型定义联合类型 顺序数量没有限制，元组有限制
let ar4 = [];
ar4 = ['123', 123, 123, '123'];
var obj3 = {
    name: 'zs'
};
let str4 = '123';
var ar5;
(function (ar5) {
    ar5[ar5["a"] = 1.5] = "a";
    ar5[ar5["b"] = -3] = "b";
    ar5[ar5["c"] = -2] = "c";
    ar5[ar5["d"] = str4.length] = "d";
})(ar5 || (ar5 = {}));
console.log(ar5.a);
console.log(ar5.b);
console.log(ar5.c);
console.log(ar5.d);
var enums;
(function (enums) {
    enums[enums["first"] = 0] = "first";
    enums[enums["second"] = 1] = "second";
    enums[enums["third"] = 2] = "third";
})(enums || (enums = {}));
// let arc = [enums.first,enums.second,enums.third]
let arv = [enums.first, enums.second];
// console.log(arc);
console.log(arv);
class M {
    constructor(na) {
        this.name = na;
    }
    sayHi() {
        return `${this.name}`;
    }
}
let xiaoMing = new M('小明');
console.log(xiaoMing.sayHi());
console.log(xiaoMing);
class Son extends M {
    sayHi() {
        return `son调用M ${super.sayHi()}`;
    }
}
let son1 = new Son('儿子');
console.log(son1.sayHi());
// // 定义公共的属性和方法
// class zoo {
//     public tiger;
//     public  constructor (name:string) {
//         this.tiger = name
//     }
// }
// let myTiger = new zoo('老虎')
// console.log(myTiger.tiger);
class zoo {
    constructor(name) {
        this.tiger = '213';
        this.tiger = name;
    }
}
class myZoo extends zoo {
    constructor(tiger) {
        super(tiger);
        console.log(this.tiger);
    }
}
let myTiger = new zoo('老虎');
console.log(myTiger.tiger);
let myTigers = new myZoo('小老虎');
class Dog {
    constructor(name) {
        this.myDog = '二哈';
        this.myDog = name;
    }
}
let dogs = new Dog('德牧');
console.log(dogs.myDog);
// dogs.myDog = '23'
// 抽象类
class animal {
    constructor(isName) {
        this.name = isName;
    }
}
// 抽象类
class dog extends animal {
    constructor() {
        super(...arguments);
        // 抽象方法和抽象属性都必须继承，作为抽象类,子类必须实现抽象方法
        this.name = 'xxx';
    }
    sayName() {
        return `${this.name} + dog`;
    }
}
class cats extends animal {
    sayName() {
        return `${this.name} + dog`;
    }
}
let iscat = new cats('猫');
let Dogs = new dog('二哈');
console.log(Dogs.sayName());
class TG {
    constructor() {
        this.money = '109';
    }
}
// 类继承类且实现多个接口
class GT extends TG {
    hello() {
        console.log('hello');
    }
    sayName() {
        console.log('sayName');
    }
}
let gt = new GT();
gt.hello();
gt.sayName();
console.log(gt.money);
class C {
    sayName() {
        console.log('实现C');
    }
}
let cccc = new C();
cccc.sayName();
let vc = {
    name: '123',
    sex: '123'
};
console.log(vc);
// 接口可以继承类(TS特有)，当声明了一个类point时，除了声明了一个类外，还创建了一个point的类型
class point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    sayName() {
        console.log(`${this.x}`);
        console.log(`${this.y}`);
    }
}
let myPoint = new point('xx', 'yy'); // 实例化类
myPoint.sayName();
// point类型
let myPoint_1 = {
    x: '32432',
    y: 'y123',
    sayName() { }
};
console.log(myPoint_1.x);
myPoint_1.sayName();
let sd = {
    name: '123',
    age: '19',
    tea(x) {
        return x;
    },
    cat(x) {
        return x;
    }
};
console.log(sd.tea('茶'));
console.log(sd.cat('猫'));
class User {
    constructor(n, a) {
        this.name = n;
        this.age = a;
    }
    info() {
        return `${this.name}的年龄是 ${this.age}`;
    }
}
const hd = new User('后盾人', 12);
const xj = new User('向军', 18);
console.log(hd);
const userss = [hd, xj];
console.log(userss);
class Pig {
    constructor() {
        this.name = 'peiqi';
    }
    say() {
        console.log(this.name + '123');
    }
}
let pigzhu = new Pig();
pigzhu.say();
class PigOne extends Pig {
    constructor() {
        super();
        // console.log(this.name);
    }
    sayName() {
        console.log(this.name);
    }
}
let zhuzhu = new PigOne();
zhuzhu.sayName();
