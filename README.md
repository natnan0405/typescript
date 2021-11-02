# typescript
Learn form RUNOOB [菜鸟教程](https://www.runoob.com/typescript/ts-tutorial.html)

## 命令行
  - 全局安装typescript (npm install -g typescript)
  - 新建文件 app.ts
  - 转化文件 app.ts (tsc app.ts)
  - 运行文件 app.js (node app.js)

---

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

  ### 类型断言
  类型断言可以用来手动指定一个值的类型，即允许变量从一种类型更改为另一种类型。
  > 语法格式 ： <类型>值  或   值 as 类型
  ```javascript
  var str = '1' 
  var str2:number = <number> <any> str   //str、str2 是 string 类型
  console.log(str2)
  ```

  ### 类型推断
  当类型没有给出时，TypeScript 编译器利用类型推断来推断类型。
  ```javascript
  // 运行如下代码，编译报错，因为类型已锁定为number。
  // 然而在js中 则无报错
  var num = 1;
  console.log('变量num的值为：' + num);
  num = '12';
  console.log(num); //报错了 error TS2322: Type '"12"' is not assignable to type 'number'.
  ```

  ### 变量作用域
  变量作用域指定了变量定义的位置。程序中变量的可用性由变量作用域决定。

  - **全局作用域** − 全局变量定义在程序结构的外部，它可以在你代码的任何位置使用。
  - **类作用域** − 这个变量也可以称为 字段。类变量声明在一个类里头，但在类的方法外面。 该变量可以通过类的对象来访问。类变量也可以是静态的，静态的变量可以通过类名直接访问。
  - **局部作用域** − 局部变量，局部变量只能在声明它的一个代码块（如：方法）中使用。

---

## TypeScript 运算符
  - 算术运算符 
  - 逻辑运算符
  - 关系运算符
  - 按位运算符
  - 赋值运算符
  - 三元/条件运算符
  - 字符串运算符
  - 类型运算符

### 算术运算符
| 运算符 |     说明     |
| :----- | :----------: |
| +      |     加法     |
| -      |     减法     |
| *      |     乘法     |
| /      |     除法     |
| %      | 取模（余数） |
| ++     |     自加     |
| --     |     自减     |

### 逻辑运算符
| 运算符       | 说明  |
| :----------- | :---: |
| &&           |  and  |
| &#124;&#124; |  or   |
| !            |  not  |

### 关系运算符
| 运算符 |   说明   |
| :----- | :------: |
| ==     |   等于   |
| !=     |  不等于  |
| >      |   大于   |
| <      |   小于   |
| >=     | 大于等于 |
| <=     | 小于等于 |

### 赋值运算符
| 运算符 |        说明        |
| :----- | :----------------: |
| =      |        赋值        |
| +=     | 先进行加运算后赋值 |
| -=     | 先进行减运算后赋值 |
| *=     | 先进行乘运算后赋值 |
| /=     | 先进行除运算后赋值 |
| %=     | 先进行取余数后赋值 |

### 三元运算符 
> test ? result1 : result2

### 类型运算符
| 运算符     | 说明                             |
| :--------- | :------------------------------- |
| typeof     | 一元运算符，返回操作数的数据类型 |
| instanceof | 用于判断对象是否为指定的类型     |



---
## TypeScript 循环

  ### for 循环
  TypeScript for 循环用于多次执行一个语句序列，简化管理循环变量的代码。
  
  ```javascript
    for ( init; condition; increment ){
      statement(s);
    }
  ```

  下面是 for 循环的控制流程解析：
  - init 会首先被执行，且只会执行一次。这一步允许您声明并初始化任何循环控制变量。您也可以不在这里写任何语句，只要有一个分号出现即可。
  - 接下来，会判断 condition。如果为 true，则执行循环主体。如果为 false，则不执行循环主体，且控制流会跳转到紧接着 for 循环的下一条语句。
  - 在执行完 for 循环主体后，控制流会跳回上面的 increment 语句。该语句允许您更新循环控制变量。该语句可以留空，只要在条件后有一个分号出现即可。
  - 条件再次被判断。如果为 true，则执行循环，这个过程会不断重复（循环主体，然后增加步值，再然后重新判断条件）。在条件变为 false 时，for 循环终止。

  ![流程图](https://www.runoob.com/wp-content/uploads/2014/09/cpp_for_loop.png)


  ### for...in 循环
  for...in 语句用于一组值的集合或列表进行迭代输出。

  ```javascript
  var j:any; 
  var n:any = "a b c" 
  
  for(j in n) {
    console.log(n[j])  
  }
  // a
  // b
  // c
  ```

  ### for…of 循环
  for...of 语句创建一个循环来迭代可迭代的对象。 <br>在 ES6 中引入的 for...of 循环，以替代 for...in 和 forEach() ，并支持新的迭代协议。 <br>for...of 允许你遍历 Arrays（数组）, Strings（字符串）, Maps（映射）, Sets（集合）等可迭代的数据结构等。

  ```javascript
  let someArray = [1, "string", false];
 
  for (let entry of someArray) {
    console.log(entry); // 1, "string", false
  }
  ```

 ### orEach、every 和 some 循环
 这三种循环是 JavaScript 的循环语法，TypeScript 作为 JavaScript 的语法超集，当然默认也是支持的。<br>
 因为 forEach 在 iteration 中是无法返回的，所以可以使用 every 和 some 来取代 forEach。

  ```javascript
  let list = [4, 5, 6];
  list.forEach((val, idx, array) => {
    // val: 当前值
    // idx：当前index
    // array: Array
  });

  list.every((val, idx, array) => {
    // val: 当前值
    // idx：当前index
    // array: Array
    return true; // Continues
    // Return false will quit the iteration
  });
  ```

  ### while 循环
  while 语句在给定条件为 true 时，重复执行语句或语句组。循环主体执行之前会先测试条件。<br>

  **语法：** ` while(condition) {  tatement(s); }`<br>

  ![流程图](https://www.runoob.com/wp-content/uploads/2014/09/cpp_while_loop.png)

  **注意：** while 循环的关键点是循环可能一次都不会执行。当条件为 false 时，会跳过循环主体，直接执行紧接着 while 循环的下一条语句。

  ```javascript
  var num:number = 5; 
  var factorial:number = 1; 
  
  while(num >=1) { 
      factorial = factorial * num; 
      num--; 
  } 
  console.log("5 的阶乘为："+factorial); //5 的阶乘为：120
  ```

  ### do...while 循环
  不像 for 和 while 循环，它们是在循环头部测试循环条件。do...while 循环是在循环的尾部检查它的条件。<br>

  **语法：** `do{ statement(s); }while( condition );`<br>
  **注意：** 条件表达式出现在循环的尾部，所以循环中的 statement(s) 会在条件被测试之前至少执行一次。<br>如果条件为 true，控制流会跳转回上面的 do，然后重新执行循环中的 statement(s)。这个过程会不断重复，直到给定条件变为 false 为止。<br>
  
  ![流程图](https://www.runoob.com/wp-content/uploads/2014/09/cpp_do_while_loop.jpg)

  ```javascript
  var n:number = 10;
  do { 
    console.log(n); 
    n--; 
  } while(n>=0);
  ```

  ### break 语句、continue 语句
  | 语句          | 语法        | 说明                                                                                                                                                                                                                                                                 |
  | :------------ | :---------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
  | break 语句    | `break;`    | 当 break 语句出现在一个循环内时，循环会立即终止，且程序流将继续执行紧接着循环的下一条语句。<br>它可用于终止 switch 语句中的一个 case。<br>如果您使用的是嵌套循环（即一个循环内嵌套另一个循环），break 语句会停止执行最内层的循环，然后开始执行该块之后的下一行代码。 |
  | continue 语句 | `continue;` | continue 语句有点像 break 语句。但它不是强制终止，continue 会跳过当前循环中的代码，强迫开始下一次循环。<br> 对于 for 循环，continue 语句执行后自增语句仍然会执行。对于 while 和 do...while 循环，continue 语句重新执行条件判断语句。                                |

  ```javascript
  // break;
  var i:number = 1 
  while(i<=10) { 
    if (i % 5 == 0) {   
      console.log ("在 1~10 之间第一个被 5 整除的数为 : "+i) 
      break     // 找到一个后退出循环
    } 
    i++ 
  }  // 输出 5 然后程序执行结束

  // continue;
  var num:number = 0
  var count:number = 0;
  
  for(num=0;num<=20;num++) {
    if (num % 2==0) {
      continue
    }
    count++
  }
  console.log ("0 ~20 之间的奇数个数为: "+count)    //输出10个偶数
  ```


  ### 无限循环语句
  无限循环就是一直在运行不会停止的循环。 for 和 while 循环都可以创建无限循环。
  ```javascript
  for(;;) {
    console.log('hellow world!')
  };

  while(true) {
    console.log('hellow world!')
  }
  ```