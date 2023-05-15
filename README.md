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
    "compilerOptions": {//配置编译选项
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

      扩展小知识:
      //devDependencies： 开发时所依赖的工具包；
      //dependencies：项目正常允许时需要的依赖包

```json
1.中新建的文件下npm init初始化生成package.json文件
2.npm i -D webpack webpack-cli typescript ts-loader
3.新建webpack.config.js文件
const path = require('path')//引入一个包，path的作用实际就是帮助我们去拼接一个路径

const htmlWebpackPlugin =require('html-webpack-plugin')//引入html-webpack-plugin

const {CleanWebpackPlugin}=require('clean-webpack-plugin')//注意，这里不是默认配置项，文档上是暴露CleanWebpackPlugin，所以要解构赋值

module.exports = {//webpack中所有的配置信息都在module.export中
    //入口
    entry: './src/index.ts',

    output: {
        //指定打包的目录
        path: path.resolve(__dirname, 'dist'),\
        
        environment:{
            arrowFunction:false//webpack不想兼容ie，即使配置了兼容还是会报错，会有箭头函数的出现，所以在这里配置false可以避免箭头函数的出现向下兼容ie
        },
        
        filename: "bundle.js"//打包后的文件名
    },
    //指定webpack打包要使用的模块
    module: {
        //指定loader，加载的规则
        rules: [
          {
              //test指定的是规则生效的文件
              test: /\.ts$/,
              //要使用的loader
              use:[
                {
                    loader:"babel-loader",
                    options:{
                        //设置预定义的环境
                        presets:[
                            [   //指定的环境的插件
                                "@babel/preset-env",
                                {
                                    //要兼容的目标浏览器
                                    targets:{
                                       'ie':'7'
                                    },
                                    //指定的corejs版本
                                    "corejs":'3',
                                    //使用core.js的方式"usage",表示按需加载
                                    "useBuiltIns":"usage"
                                }
                            ]
                        ]
                    }
                },//配置babel去兼容ie之类的浏览器
                'ts-loader',
              ],
              //要排除的文件
              exclude: /node-modules/
          }
        ]
    },
    plugins:[//插件配置项中直接使用html-webpack-plugin构造对象
        new htmlWebpackPlugin({
            // title:"自定义标题"
            template:"./src/index.html"
        }),//里面参数对象是配置项options

        new CleanWebpackPlugin()//在新的webpack中可以在output中设置clean:true不用引入CleanWebpackPlugin
    ],
    resolve:{
        extensions:['.ts','.js']//用来设置模块化引入
    }

}
4.新建src下的index.ts作为入口
5.在目录结构下新建tsconfig.json文件
{
    "compilerOptions": {
        "module": "ES2015",
        "target": "ES2015",
        // "strict": true,
    },
    "exclude": [
        "node_modules"
    ]
}
6.在package.json中script中增加“build”:"webpack"   //运行打包构建npm run build

7.npm i -D html-webpack-plugin //安装html的webpack插件
 在src下新建index.html文件作为打包后的html模板,在webpack.config.js中引入html-webpack-plugin同时在plugin配置中增加实例对象options中配置参数

8.npm i -D webpack-dev-server//安装webpack内置服务器，进行自动更新，根据项目的更新自动刷新浏览器
 在package.json中script中增加“start”:"webpack serve --open"
 npm run start

9.npm i -D clean-webpack-plugin//打包删除之前的冗余文件,再打包
const {CleanWebpackPlugin}=require('clean-webpack-plugin')

10.npm i -D @babel/core @babel/preset-env babel-loader core.js //(解决版本兼容的问题 eg:ie7)
 //这里的core.js可能在运行时因版本问题而报错
//引入core.js的作用，比如在编译器中有个ts文件中有console.log(Promise),即使在ie7中也是没有Promise的,所以可以通过core.js已经写好的转换向下兼容
```

#### html-webpack-plugin实例对象的参数

```
1.title: title值用于生成的HTML文档。
2.filename: 将生成的HTML写入到该文件中。默认写入到index.html中。你也可以在这儿指定子目录 (eg: assets/admin.html)。
3.template: Webpack require path 到 template中。
4.inject: true | 'head' | 'body' | false添加所有的静态资源（assets）到模板文件或templateContent 。当传入true或'body'时，所有javascript资源将被放置到body 元素的底部。 当传入'head'时， 所有的脚本将被放置到head元素中。
5.favicon: 添加指定的favicon path到输出的html文件。
6.minify: {...} | false 传入一个html-minifier 对象选项来压缩输出的html文件。
7.hash: true | false 如果值为true，就添加一个唯一的webpack compilation hash给所有已included的 scripts 和 CSS 文件。这对缓存清除（cache busting）十分有用。
8.cache: true | false 如果为true (默认)，只要文件被更改了就emit(发表)文件。
9.showErrors: true | false如果为true (默认)，详细的错误信息将被写入到HTML页面。
10.chunks:允许你只添加某些chunks (e.g. only the unit-test chunk)
11.chunksSortMode: 在chunks被include到html文件中以前，允许你控制chunks 应当如何被排序。允许的值: 'none' | 'auto' | 'dependency' | {function} - 默认值: 'auto'
12.excludeChunks: 允许你跳过某些chunks (e.g. don't add the unit-test chunk)
13.xhtml: true | false 如果为true， 将 link 标签渲染为自闭合标签, XHTML compliant。 默认是 false
...........
```

#### 解决core.js因版本问题导致报错

```
npm view core.js

npm install https://registry.npmmirror.com/core-js/-/core-js-3.30.2.tgz    (这里以控制台提示为准)
```

## class(类)
