import React from "react";
class UserClass extends React.Component {
    //! there was old way of creating state earlier so state was created as soon as instance of class was created
    constructor(props) {
        console.log("inside constructor");
        super(props);
        //!creating count variable
        this.state = {
            count: 0,
            count1: 1
        };
        //!now how can we update the state variable
        console.log(props);
    }
    componentDidMount() {
        console.log("inside component did mount");
    }
    render() {
        console.log("insdie render ");
        const { name, Location } = this.props;
        const { count, count1 } = this.state;

        return (
            <div className="user-card">
                <h1>classCount:{count}</h1>
                <button onClick={() => {
                    //! never update state variables direclty never do this this.state.count = something right will not update
                    //** can be used anywhere in class we will pass an object */
                    this.setState(
                        {
                            count: this.state.count + 1
                        }
                    );
                }}>Count increase</button>
                <h2>countClass2: {count1}</h2>
                <h2>Name:{name}</h2>
                <h3>Location:{Location}</h3>
                <h4>Contact:@princewritecode</h4>
            </div>
        );
    }
}

export default UserClass;