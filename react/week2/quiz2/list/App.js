import React from 'react';
// import logo from './logo.svg';
import './App.css';

class TampilList extends React.Component{
  render(){

    const list = this.props.list.map((value)=>{
      let data=[];
      for (const key in value) {
          data.push(<p key={key}>{key} : {value[key]} </p>)
      }
      return(
        <div>{data}<br/></div>
      )
    })

    return(
      <div>{list}</div>
    )
  }
}

class App extends React.Component {

  render(){
    const list = [
      {
        nama:"Arkan",
        pekerjaan:"Programmer",
        hobi: "Coding"
      },
      {
        nama:"Budi",
        pekerjaan:"Kontraktor",
        hobi:"Makan"
      },
      {
        nama:"Banu",
        pekerjaan:"Sales",
        hobi:"Baca buku"
      }
    ]
    return (
      <div>
        <TampilList list={list} />
      </div>
    );
  }
  
}

export default App;
