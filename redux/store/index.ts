import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from '@redux/reducers';

const initialState = {};
export const reduxWrapper = createStore(reducer, initialState, applyMiddleware(thunk));
