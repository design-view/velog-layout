import React from 'react';
import { useSelector } from 'react-redux/es/exports';
import Lists from './Lists';

const Main = () => {
  const lists = useSelector(state=>state.bloglists.lists)
  return (
    <Lists lists={lists} listname="mainList"/>
  );
};
export default Main;