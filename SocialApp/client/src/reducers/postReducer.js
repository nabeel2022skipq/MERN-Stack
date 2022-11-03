const initial_state = {
    posts: [],
    isloading: false

}

export default function (state = initial_state, action) {
    switch (action.type) {
        case "ADD_POST":
            return {
                ...state,
                posts: [action.payload, ...state.posts]
            }
        case "GET_POSTS":
            return {
                ...state,
                posts: action.payload,
                isloading: false
            }
        case "DEL_POST":
            return {
                ...state,
                posts: state.posts.filter(post => post._id !== action.payload.id)
            }
        case "UPDATE_POST":
            for (let i = 0; i < state.posts.length; i++) {
                if (state.posts[i]._id === action.payload.id) {
                    state.posts[i].title = action.payload.updateTitle;
                    state.posts[i].description = action.payload.updateDescription;
                    break; //Stop this loop, we found it!
                }

            }
            return {
                ...state,
                posts: state.posts
            }
        case "SET_POSTS_LOADING":
            return {
                ...state,
                isloading: true
            }
        default:
            return state
    }
}