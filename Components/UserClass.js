import React from "react";
class UserClass extends React.Component {

    constructor(props) {

        super(props);
        console.log(props);

    }

    render() {
        const { name, Location } = this.props;
        return (
            <div className="user-card">
                <h2>Name:{name}</h2>
                <h3>Location:{Location}</h3>
                <h4>Contact:@princewritecode</h4>
            </div>
        );
    }
}

export default UserClass;