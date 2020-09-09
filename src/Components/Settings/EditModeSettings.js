import s from './Settings.module.css'
import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { FormControl } from '../Common/FormsControls/FormsControls'
import Contacts from '../Profile/ProfileInfo/Contacts/Contacts'
import { Button, Col, Form, Row } from 'react-bootstrap'

const EditModeSettings = ({profile, handleSubmit, error, ...props}) => {

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group as={Row}>
                <Form.Label column sm="2">Full name</Form.Label>
                <Col sm="6">
                    <Field component={FormControl}
                           typeField={'input'}
                           label={'Enter your full name'}
                           name={'fullName'}
                           placeholder={'My full name'}/>
                </Col>
            </Form.Group>
            <Form.Group as={Row}>
                <Form.Label column sm="2">Avatar</Form.Label>
                <Col sm="6">
                    <Form.File accept="image/*"
                               id={'avatar'}
                               label="Select your avatar"
                               onChange={(event) => props.handleChange(event)}/>
                </Col>
            </Form.Group>
            <Form.Group as={Row}>
                <Form.Label column sm="2">About me</Form.Label>
                <Col sm="6">
                    <Field component={FormControl}
                           label={'Write something about yourself'}
                           typeField={'textarea'}
                           name={'aboutMe'}
                           placeholder={'Just my story...'}/>
                </Col>
            </Form.Group>
            <Form.Group as={Row}>
                <Col sm="4">
                    <Field name={'selectContact'}
                           component={FormControl}
                           label={'Choose your contact'}
                           as={'select'}>
                        <option></option>
                        <Contacts contacts={props.contacts} option={true}/>
                    </Field>
                </Col>
                <Col sm={4}>
                    {
                        props.contactValue &&
                        <Field component={FormControl}
                               typeField={'input'}
                               autoFocus
                               label={'Enter link'}
                               name={`contacts.${props.contactValue}`}/>
                    }
                </Col>
            </Form.Group>
            <Form.Group as={Row}>
                <Col sm="3">
                    <Form.Check as={Field}
                                inline
                                component={FormControl}
                                type={'checkbox'}
                                label={'I\'m looking a job'}
                                name={'lookingForAJob'}/>
                </Col>
                <Col sm={5}>
                    {
                        props.haveAJob &&
                        <Field component={FormControl}
                               typeField={'input'}
                               label={'What kind of job?'}
                               name={'lookingForAJobDescription'}/>
                    }
                </Col>
            </Form.Group>
            {error &&
            <div>{error}</div>}
            <div>
                <Button variant="primary" type={'submit'} disabled={props.submitting}>Save changes</Button>
            </div>
        </Form>
    )
}

const EditModeSettingsForm = reduxForm({form: 'settings', enableReinitialize: true})(EditModeSettings)

export default EditModeSettingsForm