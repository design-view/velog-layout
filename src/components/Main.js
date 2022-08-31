import React from 'react';
import { useSelector } from 'react-redux/es/exports';

const Main = () => {
  const lists = useSelector(state=>state.bloglists)
  console.log(lists);
  return (
    <div>
    </div>
  );
};
export default Main;