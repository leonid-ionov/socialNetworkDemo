import React from 'react'
import s from './ProfileInfo.module.css'
import Preloader from '../../Common/Preloader/Preloader'
import avatarSmall from './../../../assets/images/avatarSmall.jpg'
import Contacts from './Contacts/Contacts'
import ProfileStatus from './ProfileStatus'

const ProfileInfo = ({profile,status,updateUserStatus}) => {
    if (!profile) {
        return <Preloader/>
    }
    return (
        <div className={s.profile}>
            <span className={s.avatarPhoto}>
                <img src={profile.photos.large ? profile.photos.large : avatarSmall}/>
            </span>
            <span className={s.profileInfo}>
                    <div className={s.profileName}>{profile.fullName}</div>
                <div className={s.profileAboutMe}>
                    <ProfileStatus status={status} updateUserStatus={updateUserStatus}/>
                </div>
                    <div className={s.profileAboutMe}>
                        {profile.aboutMe ?
                            'О себе: ' + profile.aboutMe :
                            'О себе ничего сказать не могу'}
                    </div>
                    <div className={s.profileLookingForAJob}>
                        {profile.lookingForAJob ?
                            `Я ищу работу: ${profile.lookingForAJobDescription}` :
                            'Я не ищу работу'}
                    </div>
                    <div> {'Контакты: '}
                        <Contacts contacts={profile.contacts} links={true}/>
                    </div>
                </span>
        </div>
    )
}

export default ProfileInfo