import RestaurantCard from "../Components/RestaurantCard";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
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

    const onlineStatus = useOnlineStatus();

    if (onlineStatus === false) return <h1>Looks like you are offline please check your internet connection</h1>;

    if (ListOfRestaurant.length === 0) {
        return <h1>Loading...</h1>;
    }
    return (
        <>
            <button className="px-4 py-2 mx-6 my-2 bg-gray-100 shadow-lg rounded-lg" onClick={() => {
                const filteredList = ListOfRestaurant.filter((res) => {
                    return res.info.avgRating > 4;
                });
                setListOfRestaurant(filteredList);
            }
            }
            >Top rated</button >
            <div className="p-4 m-4">
                <input
                    type="text"
                    className="border border-solid border-black"
                    placeholder="Search a restaurant you want..."
                    value={searchText}
                    onChange={(e) => { setSearchText(e.target.value); }}
                ></input>
                <button
                    className="px-4 py-2 bg-green-100 m-4 rounded-lg shadow-sm" onClick={() => {
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
            <div className="flex flex-wrap">

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