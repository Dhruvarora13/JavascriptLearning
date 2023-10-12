const myarray =[0,1,2,3,4,5,6];


const slicearray =myarray.slice(0,4) //0,1,2,3
console.log(slicearray)


const splicearray=myarray.splice(0,6); //0,1,2,3,4    //0 1 2 3
console.log(splicearray)
console.log("main array:" +myarray)



const months =["January","Mach", "April","May"]

months.splice(1,1,"february","March")
console.log(months)

const dcheroes =[""]