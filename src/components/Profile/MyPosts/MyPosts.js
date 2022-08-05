import s from "./MyPosts.module.css"
import Post from './Post/Post'


const MyPosts = () => {
    return (<div>my posts
            <div>
                <textarea>   </textarea>
                <button>Add post</button>

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