import s from "./MyPosts.module.css"
import Post from './Post/Post'
import React from "react";


const MyPosts = (props) => {


    let postsElements = props.posts.map(
        msg => <Post message={msg.message} likesCount={msg.likesCount}/>
    )


    let newPostElement = React.createRef()


    let addPost = () => {

        let text=newPostElement.current.value

        //props.addPost (text)
        props.dispatch ({type:'ADD-POST'})


        //props.updateNewPostText(''); perenes v state
    }
let onPostChange =()=>{
    let text=newPostElement.current.value
    let action = {type: 'UPDATE-NEW-POST-TEXT', newText: text};
    props.dispatch (action)
    //props.updateNewPostText(text);
}

    return (<div className={s.postsBlock}>


            <h3>my posts</h3>


            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement}
                              value={props.newPostText} />
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
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