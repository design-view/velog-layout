import React from 'react';
import List from './List';

const Lists = ({ lists }) => {
  return (
    <div className='lists'>
      {lists.map(list=><List list={list}/>)}
    </div>
  );
};

export default Lists;