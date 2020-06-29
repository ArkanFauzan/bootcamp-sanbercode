import React, { createRef } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state ={
      nama: React.createRef(),
      gaji: React.createRef(),
      date: React.createRef(),
      gender_laki: React.createRef(),
      // gender_perempuan: React.createRef(),
      html:React.createRef(),
      javascript:React.createRef(),
      php:React.createRef(),
      alamat:React.createRef(),
    };

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event){
    event.preventDefault()
    const {nama,gaji,date,gender_laki,html,javascript,php,alamat}=this.state;

    const gender = gender_laki.current.checked===true? "Laki-laki": "Perempuan";

    let skillHtml = html.current.selected==true?"HTML ":"";
    let skillJavascript = javascript.current.selected==true?"Javascript ":"";
    let skillPhp = php.current.selected==true?"PHP ":"";
    
    alert(`nama: ${nama.current.value},
    gaji: ${gaji.current.value}, Tanggal masuk kerja: ${date.current.value} gender: ${gender}, 
    skill: ${skillHtml}${skillJavascript}${skillPhp}, alamat: ${alamat.current.value}} `)
  }

  componentDidUpdate(){
    console.log(this.state)
  }

  render(){

    const {nama,gaji,date,gender_laki,html,javascript,php,alamat}=this.state

    return (
      <div className="form-bejo">
        <form onSubmit={this.onSubmit}>
          <div>
            <label>Nama:</label><br/>
            <input type="text" name="nama" ref={nama}/>
          </div>
          <div>
            <label>Gaji:</label><br/>
            <input type="number" name="gaji" ref={gaji}/>
          </div>
          <div>
            <label>Tanggal masuk kerja:</label><br/>
            <input type="date" name="date" ref={date}/>
          </div>
          <div>
            <label>Jenis Kelamin:</label><br/>
            <input type="radio" id="laki-laki" name="gender" ref={gender_laki}/><label htmlFor="laki-laki">Laki - Laki</label>
            <input type="radio" id="perempuan" name="gender" /><label htmlFor="perempuan">Perempuan</label>
          </div>
          <div>
            <label>Skill:</label><br/>
            <select name="skill" multiple>
              <option value="html" ref={html}>HTML</option>
              <option value="react" ref={javascript}>Javascript</option>
              <option value="laravel" ref={php}>PHP</option>
            </select>
          </div>
          <div>
            <label>Alamat:</label><br/>
            <textarea name="alamat" ref={alamat}/>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
  
}

export default App;
