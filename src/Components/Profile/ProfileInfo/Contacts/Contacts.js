import React from 'react'
import s from './Contacts.module.css'

const Contacts = ({contacts, option, links}) => {
    const contactsArr = Object.keys(contacts).map(key => {
            if (option) {
                return <option>{key}</option>
            } else if (contacts[key]) {
                return (
                    <div>
                        <h6>{key}:</h6>
                        {
                            links ?
                                <div><a href={'https://' + contacts[key]}>{`${contacts[key]}`}</a></div> :
                                <div>{`${contacts[key]}`}</div>
                        }
                    </div>
                )
            }
        }
    )
    if (contactsArr[0] === null) {
        return <div>Нет контактов</div>
    } else if (option) {
        return contactsArr
    }
    return <div className={s.contacts}>
        <base target="_blank"/>
        {contactsArr}
    </div>
}

export default Contacts