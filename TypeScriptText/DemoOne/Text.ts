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

enum perSon{
   male,
   famale
}

let hhsPersonEnum:{name:string,person:perSon}

hhsPersonEnum={
    name:'hhs',
    person:perSon.male
}

