module.exports=(first ,  ...args) => {
    let result = null;
    let divisble = true ;
    args.map (e =>{ 
    if (Number(e)===0){
        result= console.log('can t mod')
        divisble = false;
     }
 })
//  if (e === NaN){
//      console.lop("not number")
//  }
 if (divisble){
    result= args.reduce(function(acc,val){
         return acc%=val;
 },first) 
 return result; 
}}