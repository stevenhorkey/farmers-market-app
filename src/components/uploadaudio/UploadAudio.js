import React, { Component } from 'react';
import axios from 'axios';

import "./UploadAudio.css";

class UploadAudio extends Component {

    constructor(props) {
        super(props);

        //Init state
        this.state = {
            requrl_loaded: false,
            uploaded: false
        }

        var that = this;

        console.log(this.props.match.params.ReqID);
        // Get related ReqUrl
        axios.get('http://api.audivity.com/user/get?rkey=' + that.props.match.params.ReqID)
            .then(function (response) {
                //success response
                that.ReqUrl = response.data.ReqUrl;
                console.log(that.ReqUrl);

                that.setState({ requrl_loaded: true, uploaded: false })

            })
            .catch(function (error) {
                console.log(error);
            });

    }

    upload = values => {
        var that = this;

        //Init data
        let data = new FormData();

        //Init file
        let file = document.getElementById('audio-uploader').files[0];
        data.append('file', file, file.name);

        //Init header
        const config = {
            headers: { 'content-type': 'multipart/form-data' }
        }

        //Get freelancer's name, audio title & audio description
        let name = document.getElementById('freelancer-name').value;
        // let title = document.getElementById('audio-title').value;
        // let description = document.getElementById('audio-description').value;

        //Append params
        data.append("key", this.props.match.params.ReqID);
        data.append("name", name);
        // data.append("title", title);
        // data.append("description", description);

        // Send registre rest request	
        axios.post('http://api.audivity.com/audio/upload', data, config)
            .then(function (response) {
                console.log(response);
                //Request success
                that.setState({ uploaded: true })

            })
            .catch(function (error) {
                console.log(error);
            });

    }

    render() {
        const { requrl_loaded, uploaded } = this.state;

        return (
            <main className="UploadAudio">
                <div className="bg pb-5 pt-5">
                    <div className="container">
                        <div className="mt-5 card w-580 mx-auto p-5">
                            <header className="text-center">
                                {uploaded ? <h1><i className="ion-checkmark-circled"> </i> &nbsp; Upload success! </h1> : <h1><i className="ion-upload"> </i> &nbsp;Upload your Audition</h1>}

                                {uploaded ? <p className="text-center"> Thank you! We will contact you if we wish to proceed. </p> : null}
                                {this.ReqUrl && !uploaded ? <p>Your goal is to convey this <a href={this.ReqUrl.url}target="_blank">specific article</a> in an engaging and informative way. Podcasting is an art so take it from here and feel free to find your own pace, tone. Do change article structure as you see fit so listeners digest the message and come back for more</p> : null}

                            </header>
                            {this.ReqUrl && !uploaded ? <section>

                                {/* Applicant's name */}
                                <div className="form-group mb-5 mt-4">
                                    <label htmlFor="nameInput">Your <strong>name.</strong></label>
                                    <input type="text" className="form-control border-top-0 border-left-0 border-right-0" id="freelancer-name" placeholder="Jon Dough" />
                                </div>

                                {/* Audio title */}
                                {/* <div className="form-group mb-5 mt-4">
                                    <label htmlFor="nameInput">Audio title</label>
                                    <input type="text" className="form-control border-top-0 border-left-0 border-right-0" id="audio-title" placeholder="Jon Dough Podcast" />
                                </div>

                                {/* Audio Description */}
                                {/* <div className="form-group mb-5 mt-4">
                                    <label htmlFor="nameInput">Audio Description</label>
                                    <textarea type="text" className="form-control border-top-0 border-left-0 border-right-0" id="audio-description" placeholder="VAPOR PRESSURE DEFICIT"></textarea>
                                </div> */}

                                <input id="audio-uploader" type="file" name="file" />
                                <div className="info">Choose file (mp3 only) </div>

                                <button type="submit" className="btn btn-primary text-uppercase px-3 pt-2" onClick={this.upload}>Send &nbsp;<i className="ion-android-arrow-forward"> </i></button>

                            </section>:null
                            }
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}

export default UploadAudio;
