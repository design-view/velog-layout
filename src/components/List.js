import React from 'react';

const List = ({ list }) => {
  return (
    <div className='listBox'>
      <div className='listImgBox'>
        <img src={list.src} alt="" />
      </div>
      <div className='listTextBox'>
        <div className='listText'>
          <h3>{list.title}</h3>
          <p>{list.desc}</p>
        </div>
        <div className='listDayComment'>
        {list.dayCount}일전·{list.commentCount}개의 댓글
        </div>
      </div>
      <div className='listUserBox'>
        <img src={list.userSrc} alt=""/>
        <span>by</span>
        {list.userName}
      </div>
    </div>
  );
};

export default List;