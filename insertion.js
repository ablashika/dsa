 function insertionSort(array){

    for (let i = 0; i < array.length; i ++  ) {
        
      if (array[i] < array[0]) {
        array.unshift(array.splice(i,1)[0])
     
      
      }
      else {

        for(let j = 1; j < i; j++){    
         if(array[i] > array[j-1] && array[i] < array[j]){
          array.splice(j,0,array.splice(i,1)[0]);
         }
        }
      }
 }

     return array
 }


 console.log(insertionSort([8,9,1,4,7,2,3]))