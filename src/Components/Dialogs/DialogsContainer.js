import React from 'react'
import { addMessage} from '../../Redux/dialogsReducer'
import Dialogs from './Dialogs'
import { connect } from 'react-redux'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import { compose } from 'redux'

const mapStateToProps = (state) => {
        return {
            dialogs: state.dialogsPage.dialogs,
            messages: state.dialogsPage.messages
        }
    },

    AC = {addMessage}

export default compose(
    connect(mapStateToProps, AC),
    withAuthRedirect
)(Dialogs)