"use strict";
// 实现单例模式
class Single {
    constructor() {
        this.instance = null;
    }
    say() {
        if (this.instance) {
            return this.instance;
        }
        this.instance = new Single();
        console.log('实例化');
    }
}
const singles = new Single();
singles.say();
singles.say();
singles.say();
singles.say();
singles.say();
// class Zoo {
//     private  constructor(name) {
//     }
// }
