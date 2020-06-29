import React from 'react';
// import logo from './logo.svg';
import './App.css';

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

const listBaru = list.map((value,index)=>{
  let hasil = <div key={index}><p>Nama:{value.nama}</p><p>Pekerjaan: {value.pekerjaan}</p><p>Hobi: {value.hobi}</p><br/></div>
  return hasil;
})

class App extends React.Component {

  render(){
    return (
      <div>
        {listBaru}
      </div>
    );
  }
  
}

export default App;
