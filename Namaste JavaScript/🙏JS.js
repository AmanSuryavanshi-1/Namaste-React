
// ! NAMASTE JAVASCRIPT

// $ 1) MAP filter and reduce
   /*    const arr = [5,4,3,2,1];

      function double(x){
          return x*2;
      }
      function triple(x){
        return x*x*x;
      } */
//^ You can now pass any function inside it.  
    // const output = arr.map(double); // this function tells map that what transformation I want on each element of array

//^ OR 
//  we can directly write function inside arr.map()
    /* const output = arr.map(function double(x){
      return x*2;
    });  */

//^ OR 
//  we can directly write function inside arr.map() using arrow function
// just have to remove function double and everything remains same
            // const output = arr.map((x)=>{
            //   return x*2;
            // }); 
        //^ OR You can just remove the bracket and return in arrow function
            // const output = arr.map((x)=>x*2); 
            
// console.log(output);

//^ ALL WILL GIVE SAME OUTPUT

// $ 1.1) WHAT IS ARROW FUNCTION
//-> Arrow functions were introduced in ES6.
//-> Arrow functions allow us to write shorter function syntax.
//-> ^ For Example:-

// ^ Before Arrow:
      /* hello = function() {
        return "Hello World!";
      } */
// ^ With Arrow Function:
      /* hello = () => {
        return "Hello World!";
      } */
// It gets shorter! If the function has only one statement, and the statement returns a value, you can remove the brackets and the return keyword:

// $ 1.2) Filter 
//-> Filter function is basically used to filter the value inside an array. 
//-> The arr.filter() method is used to create a new array from a given array consisting of only those elements from the given array which satisfy a condition set by the argument method
//-> Filter function creates an array and store only those values which evaluates to true.

// @ EG-1 (Filter)
  //  const arr = [5,4,3,2,1];

     /*  function isodd(x){
          return x%2;
      }
      const output = arr.filter(isodd); */

//^ OR You can now pass any function inside it.  

      /* const output = arr.filter(function isodd(x){
        return x%2;
      }); */

//^ OR You can just remove the bracket and return in arrow function

      /* 
      const output = arr.filter((x) => x%2);
      console.log(output); */

      //* Output:-[ 5, 3, 1 ]

// @ EG-2 (Filter)
      /* const prices = [200,300,350,400,450,500,600];
      const newPriceTag =(prices.filter((elem) => elem > 400));
      console.log(newPriceTag); */
        
      //* Output - [ 450, 500, 600 ]

//$ 1.3) REDUCE
//-> It is a function which take all the values of array and gives a single output of it. It reduces the array to give a single output. 

// => 1.3.1) SUM

      /*  const arr = [5,4,3,2,1];

    function findSum(arr){
      let sum=0;
      for(let i=0; i<arr.length; i++){
        sum += arr[i];
      }
      return sum;
    }
    console.log(findSum(arr)); */

// * Output:15

//^ OR BY USING REDUCE

// above sum can be written using REDUCE
// in this case acc is sum in which the sum values will get stored or accumulated
// curr will be 

      /* const arr = [5,4,5,2,1];

    const output = arr.reduce(function(acc, curr){
        acc += curr;
        return acc;
    },0); // INITIAL VALUE IS SET TO 0 means acc = 0 in start
    
    
    console.log(output); */
//* Output:17
// -> this reduce function is iterated over each element of this arr array. curr(current) will be these values [5,4,3,2,1]
// -> reduce function takes two arguments :-
//      - accumulator
//      - current
// -> AND TAKES A INITAL VALUE IF ANY AT THE END
// & -> WHEN INITIAL VALUE IS SET TO 4 means acc = 4 in starting


    /*const arr = [5,4,5,2,1];
      const output = arr.reduce(function(acc, curr){
        acc += curr;
        return acc;
      },4); // INITIAL VALUE IS SET TO 0 means acc = 4 in start
      console.log(output);  */

//* [Output:21]   (17+4)

