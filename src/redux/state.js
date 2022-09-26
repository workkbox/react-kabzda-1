import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

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

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)


        this._callSubscriber(this._state)

    }




}





export default store
window.store = store