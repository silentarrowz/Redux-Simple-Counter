import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createStore} from 'redux';


function rootReducer(state=0, action) {
  switch (action.type) {
    case 'ADD-ONE':
    console.log('state+1 :', state+1);
       return state+1;
    case 'SUBTRACT-ONE':
      console.log('state-1 :', state-1);
        return state-1;
    default:
        return state;
  }
}


let store = createStore(rootReducer);


const render = ()=>{
  ReactDOM.render(<App value={store.getState()}
      increment={() => store.dispatch({type: 'ADD-ONE'})}
      decrement={() => store.dispatch({type: 'SUBTRACT-ONE'})} />,
       document.getElementById('root'));
};

store.subscribe(render);
render();
registerServiceWorker();
