/* const validateCart = (cart)=> {return true};

const cart = ['shoes', 'pants', 'kurta'];
createOrder(cart)
.then((orderId)=>{console.log(orderId);return orderId; })
.then((orderId)=>{return proceedToPayment(orderId);})
.then((paymentInfo)=>{console.log(paymentInfo);return showOrderSummary(paymentInfo);})
.then((paymentInfo)=>{console.log("Your wallet balanced is updated");})
.catch((err)=> {console.log(err.message);})
.then(() => {console.log('No matter what happens, I will get executed');});


function createOrder(cart){
  const pr = new Promise((resolve,reject) =>{
    if(!validateCart(cart)){
      const err="Cart is not valid";
      reject(err);
    }
    const orderId='12345';
    resolve(orderId);
  })
  return pr;
}

function proceedToPayment(orderId){
return pr1 = new Promise((resolve,reject)=>{ resolve(`Payment Successful for order id: ${orderId}`)})
}

function showOrderSummary(paymentInfo){
  return new Promise((resolve,reject)=>{
    if(!paymentInfo){
        const err1="Transaction is not valid";
        reject(err1);
    }
        resolve({message:'You have ordered items'})
  })
} */

const p1 = new Promise((resolve,reject)=>{
setTimeout(resolve("p1 success"),1000);
})

const p2 =new Promise((resolve,reject)=>{
    setTimeout(() => {
        reject("p2 failure")
    }, 2000);
})

const p3 =new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("p3 resolved")
    }, 3000);
})
Promise.allSettled([p1,p2,p3]).then(res=>{
    console.log(res);
  }) 