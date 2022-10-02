import s from "./MyPosts.module.css"
import Post from './Post/Post'
import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";


const MyPosts = (props) => {


    let postsElements = props.posts.map(
        msg => <Post message={msg.message} likesCount={msg.likesCount}/>
    )


    let newPostElement = React.createRef()


    let onAddPost = () => {

        props.addPost ()
    }

    let onPostChange = () => {
        let text = newPostElement.current.value
        props.updateNewPostText(text);
    }

    return (<div className={s.postsBlock}>


            <h3>my posts</h3>


            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement}
                              value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>

                {postsElements}

                {/*<Post message={posts[0].message}  likesCount={posts[0].likesCount}/>*/}


                {/*            <Post/>
            <Post/>
            <Post/>
            <Post/>*/}


            </div>

        </div>
    )
}

export default MyPosts;