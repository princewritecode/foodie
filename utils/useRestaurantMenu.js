import { useEffect, useState } from "react";
const useRestaurantMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null);
    useEffect(() => {
        fetchData();
    }, []);
    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.699466&lng=75.921185&restaurantId=" + resId + "&catalog_qa=undefined&submitAction=ENTER");
        const json = await data.json();
        setResInfo(json);
    };
    return resInfo;
};

export default useRestaurantMenu;