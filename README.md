# typescript
Learn form RUNOOB [菜鸟教程](https://www.runoob.com/typescript/ts-tutorial.html)

## 命令行
  - 全局安装typescript (npm install -g typescript)
  - 新建文件 app.ts
  - 转化文件 app.ts (tsc app.ts)
  - 运行文件 app.js (node app.js)

## TypeScript 变量声明 
  TypeScript 变量的命名规则：
  - 变量名称可以包含数字和字母。
  - 除了下划线 _ 和美元 $ 符号外，不能包含其他特殊字符，包括空格。
  - 变量名不能以数字开头

  声明变量的四种方式
  - 声明变量类型、初始值；
  - 声明变量类型、无初始值，变量值会设为undefined；
  - 声明变量、无类型、有初始值，该变量可以是任意类型；
  - 声明变量、无类型、无初始值，该变量可以是任意类型，默认初始值为 undefined：

  ```javascript
  // 四种方式（以上一一对应）
  // 1. var [变量名] : [类型] = 值;
  var uname:string = "Runoob";
  // 2. var [变量名] : [类型]；
  var uname:string;
  // 3. var [变量名] = 值；
  var uname = "Runoob";
  // 4. var [变量名]；
  var uname;

  <!-- 
  var uname:string = "Runoob";
  var score1:number = 50;
  var score2:number = 42.50
  var sum = score1 + score2
  console.log("名字: "+uname)
  console.log("第一个科目成绩: "+score1)
  console.log("第二个科目成绩: "+score2)
  console.log("总成绩: "+sum)
  -->
  ```

  TypeScript 遵循强类型，如果将不同的类型赋值给变量会编译错误，如下实例：
  > var num:number = "hello"     // 这个代码会编译错误
