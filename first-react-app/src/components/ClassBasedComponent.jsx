import React from "react";
import { Component } from "react";

class ClassBasedComponent extends Component {
    
    state = {
        formData : {
            name : '',
            age : 0
        },
        finalFormData : {}
    }

    // constructor(props){
    //     super(props)
    //     this.state = {
    //         //write state properties here
    //     }
    //
    //     this.handleClick = this.handleClick.bind(this)
    // }

    // handleClick = () => {
    //     //this.state.count = this.state.count + 1 <--- WRONG, directly mutating state
    //     //USE setState methond!!!!!
    //     const {count} = this.state;
    //     this.setState({
    //         count : count + 1
    //     }, () => {
    //         console.log(count)
    //     })
    // }

    // componentDidMount(){
    //     console.log("component mounted")
    // }

    // componentDidUpdate(prevProps, prevState){
    //     console.log(prevState, this.state)
    //     if (prevState && prevState.count !== this.state.count && this.state.count === 10){
    //         this.setState({
    //             flag : true
    //         })
    //     }
    // }

    // componentWillUnmount(){
    //     //cleanup before component is destroyed
    // }

    handleAgeChange = (event)=> {
        const {value} = event.target;
        this.setState(prevState=>({
                formData : {
                    ...prevState.formData,
                    age : value
                }
            }))
    }

    handleNameChange = (event)=> {
        const {value} = event.target;
        this.setState(prevState=>({
                formData : {
                    ...prevState.formData,
                    name : value
                }
            }))
    }


    handleSubmit = (event) => {
        event.preventDefault();
        const {formData} = this.state
        this.setState(prevState=>({
            ...prevState,
            finalFormData : {
                ...prevState.finalFormData,
                ...formData
            },
            formData : {
                name : "",
                age: 0
            }
        }))
    }


    render(){
        console.log(this.state)
        return(
        <div>
            <form onSubmit={this.handleSubmit}>
                <input type={"text"} name="name" placeholder="name" value={this.state.formData.name} onChange={this.handleNameChange}/>
                <input type={"number"} name="age" placeholder="age" value={this.state.formData.age} onChange={this.handleAgeChange}/>
                <button type={"submit"} aria-label="submit">submit</button>
            </form>
            {
                this.state.finalFormData && Object.keys(this.state.finalFormData).length > 0 &&
                <p>
                                final data is {this.state.finalFormData.name} {this.state.finalFormData.age}
                </p>
            }
        </div>
        )
    }
};

export default ClassBasedComponent;

