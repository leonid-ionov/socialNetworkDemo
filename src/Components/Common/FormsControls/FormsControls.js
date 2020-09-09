import React from 'react'
import s from './FormControls.module.css'
import { Form } from 'react-bootstrap'

export const FormControl = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error
    return (
            <Form.Group>
                <Form.Label>{props.label}</Form.Label>
                <Form.Control isInvalid={hasError}
                              type={props.typeField}
                              placeholder={props.placeholder}
                              {...input } {...props}/>
                <Form.Control.Feedback type="invalid">
                    {meta.error}
                </Form.Control.Feedback>
            </Form.Group>
    )
}