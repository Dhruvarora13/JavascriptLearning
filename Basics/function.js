function greeting(){
    console.log("HEllo Dhruv Suck ")
}
greeting();
             //Arguments
function add(num1,num2){
    console.log(num1+num2);
}
add(6,4)//parameters


//
function addition(){
    let result=0;
    for(let i=0;i<arguments.length;i++){

        result=result+arguments[i];

    }
    return result;
}

const finalresult =addition(10,10,10,20);
console.log(finalresult)


function multiply(...nums){
    let answer=1;
    for(let i=0;i<nums.length;i++){
        answer=answer*nums[i];

    }
    return answer
}

console.log(multiply(2,2,2,2));