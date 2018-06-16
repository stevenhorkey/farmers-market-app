import React, { Component } from 'react';
import axios from 'axios';
import ContactForm from './ContactForm'

import "./Contact.css";

class Contact extends Component {

    state = {
        success: false
    }

    submit = values => {
        // print the form values to the console
        console.log(values);
        var that = this;

        //Send registre rest request	
        axios.post('http://api.audivity.com/user/contact_us', {
            email: values.email,
            name: values.name,
            message: values.message
        })
            .then(function (response) {
                console.log(response);
                //Request success
                that.setState({ success: true })

            })
            .catch(function (error) {
                console.log(error);
            });

    }

    render() {

        const { success } = this.state;

        return (
            <main className="contact">
                <div className="bg pb-5 pt-5">
                    <div className="container">
                        <div className="mt-5 card w-580 mx-auto p-5">
                            <header className="text-center">

                                {success ? <h1><i className="ion-checkmark-circled"> </i> &nbsp; Operation success! </h1> : <div><h1>Get Connected</h1> <p>Let us know what you're thinking. Feel free to reach out.</p></div>
                            }

                            </header>
                        
                            <section>
                                    {!success ? <ContactForm onSubmit={this.submit} /> : null}
                            </section>


                        </div>
                    </div>
                </div>
            </main>
        );
    }
}

export default Contact;
