import React from "react";
import { Component } from "react";

class ClassBasedComponent extends Component {
    
    state = {
        //write state properties here
        count : 0, //initial value
        flag  : false
    }

    // constructor(props){
    //     super(props)
    //     this.state = {
    //         //write state properties here
    //     }
    //
    //     this.handleClick = this.handleClick.bind(this)
    // }

    handleClick = () => {
        //this.state.count = this.state.count + 1 <--- WRONG, directly mutating state
        //USE setState methond!!!!!
        const {count} = this.state;
        this.setState({
            count : count + 1
        }, () => {
            console.log(count)
        })
    }

    componentDidMount(){
        console.log("component mounted")
    }

    componentDidUpdate(prevProps, prevState){
        console.log(prevState, this.state)
        if (prevState && prevState.count !== this.state.count && this.state.count === 10){
            this.setState({
                flag : true
            })
        }
    }

    componentWillUnmount(){
        //cleanup before component is destroyed
    }

    render(){
        console.log(this.state)
        return(
            <div>
                <button onClick={this.handleClick}>Click</button>
                {
                    this.state.count === 5 && "count is 5"
                }
                {
                    this.state.flag && <p>flag is true</p>
                }
            </div>
        )
    }
};

export default ClassBasedComponent;

