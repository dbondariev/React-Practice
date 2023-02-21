import React, { Component } from 'react';
import moment from 'moment';

const formatDate = date => moment(date).format('LTS');

const getTimeWithOffset = offset => {
  const currentTime = new Date();
  const utcOffset = currentTime.getTimezoneOffset() / 60;
  return new Date(currentTime.setHours(currentTime.getHours() + offset + utcOffset));
};

const Clock = props => {
  const [time, setTime] = useState(formatDate(getTimeWithOffset(props.offset)));
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(formatDate(getTimeWithOffset(props.offset)));
    }, 1000);
    return () => clearInterval(interval);
  }, [props.offset]);
  return (
    <>
      <div className="clock">
        <div className="clock__location">{props.location}</div>
        <div className="clock__time">{time}</div>
      </div>
    </>
  );
};

export default Clock;
