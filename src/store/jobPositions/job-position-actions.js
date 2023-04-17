export const ADD_JOB_POSITIONS = 'ADD_JOB_POSITIONS';

export const addJobPositions = (jobPositions) => ({
   type: ADD_JOB_POSITIONS,
   // actionJobPositions,
   payload: jobPositions,
});
