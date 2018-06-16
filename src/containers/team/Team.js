import React, { Component } from 'react';
import "./Team.css";
import { connect } from 'react-redux';


class Team extends Component {
    renderList() {
        return this.props.teamMembers.map((member) => {
            return (
                <div key={member.id} className="card w-400 mx-auto py-4 mb-3">
                    <div className="row">
                        <div className="col-4 pr-4 pl-5 text-center">
                            <img src={member.image} alt="" className="w-100 rounded-circle border" />
                        </div>
                        <div className="col-8 pt-3">
                            <h3>{member.name}</h3>
                            <p className="member-cap mb-0">{member.bio}</p>
                        </div>
                    </div>
                </div>
            );
        })
    }

    render() {
        return (
            <main className="team">
                <header className="jumbotron text-center mb-0">
                    <h1 className="display-4 text-white text-shadow mb-4">From Creators to Creators</h1>
                    <p className="lead text-white text-shadow w-720 mx-auto">Our team has set out to build new tools to give human voice to written content. We take care of the hard stuff and let the creatives focus on content. We voice your stories and bring new ears.</p>
                </header>



                <section className="members bg-light">
                    <div className="container py-5">

                        <header className="text-center w-720 mx-auto pt-4">
                            <h2 className="mb-4">We are a company of passionate audio listeners.</h2>
                            <p className="team-p mb-5">We know that good things come to those who listen. Good stories and awesome content deserve a voice. We believe that you should have a choice to read or to listen to your favorite content.</p>
                        </header>

                        {
                            // this.renderList()
                        }

                    </div>
                </section>

                <section className='bg-white'>
                    <div className="container py-5">
                        <div className="w-720 mx-auto py-5">
                            <h1 className="text-primary future-h1">The future starts today.</h1>
                            <p className="mt-4 future-p mb-0">
                                Today we automate conversion of written content into digital audio. Tomorrow we leverage AI voice reconstruction to make things simpler. The day after we automate video production.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="bg-light py-5">
                    <div className="container pt-5">
                        <h1 className="text-center text-primary future-h1 mb-5">Philosophy</h1>

                        <div className="row">

                            <div className="col-lg-6 mb-3">
                                <div className="card w-100 mb-3">
                                    <div className="p-4 border border-top-0 border-left-0 border-right-0">
                                        <div className="image-1">
                                        </div>
                                    </div>
                                    <div className="px-4 py-3">
                                        <p className="team-p mb-0">We build Audivity on questions using the Ask method.</p>
                                    </div>
                                </div>
                            </div>


                            <div className="col-lg-6 mb-3">
                                <div className="card w-100 mb-3">
                                    <div className="p-4 border border-top-0 border-left-0 border-right-0">
                                        <div className="image-2">
                                        </div>
                                    </div>
                                    <div className="px-4 py-3">
                                        <p className="team-p mb-0">We put consumer experience at the core of what we do. We are introducing big change in content creation because we believe in Change by Design</p>
                                    </div>
                                </div>
                            </div>

                            
                            <div className="col-lg-6 mb-4">
                                <div className="card w-100 mb-3">
                                    <div className="p-4 border border-top-0 border-left-0 border-right-0">
                                        <div className="image-3">
                                        </div>
                                    </div>
                                    <div className="px-4 py-3">
                                        <p className="team-p mb-0">We don’t overwhelm users with features, we simplify using lean startup methodology</p>
                                    </div>
                                </div>
                            </div>

                            
                            <div className="col-lg-6 mb-4">
                                <div className="card w-100 mb-3">
                                    <div className="p-4 border border-top-0 border-left-0 border-right-0">
                                        <div className="image-4">
                                        </div>
                                    </div>
                                    <div className="px-4 py-3">
                                        <p className="team-p mb-0">We don’t compete, we ReWork 
</p>
                                    </div>
                                </div>
                            </div>




                        </div>

                    </div>
                </section>

            </main>
        );
    }
}

function mapStateToProps(state) {
    return {
        teamMembers: state.teamMembers,
    };
}

export default connect(mapStateToProps)(Team);