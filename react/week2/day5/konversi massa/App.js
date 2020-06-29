import React from 'react';
// import logo from './logo.svg';
import './App.css';

class TimeConverter extends React.Component{

  convert= (event)=>{
    this.props.onMassaChange(event.target.value);
  }

  render(){
    const {massaLabel, massaValue} = this.props;
    return(
      <div style={{marginBottom:"10px"}}>
        <label style={{display:"inline-block",width:"70px"}}>{massaLabel}</label>:&nbsp;
        <input type="text" value={massaValue} onChange={this.convert} />
      </div>
    )
  }
}


class App extends React.Component {
  constructor(){
    super();
    this.state ={
      gram:"0",
      kilogram: "0",
    };

  }

  convertToKilogram = (gram)=>{
    let kilogram = isNaN(gram) || gram==="" ? "0" : parseFloat(gram)/1000;
    this.setState({gram, kilogram});
  }

  convertToGram = (kilogram)=>{
    let gram = isNaN(kilogram) || kilogram==="" ? "0" : parseFloat(kilogram)*1000;
    this.setState({gram,kilogram});
  }

  handleSubmit = (event) =>{
    event.preventDefault();
    let gram = parseFloat(this.state.gram);
    let kilogram = parseFloat(this.state.kilogram);
    alert(`${gram} gram setara dengan ${kilogram} kilogram`)
  }

  render(){
    const {gram, kilogram} = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <TimeConverter massaLabel="Gram" massaValue={gram} onMassaChange={this.convertToKilogram} />
          <TimeConverter massaLabel="Kilogram" massaValue={kilogram} onMassaChange={this.convertToGram} />
          <button type="submit" >Convert</button>
        </form>
      </div>
    );
  }
  
}

export default App;
