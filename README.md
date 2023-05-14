# persenText

# TypeScript初级

## 类型声明与定义

```typescript
let hhs:number=11//number类型声明赋值

function hhsOne(a:number,b:number):number{
         return a+b
}//函数(返回类型为数字)声明赋值1

let hhsTwo:(a:number,b:number)=>number//函数类型声明2
hhsTwo=(a,b)=>{
   return a+b
}

console.log(hhsTwo(12,34))

let hhsThree:number|string//类型声明定义逻辑符号链接

hhsThree=123
hhsThree='hhs'


let hhsFourObj:{name:string,[targeName:string]:any}//对象类型声明

hhsFourObj={
   name:'cz',
   person:{
    name:"yancun",
    age:12
   },
}
let hhsArrayOne:string[]//数组声明
let hhsArrayTwo:Array<number>

let hhsArrayThree:[string,number,object,any,]//元组
hhsArrayThree=['hello',12,{},'hhs',]

enum perSon{//枚举类型的定义
   male,
   famale
}

let hhsPersonEnum:{name:string,person:perSon}

hhsPersonEnum={
    name:'hhs',
    person:perSon.male
}




```

## tsc配置命令

```
tsc 文件名.ts    (编译出ts转js)
```

```
tsc 文件名.ts -w （进入监视模式：定时自动ts转js，注：只监视当前文件）
```

## tsconfig.json

  

```json
1.新建tsconfig.json文件
2:配置项：
{
    "include": ["./DemoOne/Text.ts"],// ./src/**/*  用来指定哪些ts文件需要编译
    "exclude": [],//不包括的ts文件
    "extends":[],//继承
    "files": [],//用来指定哪些具体的ts文件需要编译
    "compilerOptions": {
        "target": "ES6",//ts被编译的ES版本
        "module": "CommonJS",//使用的模块化规范
        "lib": [],//指定项目要用到的库
        "outDir": "",//指定编译后的js文件所在的目录
        "outFile": "",//将ts代码合并为一个文件
        "allowJs": false,//是否对js文件进行处理编译到编译后的js文件所在的目录
        "checkJs": false,//检查js代码是不是符合语法规范
        "removeComments": false,//是否移除编译后ts到js的注释
        "noEmit": false,//不生成编译后的js文件
        "noEmitOnError": false,//当有错误的时候不生成js文件
        "alwaysStrict": false,//use strict模式
        "noImplicitAny": false,//不允许隐式any的出现
        "noImplicitThis": false,//不允许不明确的this
        
    }
}
```

​    

```
./src/**/*      (**表示任意目录，*表示任意文件)
```

```
tsc  直接编译
tsc -w 直接监听
```

## webpack打包ts文件
1.中新建的文件下npm init初始化生成package.json文件
2.npm i -D webpack webpack-cli typescript ts-loader
//devDependencies： 开发时所依赖的工具包；
//dependencies：项目正常允许时需要的依赖包
