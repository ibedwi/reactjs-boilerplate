import {
  createStore,
  compose,
  // Uncomment line if you want to use custom middleware
  // applyMiddleware
} from 'redux';
import rootReducer from './reducers/root.reducer';
import { composeWithDevTools } from 'redux-devtools-extension'


const enhancerList = [];
let composedEnchancer;

/**
 * Check if currently running on local or dev, compose 
 * redux with react-devtools-extensions.
 */
if ( process.env.REACT_APP_ENV == 'local' || process.env.REACT_APP_ENV == 'dev') {
  composedEnchancer = composeWithDevTools( ...enhancerList )
} else {
  composedEnchancer = compose( ...enhancerList );
}

const initStore = () => createStore( rootReducer, {}, composedEnchancer );

export default initStore