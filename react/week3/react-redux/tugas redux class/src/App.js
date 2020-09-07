import React from 'react';
import './App.css';
import {connect} from 'react-redux';

class App extends React.Component {

  _handleSubstract = ()=>{
    this.props.changeCounterDown()
  }

  _handleAdd = ()=>{
    this.props.changeCounterUp()
  }

  render(){
    return(
      <>
      <div className='App' >
        <div>
          <div style={{color:"white",paddingTop:'200px'}}>Counter: {this.props.counter}</div>
          <div></div>
          <button style={{display:"inline-block"}} onClick={this._handleSubstract}>Substrack</button>
          <button style={{display:"inline-block"}} onClick={this._handleAdd}>Add</button>
        </div>
      </div>
      </>
    )
  }
}

const mapStateToProps = state=>({
  counter : state.counter,
})

const mapDispatchToProps = dispatch=>({
  changeCounterUp : () => (dispatch({type:'ADD'})),
  changeCounterDown : () => (dispatch({type:'SUBSTRACK'})),
})

export default connect(mapStateToProps,mapDispatchToProps)(App);