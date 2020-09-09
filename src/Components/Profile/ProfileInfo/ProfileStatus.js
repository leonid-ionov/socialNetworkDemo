import React, { useEffect, useState } from 'react'
import ProfileStatusReduxForm from './ProfileStatusForm'

const ProfileStatus = ({status, ...props}) => {
    let [editMode, setEditMode] = useState(false)

    const activateEditMode = () => {
            setEditMode(true)
        },
        onSubmit = (status) => {
            props.updateUserStatus(status.currentTarget.value)
            setEditMode(false)
        }

    return (
        <div>
            {!editMode && <div>
                <span onDoubleClick={activateEditMode}>{status || 'Введите статус'}</span>
            </div>
            }
            {editMode && <ProfileStatusReduxForm onSubmit={onSubmit}
                                                 initialValues={{status: status}}/>
            }
        </div>
    )
}

export default ProfileStatus