// => 1.3.2) MAX
// -> Now writing for MAX

const arr = [5,4,5,2,1];

      /* function findMax(arr){
        let max=0;
      for(let i=0; i<arr.length; i++){
        if(arr[i]>max) max=arr[i];
      }
      return max;
      }*/
// console.log(findMax(arr)); 

//^ OR BY USING REDUCE

      /* const output = arr.reduce(function(acc,curr){
        if(curr>acc) acc== curr;
        return acc;
      },{}) */
// OR u can change arguments name also
      /* const output = arr.reduce(function(max,curr){
        if(curr>max) max = curr;
        return max;
      },{}) */ 
// console.log(output);

//* Output:5


// $ 1.4) MAP filter and reduce REAL WORLD EXAMPLES
// consider this as data comming from API
// List of user's
const users =[
{ firstName: "akshay", lastName: "saini", age: 26 },
{ firstName: "donald", lastName: "trump", age: 75 },
{ firstName: "elon", lastName: "musk", age: 50 },
{ firstName: "Aman", lastName: "suryavanshi", age: 26 },
];

// $ 1.4.1) Give the list giving the fullnames of user's (MAP)

// const output = users.map((users) => users.firstName+ " " +users.lastName);
// console.log(output);
//* Output: [ 'akshay saini', 'donald trump', 'elon musk', 'deepika padukone' ]

// $ 1.4.2) Give people with the particular same age (Reduce) 
// FOR EG:- { age : no. of people of that age group } => {26:2, 75:1, 50:1}
// We will be using reduce for it bcz we want to reduce a array to a particular value that we want in our case it's age

      /* const output = users.reduce(function(acc,curr){
        if(acc[curr.age]){
          acc[curr.age]++;
        }
        else{
          acc[curr.age]=1;
        }
        return acc;
      },{})

      console.log(output); */

//* Output:{ '26': 2, '50': 1, '75': 1 }

// $ 1.4.3) Find out the name of people whose name is less then 30

      /* const output = users.filter((x)=> {
        if(x.age<30){
          console.log(x.firstName);
        }
      }); 
      // OR we can simply use map along wiht filter
        const output=users.filter((x) => x.age<30).map((x)=>x.firstName);
         console.log(output)
         */

//* Output:[ 'akshay', 'Aman' ]

//^ solving it using Reduce

      /* const output = users.reduce(function(acc,curr){
        if(curr.age<30){
          acc.push(curr.firstName);
        }
        return acc;
      },[])

      console.log(output); */
// & why we used [] instead of empty object {} ?
// & it's initial value and we want the result in the form of an array (names), not the object.
//* Output:[ 'akshay', 'Aman' ]


//$ 2) Callback Functions(NamasteJS s2ep1)
// -> When a function is passed as an argument to another function, it becomes a callback function. 
// -> This process continues and there are many callbacks inside another's Callback function.
// -> This grows the code horizontally instead of vertically. That mechanism is known as callback hell. 

// -> function is given in setTimeout which will be called out after 2sec of time
/*       
      console.log("Aman");
      setTimeout(function(){
        console.log("callback");
      },[2000]) */

//* Output:- Aman
//*         callback(it will get printed after 2 sec)

// const cart=["shoes","jacket", "hoodies"];

//=> REAL WORLD EG:-
      /* api.createOrder(); // order placing api
      api.proceedToPayment(); //redirection to payment gateway
      api.showOrderSummary(); // after completion of payment showing order summary */ 

// -> 1st we have to place an order then only we will proceed to payment gateway and then at last the order summary is shown
// -> Callback helps to fetch the order placing api first and then the proceed to payment api and then after payment is completed the showOrderSummary Api is called and order summary is data is fetched.

// -> proceedToPayment function is called after createOrder API is called.
// -> Then we passed showOrderSummary function to proceedToPayment API
// -> Suppose then we also have a updateWalletBalance API which will show the updated data inside show order function
      /* api.createOrder(cart,function(){

        api.proceedToPayment(function(){

          api.showOrderSummary(function(){
            
            api.updateWalletBalance();

            })
        
          });

      }) */
