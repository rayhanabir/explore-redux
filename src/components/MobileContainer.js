import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { buyMobile } from '../redux';




const MobileContainer = () => {
    const numOfMobile = useSelector(state => state.mobile.numOfMobile)
    const dispatch = useDispatch()
    return (
        <div>
            <h3>num of mobile -{numOfMobile}</h3>
            <button onClick={()=> dispatch(buyMobile())}>buy mobile</button>
        </div>
    );
};

export default MobileContainer;