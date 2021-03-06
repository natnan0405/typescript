var message: string = "Hello World";
console.log(message)

// any类型
let arrayList: any[] = [1, false, 'fine'];
arrayList[1] = 100;
console.log(arrayList);

// never 类型
let x: never;
let y: number;

// 运行错误，数字类型不能转为 never 类型
x = 123;

// 运行正确，never 类型可以赋值给 never类型
x = (() => { throw new Error('exception') })();

// 运行正确，never 类型可以赋值给 数字类型
y = (() => { throw new Error('exception') })();

// 返回值为 never 的函数可以是抛出异常的情况
function error(message: string): never {
  throw new Error(message);
}

// 返回值为 never 的函数可以是无法被执行到的终止点的情况
function loop(): never {
  while (true) { }
}