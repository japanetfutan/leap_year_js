/**
 * 
 * return:
 * leap year:true,not leap year:false
 * 
*/
function isLeapYear(date){
  //var date=new Date();
  var y=date.getFullYear();
  date.setMonth(2);
  date.setDate(0);
  //console.log(date.getDate()===28?false:true);
  return date.getDate()===28?false:true;
}
