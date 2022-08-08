import s from "./MyPosts.module.css"
import Post from './Post/Post'


const MyPosts = () => {

    let postsData = [
        {id:0, message:'Privetik', likesCount: 1},
        {id:1, message:'govNo'}

    ]

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


                <Post message={postsData[0].message}  likesCount={postsData[0].likesCount}/>


                {/*            <Post/>
            <Post/>
            <Post/>
            <Post/>*/}


            </div>

        </div>
    )
}

export default MyPosts;