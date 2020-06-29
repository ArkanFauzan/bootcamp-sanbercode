import React from 'react';
// import logo from './logo.svg';
import './App.css';

class JarakConverter extends React.Component{

  convert= (event)=>{
    this.props.onValueChange(event.target.value);
  }

  render(){
    const {Satuan,Value} = this.props;
    return(
      <div style={{marginBottom:"10px"}}>
        <label style={{display:"inline-block",width:"70px"}}>{Satuan}</label>:&nbsp;
        <input type="text" value={Value} onChange={this.convert} />
      </div>
    )
  }
}


class App extends React.Component {
  constructor(){
    super();
    this.state ={
      kilometer:"0",
      meter: "0",
      milimeter: "0"
    };

  }

  convertKilometer = (kilometer)=>{
    let meter = isNaN(kilometer) || kilometer==="" ? "0" : parseFloat(kilometer)*1000;
    let milimeter = isNaN(kilometer) || kilometer==="" ? "0" : parseFloat(kilometer)*1000000;
    this.setState({kilometer,meter,milimeter});
  }

  convertMeter = (meter)=>{
    let kilometer = isNaN(meter) || meter==="" ? "0" : parseFloat(meter)/1000;
    let milimeter = isNaN(meter) || meter==="" ? "0" : parseFloat(meter)*1000;
    this.setState({kilometer,meter,milimeter});
  }
  convertMilimeter = (milimeter)=>{
    let kilometer = isNaN(milimeter) || milimeter==="" ? "0" : parseFloat(milimeter)/1000000;
    let meter = isNaN(milimeter) || milimeter==="" ? "0" : parseFloat(milimeter)/1000;
    this.setState({kilometer,meter,milimeter});
  }

  handleSubmit = (event) =>{
    event.preventDefault();
    let kilometer = parseFloat(this.state.kilometer);
    let meter = parseFloat(this.state.meter);
    let milimeter = parseFloat(this.state.milimeter);
    alert(`${kilometer} kilometer setara dengan ${meter} meter dan ${milimeter} milimeter`)
  }

  render(){
    const {kilometer,meter,milimeter} = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <JarakConverter Satuan="Kilometer" Value={kilometer} onValueChange={this.convertKilometer} />
          <JarakConverter Satuan="Meter" Value={meter} onValueChange={this.convertMeter} />
          <JarakConverter Satuan="Milimeter" Value={milimeter} onValueChange={this.convertMilimeter} />
          <button type="submit" >Convert</button>
        </form>
      </div>
    );
  }
  
}

export default App;
