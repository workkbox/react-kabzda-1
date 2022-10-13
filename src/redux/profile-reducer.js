const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';


let initialState = {
    posts: [
        {id: 0, message: 'Privetik', likesCount: 1},
        {id: 1, message: 'govNo', likesCount: 228}
    ],
    newPostText: 'it-kaka'

}


const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 0,
                message: state.newPostText,
                likesCount: 1988
            }

            return  {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: '',
            }

        }

        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            }


        }
        default:
            return state
    }


}


export const addPostActionCreator = () => {

    return {
        type: ADD_POST
    }


}
export const updateNewPostTextActionCreator = (text) => {

    return {type: UPDATE_NEW_POST_TEXT, newText: text}
}


export default profileReducer