import React from 'react';
import './App.css';
import {useSelector,useDispatch} from 'react-redux';
import {incrementAsync,decrementAsync} from './action'

function App() {

  const dispatch = useDispatch();
  const counter = useSelector(state=>state.counter);

  const _handleSubstract = ()=>{
    dispatch(decrementAsync())
  }

  const _handleAdd = ()=>{
    dispatch(incrementAsync())
  }

  return(
    <>
    <div className='App' >
      <div>
        <div style={{color:"white",paddingTop:'200px'}}>Counter: {counter}</div>
        <div></div>
        <button style={{display:"inline-block"}} onClick={_handleSubstract}>Substrack</button>
        <button style={{display:"inline-block"}} onClick={_handleAdd}>Add</button>
      </div>
    </div>
    </>
  )
}

export default App;