// const arr = [3,2,1,4];

// const sum = arr.reduce(function(curr, acc){
//     return curr + acc;
// })
// console.log(sum);

const users =[
    { firstName: "akshay", lastName: "saini", age: 26 },
    { firstName: "donald", lastName: "trump", age: 75 },
    { firstName: "elon", lastName: "musk", age: 50 },
    { firstName: "Aman", lastName: "suryavanshi", age: 26 },
    ]; 

// const mapping = users.map((key)=>{
//    const result = key.firstName + " " +key.lastName;
//    console.log(result);
// });

// const output = users.reduce(function(acc,curr){
//     acc[curr.age] ? acc[curr.age]++ : acc[curr.age]=1;
//     return acc;
//    },{})
//    console.log(output)


// const output = users.reduce(function(acc,curr){
//     if(curr.age < 30)  acc.push(curr.firstName);
//     return acc;
// },[])

const output = users.filter((key)=>{
    if(key.age < 30){ console.log(key.firstName)}
})


