import React, { useEffect, useState } from 'react'

const useOnlineStatus = () => {
    const [isOnline, setIsOnline] = useState(true);
    // useState variable will keep track of the online status of the user.
    // if the user is online, it will be set to true.
     // default value is true
    // if the user is offline, it will be set to false.

// check if online
    useEffect(()=>{
            window.addEventListener("online", () => {
                setIsOnline(true);
                });
            window.addEventListener("offline", () => {
                setIsOnline(false);
                });
    },[]) //runs only once

// boolean value
    return isOnline
}

export default useOnlineStatus