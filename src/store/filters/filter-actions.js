export const ADD_FILTER = 'ADD_FILTER';

export const DELETE_FILTER = 'DELETE_FILTER';

export const CLEAR_FILTERS = 'CLEAR_FILTERS';

export const addFilter = (filter) => ({
   type: ADD_FILTER,
   payload: filter,
});

export const deleteFilter = (filter) => ({
   type: DELETE_FILTER,
   payload: filter,
});

export const clearFilters = {
   type: CLEAR_FILTERS,
};
