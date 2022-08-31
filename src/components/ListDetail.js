import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectList } from '../modules/bloglists';
const ListDetail = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    dispatch(selectList(Number(id)))
    const list = useSelector(state=>state.bloglists.selectList);
    console.log(list)
    return(
        <div className='detailView'>
            <h2>{list.title}</h2>
            <p>{list.userId} · {list.registdate}</p>
            <div className='img'>
                <img src={`/${list.src}`} alt="dd" width="100%" height="auto" />
            </div>
            <div className='contents'>
                {list.desc}
            </div>
        </div>
    )
}
export default ListDetail;