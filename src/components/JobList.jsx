import { useSelector, useDispatch } from 'react-redux';
import { JobPosition } from './JobPosition';
import { selectVisibleJobPositions } from 'store/jobPositions/job-position-selectors';

import { selectFilters } from 'store/filters/filter-selectors';

import { addFilter } from 'store/filters/filter-actions';

export const JobList = () => {
   const dispatch = useDispatch();
   const currentFilters = useSelector(selectFilters);
   const jobPositions = useSelector((state) =>
      selectVisibleJobPositions(state, currentFilters)
   );

   const handleAddFilter = (filter) => {
      dispatch(addFilter(filter));
   };

   return (
      <div className='job-list'>
         {jobPositions.map((jobPosition) => (
            <JobPosition
               key={jobPosition.id}
               handleAddFilter={handleAddFilter}
               {...jobPosition}
            />
         ))}
      </div>
   );
};
