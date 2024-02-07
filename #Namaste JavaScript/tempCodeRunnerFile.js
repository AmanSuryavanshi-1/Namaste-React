
/* const output = arr.filter((x)=>x%2);
console.log(output);

function isOdd(x){
return x%2;
}
const output2 = arr.filter((x)=>isOdd);
const prices = [200,300,350,400,450,500,600];

const newPriceTag = prices.filter((x)=>x>400);

console.log(newPriceTag);

function findSum(arr){
    let sum=0;

    for(let i=0; i<arr.length; i++){
        sum+=arr[i];
    }
    return sum;
};

console.log(findSum(arr)); */

/* const arr = [1,2,3,4,5];

const output = arr.reduce((sum,curr)=>{
    sum+=curr;
    return sum;
},2);
console.log(output); */

const users =[
    { firstName: "akshay", lastName: "saini", age: 26 },
    { firstName: "donald", lastName: "trump", age: 75 },
    { firstName: "elon", lastName: "musk", age: 50 },
    { firstName: "Aman", lastName: "suryavanshi", age: 26 },
    ];

   /*  const output=users.reduce((acc,curr)=>{
        if(acc[curr.age]) {
            acc[curr.age]++;
        } else {
            acc[curr.age]=1;
        }
        return acc;
    },{}) */

/* const output = users.filter((x)=>{
    if(x.age>30) console.log(x.firstName);
}) */


const output = users.reduce((acc, curr)=>{
    if(curr.age<30) console.log(curr.firstName);
})

console.log(output);
