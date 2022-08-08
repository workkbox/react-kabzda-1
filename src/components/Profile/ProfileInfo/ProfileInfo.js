import s from "./ProfileInfo.module.css"


const ProfileInfo = () => {
    return <div>
        <div>
            <img
                src='https://www.boredpanda.com/blog/wp-content/uploads/2015/09/adventures-of-business-cat-comics-tom-fonder-fb.jpg'/>
        </div>

        <div className={s.descriptionBlock}>avatar+description</div>




    </div>

}

export default ProfileInfo;