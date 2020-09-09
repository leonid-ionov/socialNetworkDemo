import React from 'react'
import { Field } from 'redux-form'
import { maxLengthCreator, required } from '../../../utils/validators/validators'
import { FormControl } from '../FormsControls/FormsControls'
import { Button, Form } from 'react-bootstrap'

const maxLength50 = maxLengthCreator(50),

    SendTextForm = (props) => {
        return (
            <Form onSubmit={props.handleSubmit}>
                <Form.Row sm={10}>
                <Field component={FormControl}
                       name={'textArea'}
                       as={'textarea'}
                       validate={[required, maxLength50]}
                       placeholder={props.placeholderText}/>
                </Form.Row>
                <Button variant="primary" size="sm" type={'submit'}>{props.btnText}</Button>
            </Form>
        )
    }

export default SendTextForm