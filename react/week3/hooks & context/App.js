import React,{useState,useEffect} from 'react';
import './App.css';

function App(props) {

  const [state,setState] = useState({
    myState:"Hello!"
  });

  const {myState} = state;

  // similar componentDidMount(){}
  useEffect(()=>{
    setState({myState:'Hello World!'});
  },[])

  // similar componentDidUpdate(){}
  useEffect(()=>{
    console.log(`my updated state is ${myState}`)
  },[myState])

  // similar componentWillUmount(){}
  useEffect(()=>{
    return console.log('Good Bye!')
  },[myState])

  return (
    <div className="hello">
      Halo Dunia
    </div>
  );
}

export default App;