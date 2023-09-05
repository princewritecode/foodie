import User from "./User";
import UserClass from "./UserClass";
const About = () => {
    return (
        <div>
            <h1>About</h1>
            <User name={"prince (function)"} Location={"Indore"} Contact={"@prince"}></User>
            <UserClass name={"prince (class)"} Location={"Indore (class)"}></UserClass>
        </div>
    );
};

export default About;