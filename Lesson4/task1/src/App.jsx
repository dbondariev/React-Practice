import React from 'react';
import Counter from './Counter';

export default props => {
  return (
    <>
      <Counter start={-10} interval={1000} />
      <Counter start={20} interval={2000} />
      <Counter start={30} interval={100} />
    </>
  );
};