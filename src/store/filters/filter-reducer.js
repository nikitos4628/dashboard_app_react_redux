import { ADD_FILTER, DELETE_FILTER, CLEAR_FILTERS } from './filter-actions';

export const filterReducer = (state = [], action) => {
   switch (action.type) {
      case ADD_FILTER: {
         if (state.includes(action.payload)) {
            return state;
         }

         return [...state, action.payload];
      }
      case DELETE_FILTER: {
         return state.filter((filter) => filter !== action.payload);
      }
      case CLEAR_FILTERS: {
         return [];
      }
      default: {
         return state;
      }
   }
};
