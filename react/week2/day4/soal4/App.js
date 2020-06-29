import React, { createRef } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state ={
      nama: React.createRef(),
      gaji: React.createRef(),
      gender_laki: React.createRef(),
      gender_perempuan: React.createRef(),
      skill:React.createRef(),
      alamat:React.createRef(),
      file: React.createRef(),
    };

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event){
    event.preventDefault()
    const {nama,gaji,gender_laki,gender_perempuan,skill,alamat,file}=this.state;
    console.log(gender_laki);
    const kelamin = gender_laki.current.value==="laki_laki"? gender_laki.current.value: gender_perempuan.current.value;
    alert(`nama: ${nama.current.value}, 
    gaji: ${gaji.current.value}, gender: ${kelamin}, 
    skill: ${skill.current.value}, alamat: ${alamat.current.value}, slip gaji: ${file.current.files[0].name} `)
  }

  componentDidUpdate(){
    console.log(this.state)
  }

  render(){

    const {nama,gaji,gender_laki,gender_perempuan,skill,alamat, file}=this.state

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
            <label>Jenis Kelamin:</label><br/>
            <input type="radio" id="laki-laki" name="gender" ref={gender_laki} value="laki_laki"/><label htmlFor="laki-laki">Laki - Laki</label>
            <input type="radio" id="perempuan" name="gender" ref={gender_perempuan} value="perempuan"/><label htmlFor="perempuan">Perempuan</label>
          </div>
          <div>
            <label>Skill:</label><br/>
            <select name="skill" ref={skill} multiple>
              <option value="html">HTML</option>
              <option value="react">Javascript</option>
              <option value="laravel">PHP</option>
            </select>
          </div>
          <div>
            <label>Alamat:</label><br/>
            <textarea name="alamat" ref={alamat}/>
          </div>
          <div>
            <label>Slip Gaji:</label><br/>
            <input type="file" ref={file}/>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
  
}

export default App;
