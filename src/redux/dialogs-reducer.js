const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';


let initialState = {
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


const dialogsReducer = (state = initialState, action) => {





    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {...state, newMessageBody: action.body}


        case SEND_MESSAGE:
            let body = state.newMessageBody
            return {...state, newMessageBody:'', messages: [...state.messages, {id: 2, message: body}]}


        default:
            return state
    }
}


export const sendMessageCreator = () => {

    return {
        type: SEND_MESSAGE
    }


}
export const updateNewMessageBodyCreator = (body) => {

    return {type: UPDATE_NEW_MESSAGE_BODY, body: body}
}


export default dialogsReducer