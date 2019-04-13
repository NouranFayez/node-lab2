module.exports= (first,...args) =>{
    let result = null;
    let divided = true ;
    args.map (e =>{
        if (Number(e)===0){
           result= console.log('can t divid')
           divided = false;
        }
    })
    if (divided){
       result= args.reduce(function(acc,val){
            return acc/=val;
    },first) 
    return result; 
}}