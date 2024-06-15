const notes= require('./notes');

var reeshu =require('lodash')

console.log('server is loaded');


var age=notes.age

var result=notes.addnumber(age+18,10)
console.log('result is now '+result)

var data=["person","person",1,2,1,2,"name","age","2"];
var filter=reeshu.uniq(data);
console.log(filter);

console.log(reeshu.isString(3));