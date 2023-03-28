var Single = /** @class */ (function () {
    function Single() {
        this.instance = null;
    }
    Single.prototype.say = function () {
        if (this.instance) {
            return this.instance;
        }
        this.instance = new Single();
        console.log('实例化');
    };
    return Single;
}());
var singles = new Single();
singles.say();
singles.say();
singles.say();
singles.say();
singles.say();
singles.say();
singles.say();
singles.say();
// class Zoo {
//     private  constructor(name) {
//     }
// }
