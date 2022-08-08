import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src='https://avatarko.ru/img/avatar/20/zhivotnye_igra_sobaka_19261.jpg' />
            {props.message}

            <div>
                <span>like {props.likesCount}</span>
            </div>
        </div>
    )

}

export default Post;