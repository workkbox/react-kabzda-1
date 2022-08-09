import s from "./MyPosts.module.css"
import Post from './Post/Post'


const MyPosts = () => {

    let posts = [
        {id:0, message:'Privetik', likesCount: 1},
        {id:1, message:'govNo'}

    ]

    let postsElements=posts.map(
        msg=><Post message={msg.message} likesCount={msg.likesCount}/>
    )




    return (<div className={s.postsBlock}>


            <h3>my posts</h3>


            <div>
                <div>
                    <textarea>   </textarea>
                </div>
                <div>
                    <button>Add post</button>
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