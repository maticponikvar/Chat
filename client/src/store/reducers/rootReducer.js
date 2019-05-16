import React from 'react'
import postsReducer from './postsReducer';
import { combineReducers } from 'redux'
import usersReducer from './usersReducer';
import authReducer from './authReducer';

const rootReducer = combineReducers ({
        postsdata: postsReducer,
        users: usersReducer,
        auth: authReducer
})

export default rootReducer
