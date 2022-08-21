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

        alert(text)

    }


    return (<div className={s.postsBlock}>


            <h3>my posts</h3>


            <div>
                <div>
                    <textarea ref={newPostElement}>   </textarea>
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