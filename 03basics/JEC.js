let val1=10;
let val2=5;
function addNums(num1,num2){
    let total = num1+num2
    return total;
}
let result1 = addNums(val1,val2)
let result2 = addNums(10,2)

// java script execution context 
// global execution == this
// memory phase
// val1 ->undefined
// val2 ->undefined
// addNum ->defination
// result1 ->undefined
// result2 ->undefined

// execution phase
// val1<-10
// val2<-5
// addNum ->creates  new variable env + execution thread

// Menory phase
// val1 -> undefined
// val2 -> undefined
// total undefined

// Exection context
// num1=10
// num2 5
// total 15
// then this goes to global execution 
// and then the new env get delete


// again another new variable env creat for result 2