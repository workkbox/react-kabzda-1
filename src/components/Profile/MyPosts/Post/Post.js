import s from './Post.module.css';

const Post = () => {
    return (
        <div className={s.item}>
            <img src='https://avatarko.ru/img/avatar/20/zhivotnye_igra_sobaka_19261.jpg' />
            post 1
            <div>
                <span>like</span>
            </div>
        </div>
    )

}

export default Post;