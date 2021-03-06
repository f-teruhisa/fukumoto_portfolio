import firebase from 'firebase';
import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'

import {firebaseConfig} from 'firebase';

firebase.initializeApp(firebaseConfig);

class ContactForm extends Component {
    constructor(){
        super()
        this.onSubmit = this.onSubmit.bind(this)
    }

    onSubmit(e){
        e.preventDefault()
        let data = {}
        data.name = e.target.name.value
        data.email = e.target.email.value
        data.content = e.target.content.value
        let sendMail = firebase.functions().httpsCallable('sendMail');
        sendMail(data)
        e.target.name.value = ""
        e.target.email.value = ""
        e.target.content.value = ""
        e.target.value = ""
    }

    render() {
        const textFieldStyle = {
            display: "flex",
            width: "100%",
            margin: "20px",
        }

        const contactForm = {
            display: "flex",
            flexDirection: "column",
            alignItems: "left",
            margin: "20px",
        }


        return (
            <React.Fragment>
            <h2>Contact</h2>
                <div style={contactForm}>
                    <form onSubmit={this.onSubmit}>
                        <TextField name="name" label="Name" type="text" required style={textFieldStyle}  />
                        <TextField name="email" label="Email" type="mail" required style={textFieldStyle}   />
                        <TextField
                            required
                            name="content"
                            label="Contents..."
                            multiline
                            rows="8"
                            margin="normal"
                            variant="outlined"
                            style={textFieldStyle}
                        />
                        <Button variant="contained" color="primary" type="submit" style={textFieldStyle} >
                            Submit
                        </Button>
                    </form>
                </div>
            </React.Fragment>
        )
    }
}

export default ContactForm
