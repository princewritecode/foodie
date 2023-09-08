import RestaurantCard from "../Components/RestaurantCard";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Body() {
    const [ListOfRestaurant, setListOfRestaurant] = useState([]);
    const [FilteredList, setFilteredList] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        console.log("use effect called");
        fetchData();
    }, []);
    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.7195687&lng=75.8577258&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const jsonData = await data.json();
        setListOfRestaurant(jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredList(jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    if (ListOfRestaurant.length === 0) {
        return <h1>Loading...</h1>;
    }
    return (
        <>
            <button className="topRated" onClick={() => {
                const filteredList = ListOfRestaurant.filter((res) => {
                    return res.info.avgRating > 4;
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
                    value={searchText}
                    onChange={(e) => { setSearchText(e.target.value); }}
                ></input>
                <button
                    className="search-btn" onClick={() => {
                        const filterListGenerated = ListOfRestaurant.filter((res) => {
                            return res.info.name.toLowerCase().includes(searchText.toLowerCase());
                        }
                        );
                        setFilteredList(filterListGenerated);
                    }
                    }
                >
                    Search
                </button>
            </div >
            <div className="restaurant-list">

                {
                    FilteredList.map((res) => {

                        return <Link key={res.info.id} to={"/restaurants/" + res.info.id}><RestaurantCard  {...res.info}></RestaurantCard></Link>;

                    })
                }

                {/* name="Food Club" src="https://thumbs.dreamstime.com/b/heart-shape-various-vegetables-fruits-healthy-food-concept-isolated-white-background-140287808.jpg" cuisines={["Veg", "Non-Veg"]} avgRating="4.5" */}

            </div>
        </>
    );
}
export default Body;