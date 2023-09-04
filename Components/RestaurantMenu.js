import { useState, useEffect } from "react";
const RestaurantMenu = () => {

    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const fetchMenu = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.699466&lng=75.921185&restaurantId=223393&catalog_qa=undefined&submitAction=ENTER");

        const jsonData = await fetchMenu.json();

        setResInfo(jsonData);
    };
    if (resInfo === null) { return "Loading"; }

    const { name, cuisines, costForTwoMessage } = resInfo?.data?.cards[0]?.card?.card?.info;
    const { itemCards } = resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards[2]?.card?.card;
    console.log(resInfo?.data?.cards[0]?.card?.card?.info);

    return (
        <div>
            <h1>{name}</h1>
            <h2>{cuisines.join(", ")}</h2>
            <h2>{costForTwoMessage}</h2>
            <ul>
                {
                    itemCards.map((item) => {
                        return <li key={item.card.info.id}>{item.card.info.name}-{item.card.info.price / 100 || item.card.info.defaultPrice / 100}</li>;
                    })
                }
            </ul>
        </div>
    );
};

export default RestaurantMenu;