import React from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state ={
      nama:"",
      gaji: 0,
      gender: "",
      skill:[],
      alamat:"",
    };

    this.onChange = this.onChange.bind(this);
    this.onSelect = this.onSelect.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(event){
    const {name, value} = event.target;
    this.setState({[name]:value})
  }

  onSelect(event){
    let skill = [...this.state.skill];
    let index = skill.findIndex(elemen => event.target.value==elemen);

    if (index>0) {
      skill = [...skill.slice(0,index),...skill.slice(index+1,skill.length)]
    }else if (index===0){
      skill = [...skill.slice(index+1,skill.length)]
    }else{
      skill.push(event.target.value);
    }

    this.setState({skill: skill})
  }

  onSubmit(event){
    event.preventDefault()
    const {nama,gaji,gender,skill,alamat}=this.state;

    alert(`nama: ${nama}, 
    gaji: ${gaji}, gender: ${gender}, 
    skill: ${skill}, alamat: ${alamat}`)
  }

  componentDidUpdate(){
    console.log(this.state)
  }

  render(){

    const {nama,gaji,gender,skill,alamat}=this.state

    let cekLakiLaki = gender=="laki_laki" ? true : false ;
    let cekPerempuan = gender=="perempuan" ? true : false ;

    return (
      <div className="form-bejo">
        <form onSubmit={this.onSubmit}>
          <div>
            <label>Nama:</label><br/>
            <input type="text" name="nama" value={nama} onChange={this.onChange}/>
          </div>
          <div>
            <label>Gaji:</label><br/>
            <input type="number" name="gaji" value={gaji} onChange={this.onChange}/>
          </div>
          <div>
            <label>Jenis Kelamin:</label><br/>
            <input type="radio" id="laki-laki" name="gender" checked={cekLakiLaki} value="laki_laki" onChange={this.onChange}/><label htmlFor="laki-laki">Laki - Laki</label>
            <input type="radio" id="perempuan" name="gender" checked={cekPerempuan} value="perempuan" onChange={this.onChange}/><label htmlFor="perempuan">Perempuan</label>
          </div>
          <div>
            <label>Skill:</label><br/>
            <select name="skill" value={skill} multiple onChange={this.onSelect}>
              <option value="html">HTML</option>
              <option value="react">Javascript</option>
              <option value="laravel">PHP</option>
            </select>
          </div>
          <div>
            <label>Alamat:</label><br/>
            <textarea name="alamat" value={alamat} onChange={this.onChange}/>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
  
}

export default App;