// ~ 2.1) IMPORTANCE 
// -> Callbacks are very efficient way of handling ASYNC operations in JS

// ~ 2.2) ISSUES WITH CALLBACKS:-

//=> 2.2.1) CALLBACK HELL
// -> For large scale application it is not possible to callback API's again and again
// -> Calling API's using callback result in endless loops which is know as callback hell.
// -> Callback hells are unreadable and unmaintainable

//=> 2.2.2) INVERSION OF CONTROL
//^ The callback function is passed to another callback, this way we lose the control of our code. 
//^ We don't know what is happening behind the scene and the program becomes very difficult to maintain. That process is called inversion of control. 


//$ 3) Promises(NamasteJS s2ep2)]
// -> A promise is an object that represents eventual completion/failure of an asynchronous operation.

//&  What are asynchronous process?
//&  Fetching data is an asynchronous process which means it does not update instantly and takes time to fetch the data. 

// -> Promises are use to handle async operations of JS 
// -> suppose we have a cart and 2 more apis:-
        // createOrder(cart); // orderId
// -> It will return a orderId once a order is added to cart
        // ProceedToPayment(orderId);
// -> ProceedToPayment api will take the orderId and will redirect to the payment gateway
//&  Both of these api are asynchronous and both are time independent (we don't know how much time it will take)

      /* const cart=["shoes","jacket", "hoodies"];
      createOrder(cart,function(orderId){
        ProceedToPayment(orderId);
      }); */

// -> It will no longer take Callback function it will just take cart details & then it will return us a promise
// -> We will store that promise in a constant

      // const promise =  createOrder(cart);

// -> Promise is a empty object with a data value init which is provided when the promise is resolved. {data:undefined}
// -> Initially the promise is a empty value. It get's value after some time once the backend process is completed.
// -> This promise will fill the data automatically after we get the response from API.
// -> Data is filled after certain async time {data: orderDetails}
// -> Now we will attach a callback function to this promise statement which is done with the help of .then function.

      /* promise.then(function(orderId){
        ProceedToPayment(orderId);
      }); */
      
// ~ 3.1) IMPORTANCE OF PROMISES
// -> Promise will return only one value even if the data is provided by api more than one time
// -> It provides more control over program

// ~ 3.2) HOW TO FETCH DATA FROM API LINKS?
// -> Using fetch
// -> Fetch is functionality provided by JS to make external calls
// -> This fetch function also returns us a PROMISE

// ~ Before promise we used to depend on callback functions which would result in :-

// ~ 3.3) Inversion of control
// ~ 3.4) Callback Hell (Pyramid of doom) 

// ~ 3.3) Inversion of control is overcome by using promise.
//  => 3.3.1) There are two things in promise 

//  ->     a) State of the promise  [[promiseState]] 
//           -> A promise has 3 states: pending | fulfilled | rejected.
//           -> Initially it will be pending 
//           -> As soon as promise is fulfilled/rejected => It updates the empty object which is assigned undefined in pending state.
//           -> And after we get the data the promise state changes to fulfilled state.

//  ->     b) Result of the promise  [[promiseResult]]
//           -> What ever the data it will return will be stored in PromiseResult.
//           -> It can be the Response or it can return REJECTED also

//* IN CONSOLE USING DEBUGGER:-
//* 1) user = undefined            (initially)
//* 2) user: Promise 
//* 3) [[promiseState]] : "fulfilled"   (After some time when data arrives)
//* 4) [[promiseResult]] : Response      (Then the response is provided)
 
      // const GITHUB_API = "https://github.com/AmanSuryavanshi-1";
      // const user = fetch(GITHUB_API); 

      // console.log(user);

//* OUTPUT  [Promise { <pending> } ]
//* JS don't wait for the data to come from the link so it just prints it concurrently.

