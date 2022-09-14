import React from "react";
import { Component } from "react";

class ApiPracticeComponent extends Component {
    
    state = {
        data : []
    }

    componentDidMount(){
        this.getData()
    }

    getData= async()=>{
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        console.log(data);
        if(data && data.length > 0){
            this.setState({
                data
            })
        }
    }

    render(){
        console.log(this.state)
        return (
            <div>
                {
                    this.state.data && this.state.data.length > 0 ? 
                    this.state.data.map((dataItem, index)=>(
                        <p key={`${dataItem.id}${index}`}>{dataItem.title}</p>
                    )) : null 
                }
            </div>
        );
    }
}

export default ApiPracticeComponent;