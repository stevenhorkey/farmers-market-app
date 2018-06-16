import React, { Component } from 'react';
import CFooter from '../cfooter/CFooter';
import "./Homepage.css";

class Homepage extends Component {
    render() {

        return (
            <main className="homepage">
                <section className="jumbotron mb-0 bg-light">
                    <div className="container py-5">
                        <h1 className="display-5 text-shadow text-white mb-0">Hi, we are Audivity.</h1>



                        {/* <Typist avgTypingDelay={20} className="mb-0">
                            <h1 className="display-4 mt-4 mb-0 text-shadow text-white">
                                We convert your non-fiction content into high quality digital audio.
                            </h1>

                            <Typist.Delay ms={100} />
                            <Typist.Backspace count={68} delay={200} />
                            <h1 className="display-4 mt-4 mb-0 text-shadow text-white">
                                3 Hours -  all it takes to convert your written articles into high quality digital audio (podcast) that will be loved by your audience.
                            </h1>
                            <Typist.Backspace count={135} delay={200} />
                            <h1 className="display-4 mt-4 mb-0 text-shadow text-white">
                                We convert your non-fiction content into high quality digital audio.
                            </h1>
                        </Typist> */}



                        <h1 className="display-4 my-3 text-shadow text-white" id="typed">We convert your non-fiction content into high quality digital audio. </h1>

                        <div className="row h-100 mt-4 pl-4">
                            <form className="form-inline mt-3">
                                <div className="form-group mr-1">
                                    <input type="text" className="form-control px-4 pt-2  card-shadow" id="formGroupExampleInput" placeholder="Your email address." />
                                </div>
                                <button className="btn btn-primary px-4 pt-2 text-uppercase card-shadow">Subscribe&nbsp;<i className="ion-android-arrow-forward"> </i></button>

                            </form>
                        </div>
                    </div>
                </section>

                <section className="bg-light pb-4">
                    <div className="container py-5">


                        <header className="text-center w-720 mx-auto pt-4">
                            <h2 className="mb-4">Shipping in 2018</h2>
                            <p className="team-p mb-5">Calling all creators, makers and hackers. Sign up and be the first to know about partnerships, promotions and when Audivity is available.</p>




                        </header>



                        <form className="mx-auto w-440">

                            <div className="form-group mb-5 mt-4">
                                <label htmlFor="nameInput">Your <strong>name</strong>.</label>
                                <input type="text" className="bg-light form-control border-top-0 border-left-0 border-right-0" id="nameInput" placeholder="Jon Dough" />
                            </div>

                            <div className="form-group mb-5">
                                <label htmlFor="emailInput">Your <strong>email address</strong>.</label>
                                <input type="email" className="bg-light form-control border-top-0 border-left-0 border-right-0" id="emailInput" aria-describedby="emailHelp" placeholder="jon@dough.com" />
                            </div>

                            <div className="form-group mb-5">
                                <label htmlFor="aboutInput">Tell us about <strong>yourself</strong>.</label>

                                <select className="custom-select bg-light border-top-0 border-left-0 border-right-0" id="aboutInput">
                                    <option defaultValue>Choose...</option>
                                    <option value="1">Content Creator</option>
                                    <option value="2">Developer</option>
                                    <option value="3">Audio Specialist</option>
                                    <option value="3">Investor</option>
                                    <option value="3">Audivity Enthusiast</option>
                                </select>
                            </div>
                            <button type="submit" className="btn btn-primary text-uppercase px-3 pt-2">Stay Connected&nbsp;<i className="ion-android-arrow-forward"> </i></button>
                        </form>


                    </div>
                </section>

            </main>
        );
    }
}

export default Homepage;