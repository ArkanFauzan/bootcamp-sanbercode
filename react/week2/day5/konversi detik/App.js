import React from 'react';
// import logo from './logo.svg';
import './App.css';

class TimeConverter extends React.Component{

  convert= (event)=>{
    this.props.onTimeChange(event.target.value);
  }

  render(){
    const {timeLabel, timeValue} = this.props;
    return(
      <div style={{marginBottom:"10px"}}>
        <label style={{display:"inline-block",width:"50px"}}>{timeLabel}:</label>
        <input type="text" value={timeValue} onChange={this.convert} />
      </div>
    )
  }
}


class App extends React.Component {
  constructor(){
    super();
    this.state ={
      detik:"0",
      menit: "0",
    };

  }

  convertToMenit = (detik)=>{
    let menit = isNaN(detik) || detik==="" ? "0" : parseFloat(detik)/60;
    this.setState({detik, menit});
  }

  convertToDetik = (menit)=>{
    let detik = isNaN(menit) || menit==="" ? "0" : parseFloat(menit)*60;
    this.setState({detik,menit});
  }

  handleSubmit = (event) =>{
    event.preventDefault();
    let detik = parseFloat(this.state.detik);
    let menit = parseFloat(this.state.menit);
    alert(`${detik} detik setara dengan ${menit} menit`)
  }

  render(){
    const {detik, menit} = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <TimeConverter timeLabel="Detik" timeValue={detik} onTimeChange={this.convertToMenit} />
          <TimeConverter timeLabel="Menit" timeValue={menit} onTimeChange={this.convertToDetik} />
          <button type="submit" >Convert</button>
        </form>
      </div>
    );
  }
  
}

export default App;
