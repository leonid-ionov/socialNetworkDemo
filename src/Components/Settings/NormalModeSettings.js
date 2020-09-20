import s from './Settings.module.css'
import React from 'react'
import Contacts from './../Profile/ProfileInfo/Contacts/Contacts'
import { Col, Container, Image, Row } from 'react-bootstrap'
import avatarSmall from './../../assets/images/avatarSmall.jpg'

const NormalModeSettings = ({profile}) => {
    return (
        <Container>
            <Row>
                <Col sm={2}>Full name :</Col>
                <Col sm={6}>{profile.fullName}</Col>
            </Row>
            <Row>
                <Col sm={2}>Avatar :</Col>
                <Col sm={6}>
                    <Image src={profile.photos.small ? profile.photos.small : avatarSmall} rounded />
                </Col>
            </Row>
            <Row>
                <Col sm={2}>About me :</Col>
                <Col sm={6}>{profile.aboutMe}</Col>
            </Row>
            <Row>
                <Col sm={2}>Contacts :</Col>
                <Col sm={6}>
                    <Contacts contacts={profile.contacts} links={false}/>
                </Col>
            </Row>
{/*            <span>
                <h5>Contacts:</h5>
                <ul><Contacts contacts={profile.contacts} links={false}/></ul>
            </span>*/}
            <Row>
                <Col sm={2}>Looking for a job :</Col>
                {!profile.lookingForAJob ? <Col sm={6}>don't looking</Col> :
                    <Col sm={6}>{profile.lookingForAJobDescription}</Col>}
            </Row>
        </Container>
    )
}
export default NormalModeSettings