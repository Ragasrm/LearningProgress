// Flatten an array of nested arrays into a single array.

 const nestedArray = [1,[2,[3,4]],5];
 
 
 
 const flattenArray = (arr) => {
     let result = [];
     
     for(let i=0; i < arr.length;i++){
         if(Array.isArray(arr[i])) {
             result = result.concat(flattenArray(arr[i]))
         } else {
             result.push(arr[i])
         }
     }
     
     return result
 }
 
 
 console.log(flattenArray(nestedArray))