import React from 'react';
import Clock from './Clock';

export default props => (
  <>
    <Clock location="New York" offset={-3} />
    <Clock location="London" offset={0} />
    <Clock location="Kyiv" offset={2} />
  </>
);
