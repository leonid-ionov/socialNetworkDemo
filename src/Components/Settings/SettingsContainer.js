import React, { useEffect, useState } from 'react'
import Settings from './Settings'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import { formValueSelector} from 'redux-form'
import { getUserProfile, putProfileSettings, uploadPhoto } from '../../Redux/profileReducer'
import { getUserProfileFromState } from '../../Redux/ProfileSelector'
import { getAuthUserID } from '../../Redux/authSelectors'

const selector = formValueSelector('settings'),
    mapStateToProps = (state) => {
        const haveAJob = selector(state, 'lookingForAJob'),
            contactValue = selector(state, 'selectContact')
        return {
            haveAJob,
            contactValue,
            profile: getUserProfileFromState(state),
            userID: getAuthUserID(state)
        }
    },
    AC = {putProfileSettings, uploadPhoto, getUserProfile},

    SettingsContainer = (props) => {
        const [changeProfile, setChangeProfile] = useState(false),
            [photo, setPhoto] = useState(null),
            onSubmit = (form) => {
                props.putProfileSettings(form).then(() => {
                    if (photo) {
                        props.uploadPhoto(photo)
                    }
                    setChangeProfile(false)
                })
            },
            changeProfileOn = () => {
                setChangeProfile(true)
            },
            handleChange = (event) => {
                setPhoto(event.target.files[0])
            }
        useEffect(() => {
            props.getUserProfile(props.userID)
        }, [props.userID])
        return (
            <Settings {...props}
                photo={photo}
                               haveAJob={props.haveAJob}
                               contactValue={props.contactValue}
                               changeProfileOn={changeProfileOn}
                               onSubmit={onSubmit}
                               handleChange={handleChange}
                               changeProfile={changeProfile}/>
        )
    }

export default compose(
    connect(mapStateToProps, AC),
    withAuthRedirect
)(SettingsContainer)