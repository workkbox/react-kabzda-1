import {prettyFormat} from "@testing-library/react";
import {rerenderEntireTree} from "../render";

let state = {

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


}


export let addPost = () => {

    let newPost = {
        id: 0,
        message: state.profilePage.newPostText,
        likesCount: 1988
    }

    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText=''
    rerenderEntireTree(state)
}

export let updateNewPostText = (newText) => {

    state.profilePage.newPostText = newText

    rerenderEntireTree(state)
}

export default state