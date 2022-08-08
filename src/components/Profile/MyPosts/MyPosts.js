import s from "./MyPosts.module.css"
import Post from './Post/Post'


const MyPosts = () => {
    return (<div className={s.postsBlock}>my posts
            <div>
                <div>
                    <textarea>   </textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>


                <Post message="fk u baby"/>
                <Post message="fk u baby" kolich="5"/>
                {/*            <Post/>
            <Post/>
            <Post/>
            <Post/>*/}


            </div>

        </div>
    )
}

export default MyPosts;