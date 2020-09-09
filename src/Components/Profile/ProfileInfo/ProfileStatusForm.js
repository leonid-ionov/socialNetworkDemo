import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { FormControl } from '../../Common/FormsControls/FormsControls'

const ProfileSttusForm = (handleSubmit) => {
        return (
            <form>
                <Field component={FormControl}
                       typeField={'input'}
                       name={'status'}
                       placeholder={'Введите статус'}
                       autoFocus
                       onBlur={handleSubmit.onSubmit}/>
            </form>
        )
    },
    ProfileStatusReduxForm = reduxForm({form: 'status'})(ProfileSttusForm)
export default ProfileStatusReduxForm