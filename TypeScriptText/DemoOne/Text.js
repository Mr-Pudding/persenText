var hhs = 11; //number类型声明赋值
function hhsOne(a, b) {
    return a + b;
} //函数(返回类型为数字)声明赋值1
var hhsTwo; //函数类型声明2
hhsTwo = function (a, b) {
    return a + b;
};
console.log(hhsTwo(12, 34));
var hhsThree; //类型声明定义逻辑符号链接
hhsThree = 123;
hhsThree = 'hhs';
var hhsFourObj; //对象类型声明
hhsFourObj = {
    name: 'cz',
    person: {
        name: "yancun",
        age: 12
    },
};
var hhsArrayOne; //数组声明
var hhsArrayTwo;
var hhsArrayThree; //元组
hhsArrayThree = ['hello', 12, {}, 'hhs',];
var perSon;
(function (perSon) {
    perSon[perSon["male"] = 0] = "male";
    perSon[perSon["famale"] = 1] = "famale";
})(perSon || (perSon = {}));
var hhsPersonEnum;
