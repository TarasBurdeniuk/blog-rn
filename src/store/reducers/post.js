import { LOAD_POSTS } from '../types';

const initialState = {
    allPosts: [],
    bookedPosts: [],
};

const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_POSTS:
            return {
                ...state,
                allPosts: action.payload,
                bookedPosts: action.payload.filter(item => item.booked),
            };
        default:
            return state;
    }
};

export default postReducer;
