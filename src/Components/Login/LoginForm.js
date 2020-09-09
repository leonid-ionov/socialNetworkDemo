import React from 'react'
import s from '../Common/FormsControls/FormControls.module.css'
import {  Badge, Button, Col, Form, Image, InputGroup } from 'react-bootstrap'
import * as yup from 'yup'
import { Field, Formik } from 'formik'

const LoginForm = ({captchaImg, onSubmit}) => {
    const schema = yup.object({
        email: yup.string().email().required('E-mail is a required field'),
        password: yup.string()
            .required('Password is a required field'),
        captcha: yup.mixed().withMutation(
            (schema) => captchaImg !== null ?
                schema.required('Enter symbols from captcha') : schema.default()
        )
    })
    return (
        <Formik initialValues={{rememberMe: false}}
                onSubmit={async (values, {setStatus}) => {
                    try {
                        await onSubmit(values)
                    } catch (error) {
                        setStatus(error)
                    }
                }}

                validationSchema={schema}>
            {({handleSubmit, errors, isSubmitting, status}) => (
                <Form noValidate onSubmit={handleSubmit}>
                    <Form.Group as={Col} md={6}>
                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text>E-mail</InputGroup.Text>
                            </InputGroup.Prepend>
                            <Form.Control as={Field}
                                          type="text"
                                          name="email"
                                          placeholder={'Enter you\'r e-mail'}
                                          isInvalid={!!errors.email}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.email}
                            </Form.Control.Feedback>
                        </InputGroup>

                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text> Password </InputGroup.Text>
                            </InputGroup.Prepend>
                            <Form.Control as={Field}
                                          type={'password'}
                                          name={'password'}
                                          placeholder={'Enter you\'r password'}
                                          isInvalid={errors.password}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.password}
                            </Form.Control.Feedback>
                        </InputGroup>
                        <Form.Group className="mb-3">
                            <Form.Check as={Field}
                                        type={'checkbox'}
                                        label={'Remember Me'}
                                        name={'rememberMe'}/>
                        </Form.Group>
                        {captchaImg &&
                        <Form.Group>
                            <Image src={captchaImg} className="mb-3"/>
                            <Form.Control as={Field}
                                          placeholder={'Enter symbols from captcha'}
                                          name={'captcha'}
                                          isInvalid={errors.captcha}
                            />
                            <Form.Control.Feedback type={'invalid'}>
                                {errors.captcha}
                            </Form.Control.Feedback>
                        </Form.Group>}
                        {!!status && <h4><Badge variant="warning">{status.message}</Badge></h4>}
                    </Form.Group>
                    <div>
                        <Button type="submit" disabled={isSubmitting}>Log-in</Button>
                    </div>
                </Form>
            )}
        </Formik>
    )
}
export default LoginForm