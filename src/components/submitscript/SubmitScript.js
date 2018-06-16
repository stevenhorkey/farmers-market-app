import React, { Component } from 'react';
import axios from 'axios';
import ScriptForm from './ScriptForm'
import $ from "jquery";

import "./SubmitScript.css";

class SubmitScript extends Component {

    state = {
        success: false
    }

    submit = values => {
        // print the form values to the console
        console.log(values);
        var that = this;
        // alert('In Progress');

        let message = "New Scripts Submitted\n\nURL: "+values.url+"\n\nTitle: "+values.title+"\n\nIntro Script: "+values.introScript+"\n\nMain Script: "+values.mainScript+"\n\nOutro Script: "+values.outroScript+"\n\nNotes: "+values.scriptNotes;

        //Send script rest request	
        // axios.post('https://api.audivity.com/user/submit_scripts', {
        //     // key: this.props.match.params.ReqID,
        //     // url: values.url,
        //     // title: values.title,
        //     // introScript: values.introScript,
        //     // mainScript: values.mainScript,
        //     // outroScript: values.outroScript,
        //     // scriptNotes: values.scriptNotes
        //     'text': message
        // })
        $.ajax({
            // web hook to send to private slack channel 'script--submissions'
            url: "https://hooks.slack.com/services/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",
            data: '{"text": "'+message+'"}',
            type: "POST",
        })
            .then(function (response) {
                console.log(response);
                console.log('Posted to Slack!')
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
            <main className="SubmitScript">
                <div className="bg pb-5 pt-5">
                    <div className="container">
                    <div className="mt-5 card w-700 mx-auto p-5">
                        <header className="text-center">
                        
                            
                            {success ? <h1 className='mb-4'><i className="ion-checkmark-circled"> </i> &nbsp;<strong>Scripting success!</strong> </h1>:<h1><i className="ion-clock"> </i>&nbsp;<strong>Let's get Rollin'</strong></h1>}

                            {success ? <p> Cool beans, the rest of the audio-storytelling is on us. Grab a cup of coffee while we work tirelessly to make sure you get a flawless audio experience.<br/><br/>You'll get an email asking for feedback once the first take is ready. </p>:<p>Ready to bring your new digital audio to life? Submit your article link, preferred podcast title, final script, and style preferences.</p>}
                            
                        </header>
                        <section>
                        {!success ? <ScriptForm onSubmit={this.submit} /> : null}
                            
                        </section>


                    </div>
                    </div>
                </div>
            </main>
        );
    }
}

export default SubmitScript;