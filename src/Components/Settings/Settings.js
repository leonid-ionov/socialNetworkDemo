import s from './Settings.module.css'
import React from 'react'
import Preloader from '../Common/Preloader/Preloader'
import NormalModeSettings from './NormalModeSettings'
import EditModeSettingsForm from './EditModeSettings'
import { Button } from 'react-bootstrap'

const Settings = ({profile, changeProfile, ...props}) => {
    if (!profile) {
        return <Preloader/>
    }
    return (
        <div style={{padding: 10}}>
            {!changeProfile ? <NormalModeSettings profile={profile} /> :
                <EditModeSettingsForm onSubmit={props.onSubmit} contacts={profile.contacts}
                                      photo={props.photo}
                                  handleChange={props.handleChange} initialValues={profile}
                                  haveAJob={props.haveAJob} contactValue={props.contactValue}/>}
            {!changeProfile &&
            <Button size={'lg'} variant="primary" onClick={props.changeProfileOn}>Change profile</Button>}
        </div>
    )
}
export default Settings