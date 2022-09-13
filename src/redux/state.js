let store={
    _state : {

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
            ]

        }


    },
    getState(){

     return this._state
    },
    _callSubscriber (){

        console.log('huipizzda')

    },

    subscribe (observer) {

        this._callSubscriber=observer


    },

    dispatch (action) {
       if (action.type === 'ADD-POST'){

           let newPost = {
               id: 0,
               message: this._state.profilePage.newPostText,
               likesCount: 1988
           }

           this._state.profilePage.posts.push(newPost)
           this._state.profilePage.newPostText=''
           this._callSubscriber(this._state)

       } else if (action.type === 'UPDATE-NEW-POST-TEXT'){

           this._state.profilePage.newPostText = action.newText

           this._callSubscriber(this._state)

       }

    }




}

export default store
window.store=store