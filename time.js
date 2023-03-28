var data = [{
    name: "音乐1",
    time: "2017-08-18 13:23:21",
}, {
    name: "音乐2",
    time: "2018-03-18 19:23:21",
},
{
    name: "音乐3",
    time: "2019-03-24 19:23:21",
},
 {
    name: "音乐4",
    time: "2017-05-16 19:23:21",
},
{
    name: "音乐5",
    time: "2020-12-12 19:23:21",
}];
//时间排序
//prop：对象数组排序的键，
//align：排序方式，"positive"正序，"inverted"倒序。
function compare(prop, align) {
    // console.log(prop,'prop');
    return function (a, b) {
        // console.log(a,'a');
        // console.log(b,'b');
        var value1 = a[prop];
        var value2 = b[prop];
        if (align == "positive") {//正序
            // console.log(new Date(value1) - new Date(value2));
            return new Date(value1) - new Date(value2);
        } else if (align == "inverted") {//倒序
            // console.log('123123');
            // console.log(new Date(value1) - new Date(value2),'21312');
            return new Date(value2) - new Date(value1);
        }
    }
}
data.sort(compare('time', 'inverted'));
// console.log(data);
// console.log(compare('time', 'inverted'));

var arr = [ {
    time: 12
},
{
    time: 1232
},
{
    time: 1
},
{
    time: 435
}, {
    time: 2
},
{
    time: 234
}]

 const iscompare = (sequence) => {
    // true 正序
    // false 倒序
    return (a,b) => {
        if(sequence) {
            return new Date(a['time']) - new Date(b['time'])
        }
        return new Date(b['time']) - new Date(a['time'])
    }
}

arr.sort(iscompare(false))
console.log(arr,'arrrrr');