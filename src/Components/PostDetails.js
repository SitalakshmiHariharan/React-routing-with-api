import React,{Component} from 'react';

const url = "http://localhost:8900/donuts";

class PostDetails extends Component{   

    constructor(){
        super();
        this.state={
            artist:''
        }
    }

    componentDidMount(){
        fetch(`${url}/${this.props.match.params.id}`,{method:'GET'})
        .then((res) => res.json())
        .then((data) =>{
            this.setState({artist:data})
        })
    }
    render(){
        return(
            <div className="panel panel-danger">
                <div className="panel-heading">Panel Post Details Heading</div>
                <div className="panel-body">Panel Post Details Content for
                  <h2>{this.state.artist.name}</h2>
                  <p>{this.state.artist.type}</p>                                 
                </div>
            </div>
      )
    }

}


export default PostDetails