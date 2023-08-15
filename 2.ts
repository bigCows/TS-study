
// interface JK {
//     hello(): void
// }

// class TG {

// }

// class GT  extends TG implements JK {
//     hello() {
//       console.log('hello');
        
//     }
// }

// let gt = new GT()
// gt.hello()
// class VB {
//     readonly age: number = 12
//     constructor(x:number) {
//         this.age = x
//     }    
// }

// interface xx {
//     readonly name: string
// }

// let obj: xx = {
//     name: 'zs'
// }
// // obj.name = 'sa' 报错 属性为只读
// let asd: {readonly name: string} = {
//         name : '342'
// }
// // asd.name = 123 报错 属性为只读

// type fn = (x:string) => void

// type obj = {
//     name: string
// }

// interface fun {
//     get(x:string): void
//     y:string
// }

// interface obj1 {
//     name: string
// }

// // 接口继承使用extends
// // 接口继承接口
// interface fun1 extends fun { 
    
// }
// let con: fun1 = {
//     get(x:string) {},
//     y:'132'
// }
// // 接口继承type
// interface fun2 extends obj {
//     sex: string
// }
// let con1:fun2 = {
//     name: 'ls',
//     sex: 'boy'
// }

// // type继承使用 交叉类型 
// // type继承type
// //  type fnn = fn & {x:string}

// type cul = fun2 & obj1 

// let culs: cul = {
//     sex: 'sad',
//     name: 'wq'
// }

// interface A {
//     fn: (x:string) => string
// }
// interface B extends A {
//     fn: (x:number) => string
// }

interface A {
        fn(x:number): void
    }
interface B {
        say(x:number): void
    }

let wolf: A&B = {
    fn(x:number) {
        console.log('wolf-fn');
        return x
    },
    say(x:number) {
        console.log('wolf-say');
        return x
    }
}

console.log(
    wolf.say(1)
);




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

// // 接口和class的兼容性都是参数少的兼容参数多的

// // 参数个数影响(参数类型为原始类型)：函数参数多的兼容函数参数少
type F1 = (x:string)=> void
type F2 = (y:string,x:string) => void

let Fn1!: F1
let Fn2: F2 

Fn2 = Fn1

// // 1.函数参数类型为原始类型(string,number,boolean)时，参数类型一致即可兼容
// // 2.函数参数类型为对象类型时，对象参数少的兼容参数多的
interface fn2_1 {x:string,y:string}
interface fn3_1 {y:string}
type fn2 = (x: fn2_1) =>void
type fn3 = (x:fn3_1) => void 
let fn2_11!: fn2
let fn3_11!: fn3

    fn2_11 = fn3_11

// // 函数返回值兼容性
type fn_1 = () => string
type fn_2 =() => string

let fn_11:fn_1
let fn_112!:fn_2

// // 返回值为原始类型，类型相同即可兼容
fn_11 = fn_112
fn_112 = fn_11

// // 返回值为对象类型，参数多的兼容少的(多的可赋值少的)

type point2D = () => {x:string}
type point3D = () => {x:string,y:string}

let p2d: point2D
let p3d!:point3D

p2d = p3d


// 泛型

function users<T>(x: T): T {
    return x
}

let myUser = users('x')
let isUser = users(999)
 
console.log(myUser);
console.log(isUser);

// 泛型+联合类型 定义数组
let arr:Array<string | number | object> = [
    1,'2',{name: 'zs'}
]

// 自定义类型时的=> 不是箭头函数 左边是参数类型，右边是返回值类型
type CustomFn = (num1:number,str:string,obj:object) => object 

let objFn: CustomFn = () => {
    return {}
}
objFn(1,'2',{})


// 定义对象属性返回值   
let obj:{
    run:() => number
} = {
    run() {
        return 2
    }
}

// interface
// interface和type的区别
// 同：都可以给对象定义类型
// 异：interface主要用于定义对象类型，type可以为任意数据类型指定类型别名


// 类型推论类型
let a = '1' // 类型推论将a的类型推断为string
const b = 2 // 类型推论将b的类型推断为数字2
// 字面量类型--固定的值
type directive = 'aa' | 22
let c: directive = 'aa'
let d: directive = 22

// <>断言
let isA = (<unknown> '2') as number // 将isA的string类型强制断言为unknown类型

// typeof
// typeof出现在类型注解的后面，所处环境就是ts，typeof只能用来查询变量或属性的类型，无法查询其他形式(比如函数调用者类型)
let abc = {
    x:2,

    y:3
}
type CustomObj = {
    x:number,
    y:number 
}
let fn = (p: CustomObj) => {

}
fn(abc)

type customType = typeof abc

let fn3 = (p:customType) => {}
fn3({x:6,y:7})

// 此时typeof的上下文处于ts的环境上下文
let fn2 = (p: typeof abc) => {

}
fn2({x:1,y:2 })


