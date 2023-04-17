export const selectAllJobPositions = (state) => state.jobPositionReducer;

export const selectVisibleJobPositions = (state, filters = []) => {
   if (filters.length === 0) return state.jobPositionReducer;

   return state.jobPositionReducer.filter((jobPosition) => {
      const jobPositionFilters = [].concat(
         jobPosition.role,
         jobPosition.level,
         ...jobPosition.languages,
         ...jobPosition.tools
      );

      return filters.every((filter) => jobPositionFilters.includes(filter));
   });
};
