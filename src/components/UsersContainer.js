import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../redux/Users/userAction';

const UsersContainer = ({userData,fetchUser}) => {
    useEffect(()=>{
        fetchUser()
    },[])
    return userData.loading?(
        <h3>Loading..</h3>
    ):userData.error?(
        <h3>{userData.error}</h3>
    ):(
        <div>
            <h2>user list</h2>
            <div>
            {
                userData &&userData.users &&userData.users.map(user =><p>{user.name}</p>)
            }
            </div>
        </div>
        
    )

    
};

const mapStateToProps =(state)=>{
    return{
        userData:state.users
    }
}

const mapDispatchToProps =(dispatch)=>{
    return{
        fetchUser:()=>dispatch(fetchUser())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)( UsersContainer);