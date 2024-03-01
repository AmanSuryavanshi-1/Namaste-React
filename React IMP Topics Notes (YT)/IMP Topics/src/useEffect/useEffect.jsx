import React, { useState, useEffect } from 'react'
import "./UseEffect.css"

const UseEffect = () => {
    const [count, setCount] = useState(0);
    
    useEffect(()=>{
        console.log("The count is:" ,count);

        // Optional cleanup function
        return() => {
            console.log("I am being cleaned up");
        }
    },[count])
    // --> 12.1) Initially the the dependency array is empty useEffect only loaded once and gives ==> The count is: 0 in console. <==
    // ->       If there is no dependency array then the useEffect is called on everytime when our component renders.
    // ->       There's no change in count in console irrespective of count getting incremented and decremented in the component itself.
    
    //&        Q: What happens if there is a empty dependency array?   
    //&        A: useEffect is called on initial render (just once)

    // --> 12.2) Then we added the count to the dependency array. 
    // =>       If we have something in dependency array then it will only be called when the dependency changes.
    // ->       So whenever the count gets changed the dependency array will update the console accordingly.
    // ->       & log every time the count gets changed.
            /* 
            * OUTPUT :- The count is: 0
                        The count is: 1
                        The count is: 2
                        The count is: 3 */

    // --> 12.3) OPTIONAL RETURN FUNCTION :- is a part of useEffect hook. It is used to clean up after the effect runs. 
    // ->       It is especially useful for cleaning up things like timeouts, event listeners, or subscriptions that were created inside the effect.
    // ->       The function is optional because not all effects need cleanup. 
    // ->       But if the effect does something that needs to be cleaned up later, the return function is the place to do it.
    
    //  => For example, if an effect creates a timeout, the return function could be used to clear the timeout when the effect is no longer needed. 
    //  -> This is important because if the timeout is not cleared, it will continue to run even after the effect is no longer needed, which could lead to memory leaks or other problems.

    //  => Another example is if an effect adds an event listener to an element. The return function could be used to remove the event listener when the effect is no longer needed. 
    //  -> This is important because if the event listener is not removed, it will continue to be called even after the effect is no longer needed, which could also lead to performance problems or other issues.
    //  -> Overall, the optional return function is a powerful tool that can be used to clean up after effects and prevent memory leaks and other problems. 
    
    // --> 12.4) After the OPTIONAL RETURN FUNCTION cleanup is performed after every effect.
            /* 
            * OUTPUT:-  The count is: 0
                        I am being cleaned up

                        The count is: 1
                        I am being cleaned up

                        The count is: 2
                        I am being cleaned up */
    // --> 12.5) What does dependency array do?
    //   -> Whenever dependency array changes the useEffect hook will run this cleanup function & then destroys itself.
    //   -> And then it will get recreated with the new count value.
    
    return (
    <div>
        <h2>COUNT <span>{count}</span></h2>
        <button onClick={()=>{
            setCount(count-1)
        }}>
            Decrement
        </button>
        <button onClick={()=>{
            setCount(count+1)
        }}>
            Increment
        </button>
    </div>
  )
}

export default UseEffect