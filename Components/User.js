import { useState } from "react";
const User = ({ name, Location, Contact }) => {
    const [count] = useState(0);
    return (
        <div className="user-card">
            <h1>count= {count}</h1>
            <h2>Name:{name}</h2>
            <h3>Location:{Location}</h3>
            <h4>Contact:{Contact}</h4>
        </div>
    );
};
export default User;
