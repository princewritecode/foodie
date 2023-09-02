import RestaurantCard from "../Components/RestaurantCard";
import { useState, useEffect } from "react";


function Body() {
    const [ListOfRestaurant, setListOfRestaurant] = useState([]);
    useEffect(() => {
        console.log("use effect called");
        fetchData();
    }, []);
    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.7195687&lng=75.8577258&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const jsonData = await data.json();
        setListOfRestaurant(jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        console.log(ListOfRestaurant);
    };


    return (

        <>
            <button className="topRated" onClick={() => {
                const filteredList = ListOfRestaurant.filter((res) => {
                    return res.data.avgRating > 4;
                });
                setListOfRestaurant(filteredList);
            }
            }
            >Top rated</button >
            <div className="search-container">
                <input
                    type="text"
                    className="search-input"
                    placeholder="Search a restaurant you want..."
                ></input>
                <button
                    className="search-btn"
                >
                    Search
                </button>
            </div>
            <div className="restaurant-list">

                {
                    ListOfRestaurant.map((res) => {
                        return <RestaurantCard key={res.id} {...res.info}></RestaurantCard>;
                    })
                }

                {/* name="Food Club" src="https://thumbs.dreamstime.com/b/heart-shape-various-vegetables-fruits-healthy-food-concept-isolated-white-background-140287808.jpg" cuisines={["Veg", "Non-Veg"]} avgRating="4.5" */}

            </div>
        </>
    );
}
export default Body;