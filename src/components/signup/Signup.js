import React, { Component } from 'react';
import axios from 'axios';
import SignupForm from './SignupForm'

import './SubmitSignup.css';

class Signup extends Component {

    state = {
        success: false
    }

    submit = values => {
        // print the form values to the console
        console.log(values);
        var that = this;

        // Send signup rest request	
        axios.post('https://api.audivity.com/user/signup', {
            email: values.email,
            password: values.password,
            phone: values.phone,
            company: values.company,
        })
            .then(function (response) {
                console.log(response);
                console.log('Signed Up Successfully')
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
            <main className="signup">
                <div className="bg pb-5 pt-5">
                    <div className="container">
                    <div className="mt-5 card w-580 mx-auto p-5">
                        <header className="text-center">
                        
                            {success ? <h1 className='mb-4'><i className="ion-checkmark-circled"> </i> &nbsp;<strong>Sign Up success!</strong> </h1>:<h1><i className="ion-clock"> </i>&nbsp;<strong>Sign Up</strong></h1>}

                            {success ? <p>You have successfully signed up!<br/><br/>You'll get an email asking for feedback once the first take is ready. </p>:<p>To get started with Audivity</p>}
                            
                        </header>
                        <section>
                        {!success ? <SignupForm onSubmit={this.submit} /> : null}
                        </section>
                    </div>
                    </div>
                </div>
            </main>
        );
    }
}

export default Signup;