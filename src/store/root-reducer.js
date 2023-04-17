import { combineReducers } from 'redux';
import { jobPositionReducer } from './jobPositions/job-position-reducer';
import { filterReducer } from './filters/filter-reducer';

export const rootReducer = combineReducers({
   // positions: positionReducer,
   jobPositionReducer: jobPositionReducer,
   filterReducer: filterReducer,
});
