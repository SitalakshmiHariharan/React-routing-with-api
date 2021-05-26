import React, {Component} from 'react';
import PostView from './PostView';


const url = "http://localhost:8900/donuts";


class Posts extends Component {
    constructor(){
        super();
        this.state={
                artistDetails:''
        }
    }

    componentDidMount(){
        fetch(url,{method:'GET'})
        .then((res) => res.json())
        .then((data) =>{
            this.setState({artistDetails:data})
        })
    }

    render(){
        return(
            <div className="panel panel-warning">
                <div className="panel-heading">Panel Posts Heading</div>
                <div className="panel-body">
                {console.log("the data has arrived here")}
                {console.log(this.state.artistDetails)}
                    <PostView artists = {this.state.artistDetails}/>        
                </div>
            </div>
      )
    }
}

export default Posts


/*
<div className="jumbotron">
    <h3> Java </h3>
        <Link className= "btn btn-info" to="/post/Java">Details</Link>
    <h3> NodeJS </h3>
        <Link className= "btn btn-success" to="/post/Nodejs">Details</Link>
    <h3> Python </h3>
        <Link className= "btn btn-warning" to="/post/python">Details</Link>
    <h3> DotNET </h3>
        <Link className= "btn btn-danger" to="/post/dotnet">Details</Link>
</div>  
*/