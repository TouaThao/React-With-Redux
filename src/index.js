import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './component/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider} from 'react-redux';
import logger from 'redux-logger'


const snackReducer = (state = [] , action)=>{
    if(action.type === 'Add_Snack'){
        console.log(action.payload);
        return [...state, action.payload ]
    }
   return state
}

const StoreInstance = createStore(
    combineReducers({
        snackReducer,

    }),
    applyMiddleware(logger)
)



ReactDOM.render(<Provider store={StoreInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
