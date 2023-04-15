import { useSelector } from 'react-redux';
import { JobPosition } from './JobPosition';
import { selectVisiblePositions } from 'store/positions/position-selectors';

export const JobList = () => {
   const jobPositions = useSelector(selectVisiblePositions);

   return (
      <div className='job-list'>
         {jobPositions.map((item) => (
            <JobPosition key={item.id} {...item} />
         ))}
      </div>
   );
};
