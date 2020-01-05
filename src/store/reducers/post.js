import { LOAD_POSTS, REMOVE_POST, TOGGLE_BOOKED, ADD_POST } from '../types';

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
        case TOGGLE_BOOKED:
            // eslint-disable-next-line no-case-declarations
            const allPosts = state.allPosts.map(post => {
                if (post.id === action.payload) {
                    post.booked = !post.booked;
                }
                return post;
            });
            return {
                ...state,
                allPosts,
                bookedPosts: allPosts.filter(post => post.booked),
            };
        case REMOVE_POST:
            return {
                ...state,
                allPosts: state.allPosts.filter(item => item.id !== action.payload),
                bookedPosts: state.bookedPosts.filter(item => item.id !== action.payload),
            };
        case ADD_POST:
            return {
                ...state,
                allPosts: [{ ...action.payload }, ...state.allPosts],
            };
        default:
            return state;
    }
};

export default postReducer;
