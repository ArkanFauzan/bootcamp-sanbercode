import {combineReducers} from 'redux'

const counter = (value=0,action)=>{
    if (action.type==='ADD') {
        return value+=1;
    }
    else if(action.type==='SUBSTRACK'){
        return value-=1;
    }
    else{
        return value;
    }
};

export default combineReducers({counter}); 