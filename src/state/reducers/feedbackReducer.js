import { createAction, createReducer } from '@reduxjs/toolkit'
import { db } from '../../firebase-config';
const addToComment = createAction("Add to Comment");
const getCommentsFromFirebase = createAction("Get Comments From Firebase")

const feedbackActions = { addToComment, getCommentsFromFirebase };

const initialState = [];

const feedbackReducer = createReducer(initialState, {

    [addToComment]: (state, action) => {

    },

    [getCommentsFromFirebase]: (state, action) => {

    }
})

export { feedbackReducer, feedbackActions }