let x=[10,20,30,40,50],y;
var i,sum=0;
console.log(x);
console.log("max value of x is "+Math.max(...x));
var sum=x.reduce((x,b)=>x+b,0);
console.log("sum is",sum);
y=sum/5
console.log("average is",y);