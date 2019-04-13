// console.log("hello");

// const operation = require ('./operations/index');
//     //     add:(...args) => {
// //         return args.reduce(function(acc,val){
// //             return acc+=val;
// //         },0)
// //     },
// //     dividedd:(first,...args) =>{
// //         let result = null;
// //         let divided = true ;
// //         args.map (e =>{
// //             if (Number(e)===0){
// //                result= console.log('can t divid')
// //                sub = false;
// //             }
// //         })
// //         if (divided){
// //            result= args.reduce(function(acc,val){
// //                 return acc/=val;
// //         },first) 
// //         return result; 
// //     }},
// //     multipy:( ...args) => {
// //         return args.reduce(function(acc,val){
// //             return acc*=val;
// //         },1)

// //     },
// //     sub:( first,...args) => {
// //     return args.reduce(function(acc,val){
// //         return acc-val;
// //     },first)

// //    },
// //    mod:(first ,  ...args) => {
// //        let result = null;
// //        let divisble = true ; 
// //        Number(args[0]===0)
// //     return args.reduce(function(acc,val){
// //         if (acc)
// //         return acc%=val;
// //     },first)}
// // }

// const params = process.argv.slice(2);
// const currentOperationIndex= params.findIndex(item => item.startsWith('--'));
// const [currentOperation] = params.splice(currentOperationIndex, 1 ).map(e=>e.substring(2));
// const number = params.map(e => {
//     if(isNaN(e)){

//         throw 'it is not an number';
//       }
//       else{
//           return Number(e)

//       }
//     }
// )
// // validate=(number)=>{
// //   number.map(e=>{
// //       if (NaN(num)){

// //         throw 'it is not an number';
// //       }
// //       else{
// //           return num
// //       }
// //   })
  

// //   }
// // }
// // console.log(currentOperation)
// let func = operation[currentOperation]
// // console.log(operation)
// console.log(func(...number));
