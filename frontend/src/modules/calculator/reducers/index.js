import { combineReducers } from 'redux';
import expressionReducer from './expressionReducer';
import screenReducer from './screenReducer';

export default combineReducers({
    expression: expressionReducer,
    screen: screenReducer
});
