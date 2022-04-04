import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { buyIceCream } from '../redux';


const IceCreamContainer = () => {
    const numOfIceCream = useSelector(state => state.iceCream.numOfIceCream)
    const dispatch = useDispatch()
    return (
        <div>
           <h3>num of icecream -{numOfIceCream} </h3> 
           <button onClick={()=> dispatch(buyIceCream())}>buy iceCream</button>
        </div>
    );
};

export default IceCreamContainer;