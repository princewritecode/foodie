import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
const RestaurantMenu = () => {
    const { resId } = useParams();
    const resInfo = useRestaurantMenu(resId);
    if (resInfo === null) { return "Loading"; }
    const { name, cuisines, costForTwoMessage } = resInfo?.data?.cards[0]?.card?.card?.info;
    const { itemCards } = resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards[2]?.card?.card;
    console.log(resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards[2]?.card?.card);
    return (
        <div>
            <h1>{name}</h1>
            <h2>{cuisines.join(", ")}</h2>
            <h2>{costForTwoMessage}</h2>
            <ul>
                {/*
                {
                    itemCards.map((item) => {
                        return <li key={item.card.info.id}>{item.card.info.name}-{item.card.info.price / 100 || item.card.info.defaultPrice / 100}</li>;
                    })
                } */}
            </ul>
        </div>
    );
};
export default RestaurantMenu;