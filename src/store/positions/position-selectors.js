export const selectAllPositions = (state) => state.positionReducer;

export const selectVisiblePositions = (
   state,
   filters = ['JavaScript', 'Junior', 'React']
) => {
   if (filters.length === 0) return state.positionReducer;

   return state.positionReducer.filter((jobPosition) => {
      const jobPositionFilters = [].concat(
         jobPosition.role,
         jobPosition.level,
         ...jobPosition.languages,
         ...jobPosition.tools
      );

      return filters.every((filter) => jobPositionFilters.includes(filter));
   });
};
