import React from 'react';
// import logo from './logo.svg';
import './App.css';

class RowVehicle extends React.Component{
  render(){
    return(
      <tr>
        <td>{this.props.vehicle.nama}</td>
        <td>{this.props.vehicle.harga}</td>
      </tr>
    )
  }
}

class RowType extends React.Component{
  render(){
    return(
      <tr>
        <th colSpan="2">{this.props.vehicle.type}</th>
      </tr>
    )
  }
}

class ShowProductTable extends React.Component{
  render(){
    const {search,checkbox}=this.props.filter;

    const listProduct=[];
    let lastType= null;

    this.props.vehicle.forEach((value)=>{
      if (value.type.indexOf(search)==-1 && value.nama.indexOf(search)==-1) {
        return
      }
      if (checkbox===true && value.ready===false) {
        return
      }
      if (lastType!==value.type) {
        listProduct.push(<RowType vehicle={value}/>)
      }
      listProduct.push(<RowVehicle vehicle={value}/>)
      lastType=value.type;
    })

    return(
      <>
        {listProduct}
      </>
    )
  }
}

class Search extends React.Component{
  
  constructor(props){
    super(props)
  }

  handleSearch = (event)=>{
    this.props.onSearch(event.target.value)
  }

  handleCheckbox = (event)=>{
    this.props.onCheckbox(event.target.checked)
  }

  render(){
    const {search,checkbox} = this.props.filter
    return(
      <>
        <input type="search" value={search} placeholder="search..." onChange={this.handleSearch}/><br/>
        <input type="checkbox" checked={checkbox} id="cekStok" onChange={this.handleCheckbox}/> <label htmlFor="cekStok">Show only ready stock</label>
      </>
    )
  }
}

class FilterableVehicle extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      search :"",
      checkbox: false,
    }
  }
  onSearch = (search)=>{
    this.setState({search})
  }
  onCheckbox = (checked)=>{
    this.setState({checkbox:checked})
  }
  render(){
    console.log(this.state.checkbox)
    return (
      <>
        <div>
          <Search filter={this.state} onSearch={this.onSearch} onCheckbox={this.onCheckbox}/>
        </div>
        <div>
          <table>
            <tbody>
              <ShowProductTable vehicle={this.props.vehicle} filter={this.state}/>
            </tbody>
          </table>
        </div>
      </>
    )
  }
}

class App extends React.Component {

  render(){
    const vehicle=[
                    {type: "Mobil", harga: "Rp 148.000.000", ready: true, nama: "Brio"},
                    {type: "Mobil", harga: "Rp 205.500.000", ready: true, nama: "Mobilio"},
                    {type: "Mobil", harga: "Rp 252.500.000", ready: false, nama: "Jazz"},
                    {type: "Motor", harga: "Rp 16.000.000", ready: true, nama: "Beat"},
                    {type: "Motor", harga: "Rp 29.000.000", ready: false, nama: "PCX"},
                    {type: "Motor", harga: "Rp 35.000.000", ready: true, nama: "CBR150R"}
                  ];
    return (
      <div>
        <FilterableVehicle vehicle={vehicle}/>
      </div>
    )
  }
  
}

export default App;
