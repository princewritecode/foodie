
const User = ({ name, Location, Contact }) => {
    return (
        <div className="user-card">
            <h2>Name:{name}</h2>
            <h3>Location:{Location}</h3>
            <h4>Contact:{Contact}</h4>
        </div>
    );
};
export default User;
