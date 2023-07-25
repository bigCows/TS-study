// var bast64 = "data:image/png;base64,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"
// ;

// // 将这个字符串转换为一个 Blob 对象
// var blob = new Blob([atob(bast64.split(',')[1])], {type: 'image/png'});
// // 创建一个 URL 对象
// var url = URL.createObjectURL(blob);
// // 创建一个 Image 对象
// var image = new Image();
// // 给 Image 对象的 src 属性赋值
// image.src = url;
// console.log(url);
// // 将 Image 对象添加到页面中
// // document.body.appendChild(image);

// // 将base64转换为blob
// function dataURLtoBlob(dataurl) {
//   var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
//       bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
//   while(n--){
//       u8arr[n] = bstr.charCodeAt(n);
//   }
//   return new Blob([u8arr], {type:mime});
// }

// const a = dataURLtoBlob(bast64)
// console.log(a);



// (
//   async function req() {
//     const res = await fetch('http://192.168.51.6:8080/EAMV2.0/app/sysConfig/getRepairOrderConfig')
//     const data = await res.json()
//     console.log(data);
//   }
// )()

// if(window.Worker) {

//     const worker = new Worker('worker.js')
//     worker.postMessage('Hello World');
//     console.log(worker, 'webWorker');
// }

function A() {
    this.name = 'a';this.data = [1,2,3];
}

function B() {
    return A.call(this)
}
// B.prototype = new A();
const b1 = new B();
const b2 = new B();
b1.name = 'b1';
b1.data.push(4);
console.info(b2.name);
console.info(b2.data);