// ~ 3.4) How to avoid callback hell (Pyramid of doom) => We use promise chaining. 
//   => 3.4.1) This way our code expands vertically instead of horizontally. Chaining is done using '.then()'
//   => 3.4.2) Using .then() we can control when we call the callback function.

      // const cart=["shoes","jacket", "hoodies"];

// Previous Callback hell example
      /* api.createOrder(cart,function(){
        api.proceedToPayment(function(){
          api.showOrderSummary(function(){
            api.updateWalletBalance();
            });
          });
        }); */
//^ OR WE CAN WRITE ABOVE USING PROMISES
//& How to eliminate callBack hell?
//&  using .then chaining 

        /* const promise = createOrder(cart);

        promise.then(function (orderId){
          proceedToPayment(orderId);
        }); */
        
//^ OR we can directly write

      /* const promise = createOrder(cart)
      .then(function (orderId){
        proceedToPayment(orderId);
      }) */

// => 3.4.2) Promise Chain
// => 3.4.3) A very common mistake that developers do is not returning a value during chaining of promises. Always remember to return a value. This returned value will be used by the next .then()
      
      /* const promise = createOrder(cart)
      .then(function (orderId){
        return proceedToPayment(orderId);
      })
      .then(function(paymentInfo){
        return showOrderSummary(paymentInfo);
      })
      .then(function(paymentInfo){
        return updateWalletBalance(paymentInfo);
      }) */

//^ OR YOU CAN USE ARROW FUNCTION TO MAKE IT MORE READABLE

      /* const promise = createOrder(cart)
          .then((orderId)=> proceedToPayment(orderId))
          .then((paymentInfo) => showOrderSummary(paymentInfo))
          .then((paymentInfo) => updateWalletBalance(paymentInfo)); */


//$ 4) Promise, Chaining & Error Handling(NamasteJS s2ep3)]

// ~ 4.1) Creating a promise

// => 4.1.1) Producer part of the code

//&   HOW WE CREATE A PROMISE?
// -> This is the way of creating a promise 
// -> We pass 2 functions in it which has Resolve, Reject in it
// -> new Promise is a promise Constructor which takes a function which has resolve and reject
// -> These Resolve and Reject are functions provided by JS to build promises.


// a) Creating order
// b) Then validatingCart
// c) And then providing an orderId

      /* function createOrder(cart){
        const pr  = new Promise(function(resolve, reject){
          
        //^ If ValidateCart is empty then passing reject
          if(!validateCart(cart)){
            const err = new Error("Cart is not valid");
            reject(err);
          }

        // Logic for createOrder. If it get's resolve we will create a call for database for data
        const orderId = DBcall.getOrderID;
        //^ If we get order from data base then we will be passing resolve
        if(orderId){
          resolve(orderId);
        }
        //^ This resolved orderId is provided to consumer part of code
        });
        return pr;
      } */

// -> creating a temp validateCart Function
// -> If validateCart returns true then it will return orderID to consumer
// -> If validateCart returns false then it will give a error to the consumer
// ->> So, at consumer part we have to write code for error handling (.catch)

function validateCart(cart){
  return true;
}

// => 4.1.2) Consumer part of the code

       /*  const cart=["shoes","jacket", "hoodies"];

        const promise = createOrder(cart);
      .then(function (orderId){
        proceedToPayment(orderId);
      })
      .catch(function (err){
        console.log(err.message);
      }) 
      //^ OR WE CAN WRITE LIKE IN SHORT
            createOrder(cart)
      .then(function (orderId){
        proceedToPayment(orderId);
      })
      .catch(function (err){
        console.log(err.message);
      }) 
      */

// -> This create order function will return us a promise over here.
// -> Backend can reject the promise or can resolve it
// ->> So,for error handling promise offer's a function catch
// -> We can attach a failure object to catch

// ~ 4.2) Promise Chaining

// ~ Adding proceedToPayment using promise chaining in consumer and producer part of code

