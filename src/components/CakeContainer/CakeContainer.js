import React from 'react';
import { connect } from 'react-redux';
import { buyCake } from '../../redux';
// import { buyCake } from '../../redux/cake/cakeAction';



const CakeContainer = (props) => {
    return (
        <div>
            <h2>Number of Cake - {props.numOfCake} </h2>
            <button onClick={props.buyCake}>buy cake</button>
        </div>
    );
};

const mapStateToProps =(state)=>{
    return{
        numOfCake:state.numOfCake
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        buyCake:()=>dispatch(buyCake())
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (CakeContainer);
