"use strict";
// interface JK {
//     hello(): void
// }
Object.defineProperty(exports, "__esModule", { value: true });
let wolf = {
    fn(x) {
        console.log('wolf-fn');
        return x;
    },
    say(x) {
        console.log('wolf-say');
        return x;
    }
};
console.log(wolf.say(1));
// class MM {
//     name: 'sz';
//     sex: 'za';
//     say(x:string) {
//         console.log('xxyy', `${x}`);
//     }
// }
// let mm = new MM()
// mm.say('haha')
// interface NN {
//     name: string;
//     sex: string;
//     say(x:string): string
// }
// interface NN {
//     name: string
//     say(x:string): string
// }
// interface all {
//     sayName(): void
// }
// interface JK {
//     hello(): void
// }
// class TG {
//     money: string = '109'
// }
// // 类继承类且实现多个接口
// class GT extends TG implements all {
//     hello() {
//       console.log('hello');
//     }
//     sayName(): void {
//     console.log('sayName');
// }
// }
// //  let fnn1: fnn = 
// // 接口和class的兼容性都是参数少的兼容参数多的 多的可以赋值给少的
// // 参数个数影响(参数类型为原始类型)：函数参数多的兼容函数参数少
// type F1 = (x:string)=> void
// type F2 = (y:string,x:string) => void
// let Fn1!: F1
// let Fn2: F2 
// Fn2 = Fn1
// // 1.函数参数类型为原始类型(string,number,boolean)时，参数类型一致即可兼容
// // 2.函数参数类型为对象类型时，对象参数少的兼容参数多的(多的赋值少的)
// interface fn2_1 {x:string,y:string}
// interface fn3_1 {y:string}
// type fn2 = (x: fn2_1) =>void
// type fn3 = (x:fn3_1) => void 
// let fn2_11!: fn2
// let fn3_11!: fn3
//     fn2_11 = fn3_11
// // 函数返回值兼容性
// type fn_1 = () => string
// type fn_2 =() => string
// let fn_11:fn_1
// let fn_112!:fn_2
// // 返回值为原始类型，类型相同即可兼容
// fn_11 = fn_112
// fn_112 = fn_11
// // 返回值为对象类型，参数少的兼容多的(多的可赋值少的)
// type point2D = () => {x:string}
// type point3D = () => {x:string,y:string}
// let p2d: point2D
// let p3d!:point3D
// p2d = p3d
// 泛型
function users(x) {
    return x;
}
let myUser = users('x');
let isUser = users(999);
console.log(myUser);
console.log(isUser);
// 泛型+联合类型 定义数组
let arr = [
    1, '2', { name: 'zs' }
];
let objFn = () => {
    return {};
};
objFn(1, '2', {});
// 定义对象属性返回值
let obj = {
    run() {
        return 2;
    }
};
// interface 定义对象类型，类型名推荐使用I开头
// interface和type的区别
// 同：都可以给对象定义类型
// 异：interface主要用于定义对象类型，type可以为任意数据类型指定类型别名
// 类型推论类型
let a = '1'; // 类型推论将a的类型推断为string
const b = 2; // 类型推论将b的类型推断为数字2
let c = 'aa';
let d = 22;
// <>断言
let isA = '2'; // 将isA的string类型强制断言为unknown类型，在react的jsx中会报错
// typeof
// typeof出现在类型注解的后面，所处环境就是ts，typeof只能用来查询变量或属性的类型，无法查询其他形式(比如函数调用者类型)
let abc = {
    x: 2,
    y: 3
};
let fn = (p) => {
};
fn(abc);
let fn3 = (p) => { };
fn3({ x: 6, y: 7 });
// 此时typeof的上下文处于ts的环境上下文
let fn2 = (p) => {
};
fn2({ x: 1, y: 2 });
// 泛型概述--泛型可以自己推断传入的数据类型，并且全局应用，在定义时可以省去类型定义，可在实现时定义具体类型
// 泛型函数语法：在函数名后必须加<>,在<>中添加类型变量，类型变量可以捕获函数实现时所传递的参数类型，类型变量也可作为参数和返回值的类型。表示参数和返回值是同类型
// 调用泛型函数语法：在函数名称后加<>,<>中指定参数具体类型，比如下面fns中的number，传入number类型后，类型变量可捕获到他，此时类型变量的类型为捕获到的参数类型的类型，此时函数的参数和返回值都是该类型，函数可以和多种不同类型一起运行，实现了复用也保证了类型安全
function fns(val) {
    return val;
}
fns(2);
// 此时函数参数兼容性触发，少的参数可赋值给多的
let fun3 = (val) => {
    return val;
};
fun3('', '');
// const any2: any1<any,number>
const unk = 1;
const arys = ['1', 2];
arys.push(111);
console.log(arys, 'arys');
class father {
    constructor(name) {
        this.name = name;
    }
    say() {
        console.log('father');
    }
}
// 继承必须使用extends，子类也必须调用super,否则报错
class son extends father {
    constructor(name, age) {
        super(name);
        this.age = age;
    }
}
const f = new father('fahter');
console.log(f);
const s = new son('sons', 12);
console.log(s);
{
    function createLabel(idOrName) {
        throw "unimplemented";
    }
    let a = createLabel("typescript");
    let b = createLabel(2.8);
    let c = createLabel(Math.random() ? "hello" : 42);
}
{
}
