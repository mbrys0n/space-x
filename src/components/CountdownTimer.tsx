import React from 'react';
import { useState, useEffect } from 'react';
import { DateTime } from 'luxon';

interface TimerProps {
  parsedDT: DateTime;
}
const calculateTimeDeltaFromNow = (parsedDT: DateTime) => parsedDT.diffNow(['days', 'hours', 'minutes', 'second']);

const CountdownTimer = ({ parsedDT }: TimerProps): JSX.Element => {
  const [{ days, hours, minutes, seconds }, setTimeDelta] = useState(calculateTimeDeltaFromNow(parsedDT));

  useEffect(() => {
    const timerId = setInterval(() => {
      setTimeDelta(calculateTimeDeltaFromNow(parsedDT));
    }, 1000);
    return () => clearInterval(timerId);
  }, []);
  return (
    <h1>
      {days} days : {hours} hours : {minutes} minutes : {Math.floor(seconds)} seconds
    </h1>
  );
};

export default CountdownTimer;
