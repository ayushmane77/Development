import { Component } from "react";
class Demo extends Component{

    constructor(props) {  // ✅ Add props here
    super(props);  
    }
    render(){
        return(
            <>
            <div>
                <h1>This is a class Component</h1>
                <h1>Name is :{this.props.name}</h1>
            </div>
            </>
        )
    }
}

export default Demo;