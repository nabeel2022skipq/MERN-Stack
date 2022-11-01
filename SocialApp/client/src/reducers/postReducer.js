const initial_state = {
    posts: [],
    isloading: false

}

export default function (state = initial_state, action) {
    switch (action.type) {
        case "ADD_POST":
            return {
                ...state,
                posts: [...state.posts, action.payload]
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
                posts: state.posts.filter(post => post.description !== action.payload.description)
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