// 泛型概述--泛型可以自己推断传入的数据类型，并且全局应用，在定义时可以省去类型定义，可在实现时定义具体类型

// 泛型函数语法：在函数名后必须加<>,在<>中添加类型变量，类型变量可以捕获函数实现时所传递的参数类型，类型变量也可作为参数和返回值的类型。表示参数和返回值是同类型
// 调用泛型函数语法：在函数名称后加<>,<>中指定参数具体类型，比如下面fns中的number，传入number类型后，类型变量可捕获到他，此时类型变量的类型为捕获到的参数类型的类型，此时函数的参数和返回值都是该类型，函数可以和多种不同类型一起运行，实现了复用也保证了类型安全
function fns<T>(val:T):T {
    return val
}
fns<number>(2)

type customFn2 = <V>(val:V,val2:V) => V
// 此时函数参数兼容性触发，少的参数可赋值给多的
let fun3:customFn2 = (val) => {
    return val
}
fun3<string>('','')




// 对象类型继承中，子需要有父的所有类型才能继承
type PARENT = {name: string, age: number,A?:string}
type SON = {name: string,age:number,sex:string} 

type T = SON extends PARENT ? true : false
type F = PARENT extends SON  ? true : false
let s:SON
let p:PARENT
p = s!


// 联合类型的继承中，子只要有父其中一个类型即可
type SONTYPE = string
type PARENTTYPE = string | number

const F1:SONTYPE extends PARENTTYPE ? string : boolean 
const T1:PARENTTYPE extends SONTYPE ? string : boolean 


// B为A的子类型，因为A的所有类型，B都有
type SubType<A, B> = B extends A ? true : false;

type Foo = { x: number };
type Bar = { x: number, y: string };

const isSubType: SubType<Foo, Bar>  

type any1<A,B> = B extends A ? true : false

const any2: any1<any,number>

const unk:unknown = 1


const arys:[string,number] = [ '1',2] 
arys.push(111)
console.log(arys,'arys');

class father {
    uname: string
    constructor(name:string) {
        this.uname = name
    }
    say() {
        console.log('father');
        
    }
}


// 继承必须使用extends，子类也必须调用super,否则报错
class son extends father {
    age: number
    constructor(name:string,age:number) {
        super(name)
        this.age = age
    }
}

const f = new father('fahter')
console.log(f);
const s = new son('sons',12)
console.log(s);

type genric<T> = (x:T) => T
interface genric2<T> {
    fn(x:T):T
}

interface person {
    name: string
    age: number
    address?: string
}

// Partial将目标类型转化为可选类型
type person2 = Partial<person>

// 泛型第一个参数为key,第二个参数为类型
type person3 = Record<'name' | 'age' | 3,string | number>

// 从目标类型中，选取指定属性。
type person4 = Pick<person, 'age'>

// 从目标类型中排除指定属性
type person5 = Omit<person, 'name'>

// 将目标类型中的所有属性变为只读
type person6 = Readonly<person>

// 从第一个参数中排除可以赋值给第二个参数的类型，返回被排除的类型
type person7 = Exclude<string | number | boolean, string>

// 从第一个参数中提取可以赋值给第二个参数的类型，返回被提取的类型
type person8 = Extract<string | number | boolean, string>

// 排除目标类型中的null和undefined类型
type person9 = NonNullable<string | number | boolean | null | undefined>

// 将目标类型中的所有属性变为必填属性
type person10 = Required<person>

// 获取函数参数类型
type person11 = Parameters<genric<string>>

// 获取函数返回值类型
type person12 = ReturnType<() => number>

// 获取构造函数参数类型
type person13 = ConstructorParameters<typeof father>

// 获取构造函数实例类型
type person14 = InstanceType<typeof father>

// 提取目标函数的this的类型，如果没有this参数，则为unknown
type person15 = ThisParameterType<genric2<string>>

interface person16 extends person3 {

}

// q:A2为什么是2，A1为什么是1?
    
type A2 = 'x' | 'y' extends 'x' ? 1 : 2;
type A1 = 'x' extends 'x' ? 1 : 2;

{
    interface IdLabel {
        id: number /* some fields */;
      }
      interface NameLabel {
        name: string /* other fields */;
      }
    
      type NameOrId<T extends number | string> = T extends number
      ? IdLabel
      : NameLabel;
    
      function createLabel<T extends number | string>(idOrName: T): NameOrId<T> {
        throw "unimplemented";
      }
       
      let a = createLabel("typescript");
         
       
      let b = createLabel(2.8);
         
      let c = createLabel(Math.random() ? "hello" : 42);
}

{
    type unite = 'x' | 'y' | string | 1 
}

// 函数签名：函数输入(参数)与输出(返回值)
// 索引签名：对象的键类型和值类型


export {}   
