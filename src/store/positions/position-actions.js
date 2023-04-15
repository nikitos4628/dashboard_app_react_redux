export const ADD_POSITIONS = 'ADD_POSITIONS';

export const addPositions = (jobPositions) => ({
   type: ADD_POSITIONS,
   // actionPositions,
   payload: jobPositions,
});
