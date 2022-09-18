const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let store = {
    _state: {

        profilePage: {
            posts: [
                {id: 0, message: 'Privetik', likesCount: 1},
                {id: 1, message: 'govNo', likesCount: 228}
            ],
            newPostText: 'it-kaka'

        },

        dialogsPage: {
            dialogs: [
                {id: 0, name: 'Petya'},
                {id: 1, name: 'Elisey'}
            ],

            messages: [
                {id: 0, message: 'Privet'},
                {id: 1, message: 'Kak dela?'}
            ],
            newMessageBody: ''

        }


    },
    getState() {

        return this._state
    },
    _callSubscriber() {

        console.log('huipizzda')

    },

    subscribe(observer) {

        this._callSubscriber = observer


    },

    dispatch(action) {
        if (action.type === 'ADD-POST') {

            let newPost = {
                id: 0,
                message: this._state.profilePage.newPostText,
                likesCount: 1988
            }

            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ''
            this._callSubscriber(this._state)

        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {

            this._state.profilePage.newPostText = action.newText

            this._callSubscriber(this._state)


        } else if (action.type === 'UPDATE_NEW_MESSAGE_BODY') {
            this._state.dialogsPage.newMessageBody = action.body
            this._callSubscriber(this._state)
        }else if (action.type === 'SEND_MESSAGE') {
            let body=this._state.dialogsPage.newMessageBody
            this._state.dialogsPage.newMessageBody=''
            this._state.dialogsPage.messages.push({id: 2, message: body})
            this._callSubscriber(this._state)

        }


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


export const sendMessageCreator = () => {

    return {
        type: SEND_MESSAGE
    }


}
export const updateNewMessageBodyCreator = (body) => {

    return {type: UPDATE_NEW_MESSAGE_BODY, body: body}
}


export default store
window.store = store