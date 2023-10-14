import React, { Suspense, lazy } from 'react';
import { useParams } from 'react-router-dom';

const TimetableLoader = () => {
  const { location } = useParams();
  
  const TimetableComponent = lazy(() =>
    import(`./timetables/${location.charAt(0).toUpperCase() + location.slice(1)}.jsx`)
      .catch(() => {
        throw new Error('Timetable not found');
      })
  );

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <TimetableComponent />
    </Suspense>
  );
};

export default TimetableLoader;
