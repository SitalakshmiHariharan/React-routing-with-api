import React,{Component} from 'react';

const url = "http://localhost:8900/donuts";

class Forms extends Component{
    constructor(){
        super();
        this.state={
            type:"",
            name:"",
            ppu:0,
            topping:""
        }
        this.handleTypeChange = this.handleTypeChange.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handlePpuChange = this.handlePpuChange.bind(this);
        this.handleToppingChange = this.handleToppingChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleTypeChange(event){
        this.setState({type:event.target.value})
    }
    handleNameChange(event){
        this.setState({name:event.target.value})
    }
    handlePpuChange(event){
        this.setState({ppu:event.target.value})
    }
    handleToppingChange(event){
        this.setState({topping:event.target.value})
    }

    handleSubmit(e){
        e.preventDefault();
        console.log(this.state);
        var id = Math.floor(Math.random()*1000);
        var data = {
            id:id,
            type: this.state.type,
            name:this.state.name,            
            ppu:this.state.ppu,
            topping: this.state.topping
        }
        fetch(url,{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(data)
        })
        .then(this.props.history.push('/posts'))
    }

    render(){
        return(
            <div className="panel panel-info">
                <div className="panel-heading">Panel Forms Heading</div>
                <div className="panel-body">
                    <form>
                        <div className="form-group">
                            <label for="type">Type:</label>
                                <input type="text" className = "form-control" placeholder="Type of Donut" id="type" value={this.state.type} onChange={this.handleTypeChange}></input>
                        </div>
                        <div className="form-group">
                            <label for="name">Name:</label>
                                <input type="text" className = "form-control" placeholder="Name of Donut" id="name" value={this.state.name} onChange={this.handleNameChange}></input>
                        </div>
                        <div className="form-group">
                            <label for="ppu">PPU:</label>
                                <input type="text" className = "form-control" placeholder="PPU for Donut" id="ppu" value={this.state.ppu} onChange={this.handlePpuChange}></input>
                        </div>
                        <div className="form-group">
                            <label for="top">Topping:</label>
                                <input type="text" className = "form-control" placeholder="Topping" id="top" value={this.state.topping} onChange={this.handleToppingChange}></input>            
                        </div>
                        <button type="submit" className="btn btn-success" onClick={this.handleSubmit}>ADD</button>
                    </form>
                </div>
            </div>
      );
    }
}
 
export default Forms