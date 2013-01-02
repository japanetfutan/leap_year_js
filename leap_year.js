//leap year:true,not leap year:false
var date=new Date();
var y=date.getFullYear();
date.setMonth(2);
date.setDate(0);
console.log(date.getDate()===28?false:true);
