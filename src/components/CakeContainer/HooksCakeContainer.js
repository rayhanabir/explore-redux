import React from 'react';
import { buyCake } from '../../redux/cake/cakeAction';
import { useDispatch, useSelector } from 'react-redux';

const HooksCakeContainer = () => {
    const numOfCake = useSelector(state => state.numOfCake)
    const dispatch = useDispatch()
    return (
        <div>
            <h2>num of cake - {numOfCake}</h2>
            <button onClick={()=>dispatch(buyCake())}>buy cake</button>
        </div>
    );
};

export default HooksCakeContainer;