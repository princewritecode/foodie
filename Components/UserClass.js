import React from "react";
class UserClass extends React.Component {
    //! there was old way of creating state earlier so state was created as soon as instance of class was created
    constructor(props) {
        super(props);
        console.log("inside constructor");

        //!creating count variab
        this.state = {
            userInfo: {
                name: "dummy",
                location: "default",
                avatar_url: "http://dummypicture"
            },
            // count: 0,
            // count1: 1
        };
        //!now how can we update the state variable

    }
    async componentDidMount() {
        const data = await fetch("https://api.github.com/users/princewritecode");
        const jsonData = await data.json();

        console.log(jsonData);
        this.setState({
            userInfo: jsonData,
        });
    }
    render() {
        console.log("insdie render ");
        const { name, location, avatar_url } = this.state.userInfo;
        console.log(name, location, avatar_url);
        // const { count, count1 } = this.state;

        return (
            <div className="user-card">
                <h2>Name:{name}</h2>
                <img src={avatar_url}></img>
                <h3>Location:{location}</h3>
                <h4>Contact:@princewritecode</h4>
            </div >
        );
    }
}
export default UserClass;