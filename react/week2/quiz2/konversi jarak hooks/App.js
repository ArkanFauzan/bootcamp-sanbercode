/*
1. lakukan import useState
2. ubah class component menjadi function component dengan parameter props
3. tidak ada constructor
4. ubah method class menjadi const (salahsatunya onSubmit = ()=>{})
5. tidak ada this, langsung props/method saja
6. tidak ada render(){return()}, langsung return() saja
7. perhatikan perubahan
*/ 

//--------------------------------perhatikan-------------------------------------------------
import React,{useState} from 'react';
// import logo from './logo.svg';
import './App.css';


//--------------------------------perhatikan-------------------------------------------------
function JarakConverter(props){

  //--------------------------------perhatikan-------------------------------------------------
  const convert = (event)=>{
    props.onValueChange(event.target.value);
  }
//--------------------------------perhatikan-------------------------------------------------
    const {Satuan,Value} = props;
    return(
      <div style={{marginBottom:"10px"}}>
        <label style={{display:"inline-block",width:"70px"}}>{Satuan}</label>:&nbsp;
        <input type="text" value={Value} onChange={convert} />
      </div>
    )
}


//--------------------------------perhatikan-------------------------------------------------
function App(props) {
  //--------------------------------perhatikan-------------------------------------------------
  //--------------------------------perhatikan-------------------------------------------------
  //--------------------------------perhatikan-------------------------------------------------
  const [satuan,setSatuan] = useState({
    kilometer:0,
    meter:0,
    milimeter:0
  })

  const {kilometer,meter,milimeter} = satuan;

  //--------------------------------perhatikan-------------------------------------------------
  const convertKilometer = (kilometer)=>{
    let meter = isNaN(kilometer) || kilometer==="" ? "0" : parseFloat(kilometer)*1000;
    let milimeter = isNaN(kilometer) || kilometer==="" ? "0" : parseFloat(kilometer)*1000000;
    setSatuan({kilometer,meter,milimeter});
  }

  const convertMeter = (meter)=>{
    let kilometer = isNaN(meter) || meter==="" ? "0" : parseFloat(meter)/1000;
    let milimeter = isNaN(meter) || meter==="" ? "0" : parseFloat(meter)*1000;
    setSatuan({kilometer,meter,milimeter});
  }
  const convertMilimeter = (milimeter)=>{
    let kilometer = isNaN(milimeter) || milimeter==="" ? "0" : parseFloat(milimeter)/1000000;
    let meter = isNaN(milimeter) || milimeter==="" ? "0" : parseFloat(milimeter)/1000;
    setSatuan({kilometer,meter,milimeter});
  }

  const handleSubmit = (event) =>{
    event.preventDefault();
    let kilometer = parseFloat(kilometer);
    let meter = parseFloat(meter);
    let milimeter = parseFloat(milimeter);
    alert(`${kilometer} kilometer setara dengan ${meter} meter dan ${milimeter} milimeter`)
  }

    return (
      <div>
        <form onSubmit={handleSubmit}>
          <JarakConverter Satuan="Kilometer" Value={kilometer} onValueChange={convertKilometer} />
          <JarakConverter Satuan="Meter" Value={meter} onValueChange={convertMeter} />
          <JarakConverter Satuan="Milimeter" Value={milimeter} onValueChange={convertMilimeter} />
          <button type="submit" >Convert</button>
        </form>
      </div>
    );
}

export default App;
