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

            state.newMessageBody = action.body
            return state
        case SEND_MESSAGE:
            let body = state.newMessageBody
            state.newMessageBody = ''
            state.messages.push({id: 2, message: body})
            return state

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