// => 4.2.1) Producer part of the code

      /* function createOrder(cart){
        const pr  = new Promise(function(resolve, reject){
          if(!validateCart(cart)){
            const err = new Error("Cart is not valid");
            reject(err);
          }
          const orderId = 1234 ; //Assuming 1234 or DBcall.getOrderID 
          if(orderId){
          resolve(orderId);
        }
        });
        return pr;
      } 

      function proceedToPayment(orderId){
        return new Promise(function(resolve,reject){
          resolve("Payment Successful");
        })
      }

      function validateCart(cart){
        return true
      } */

// => 4.2.2) Consumer part of the code
// -> Whenever we keep chaining things up we need to keep return things from one chain down to another chain 
// -> In our case returning return orderId from one chain down to other

      //  const cart=["shoes","jacket", "hoodies"];

      /* createOrder(cart)
      .then(function (orderId){
        proceedToPayment(orderId);
        return orderId;
      }) // now the below .then will get the orderId from createOrder
      .then(function(orderId){
        return proceedToPayment(orderId);
      }) // returning the promise itself proceedToPayment(orderId) to paymentInfo
      .then(function(paymentInfo){
        console.log(paymentInfo);
      })
      .catch(function (err){
        console.log(err.message);
      })  */

// -> if we get error (when we are passing false through validateCart) from any .then function then that error is handled by the last catch block it will give same errors for all the .then functions
// -> If any of these steps fails it will lead to failure of complete .then or promise chain
// -> So we have to handle error effectively for each .then and for that we can put .catch after any .then in the chain
// -> .catch is responsible for the .then's that are present above it.

      /* createOrder(cart)
        .then(function (orderId){
          proceedToPayment(orderId);
          return orderId;
        }) 
        .then(function(orderId){
          return proceedToPayment(orderId);
        }) 
        .then(function(paymentInfo){
          console.log(paymentInfo);
        })
        .catch(function (err){
          console.log(err.message);
        })
        .then(function(orderId){
          console.log("It will definitely be called irrespective of the errors in above .then chains")
        }) */
         
// -> THIS TYPE OF CHAINING HELPS US IN GETTING RID OF CALLBACK HELLS


/* Homework:

// CreateOrder,
// proceedToPayment,
// showOrderSummary,
// updateWallet

const cart = ['shoes', 'pants', 'kurta'];

createOrder(cart)
  .then(function(orderId) {
    console.log(orderId);
    return orderId;
  })
  .then(function(orderID) {
    return proceedToPayment(orderID)
  })
  .then(function({ message, amt }) {
    console.log(message, 'of amount:', amt);
    return showOrderSummary(message, amt);
  })
  .then(function({ message, amt }) {
    console.log('Your wallet has beed debited by:', amt);
  })
  .catch(function(err) {
    console.log(err.message);
  })
  .then(function() {
    console.log('No matter what happens, I will get executed');
  });



function createOrder(cart) {
  const pr = new Promise(function(resolve, reject) {
    // create order
    // Validate Cart
    // orderId
    if (!validateCart(cart)) {
      const err = new Error('Cart is not valid!');
      reject(err);
    }
    // logic for createOrder
    const orderId = '12345';
    if (orderId) {
      setTimeout(function() {
        resolve(orderId);
      }, 1000)
    }
  });

  return pr;
}

function proceedToPayment(orderID) {
  // Logic for handling payment.
  // This function returns a promise
  return new Promise(function(resolve, reject) {
    // logic
    resolve({ message: `Payment Successful for order id: ${orderID}`, amt: 2500 });
  })
}

function showOrderSummary(paymentInfo, amt) {
  return new Promise(function(resolve, reject) {
    // console.log(amt);
    if (amt >= 2000) {
      resolve({ message: 'You have ordered items that cost ${amt} RS', amt });
    } else {
      reject(new Error('Please buy more for discount'));
    }
  })
}

function validateCart(cart) {
  // code to validate cart.
  return true;
  // return false;
} */

// $ 5) Promise API's + Interview Questions S2Ep5











