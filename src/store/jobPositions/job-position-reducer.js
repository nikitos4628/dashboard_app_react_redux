import { ADD_JOB_POSITIONS } from './job-position-actions';

export const jobPositionReducer = (state = [], action) => {
   switch (action.type) {
      case ADD_JOB_POSITIONS: {
         return action.payload;
      }
      default: {
         return state;
      }
   }
};
