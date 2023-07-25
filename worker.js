self.onmessage = function(e) {
    console.log('进入子线程');
    const result = e.data
    console.log(result, '主线程传递的数据');
    console.time('计时器');
    for(let i = 0; i < 1000; i++) {
      console.log(i);
    }
      console.timeEnd('计时器');
    result && postMessage('Please write two numbers');
    
//    self.close(); // 子线程关闭worker,以免占用资源
  }

  console.log(self.name, 'self');