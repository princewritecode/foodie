import { useEffect, useState } from "react";

//!finalise contract what's the input do we need some information and than
const useOnlineStatus = () => {
    const [onlineStatus, setOnlineStatus] = useState(true);
    //** check if online  */

    useEffect(() => {
        window.addEventListener("offline", () => {
            setOnlineStatus(false);
        });
    }, []);

    window.addEventListener("online", () => {
        setOnlineStatus(true);
    });

    //** boolean value */
    return onlineStatus;
};

export default useOnlineStatus;
