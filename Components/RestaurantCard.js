const IMG_CDN_URL =
    "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/";
function RestaurantCard({ cloudinaryImageId, name, cuisines, avgRating, lastMileTravelString, costForTwoString, areaName, id }
) {
    return (
        <div className="card">
            <img src={IMG_CDN_URL + cloudinaryImageId} />
            <h2>{name}</h2>
            <h2>{id}</h2>
            <h5>{cuisines.join(" , ")}</h5>
            <h6>{areaName}</h6>
            <span>
                <h4>
                    {avgRating}
                </h4>
                <h4>{lastMileTravelString}</h4>
                <h4>{costForTwoString}</h4>
            </span>
        </div >
    );
}
export default RestaurantCard;
