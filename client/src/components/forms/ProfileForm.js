import React from 'react';
import axios from 'axios';

import EditPassword from '../modals/EditPassword';

class ProfileForm extends React.Component{

    state = {
        profileImage: this.props.user.profileImage,
        email: this.props.user.email,
        businessName: this.props.user.businessName,
        bio: this.props.user.bio,
        password: '',
        pwdMessage: ''
    }

    componentDidMount(){
        console.log(this.props.user);
    }

    prevent(event){
        event.preventDefault();
    }

    handleChange = event => {
        const name = event.target.name;
        const value = event.target.value;
    
        this.setState({[name]:value});
    };

    updateUser = (event) => {
        event.preventDefault();

        const { businessName, bio, email, userType, profileImage } = this.state;

        axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');

        axios.put('/api/updateUser/'+this.props.user.id, {businessName, bio, email, userType, profileImage })
            .then((res) => {
                console.log(res.data.message);
                window.location.reload();
            }).catch((err) => {
                console.log(err);
            })
    }

    checkPwd(str) {
        if (str.length < 6) {
            return false;
        } else if (str.length > 50) {
            return false;
        } else if (str.search(/\d/) == -1) {
            return false
        } else if (str.search(/[a-zA-Z]/) == -1) {
            return false
        } else if (str.search(/[^a-zA-Z0-9\!\@\#\$\%\^\&\*\(\)\_\+]/) != -1) {
            return false
        } else{
            return true
        }
    }

    updatePassword = (event) => {

        event.preventDefault();

        console.log(this.state.password);

        if (this.checkPwd(this.state.password)){
            this.setState({
                pwdMsg: ''
            }) 
        axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');

        axios.put('/api/updatePassword/'+this.props.user.id, {
            password: this.state.password
        })
            .then((res) => {
                console.log(res.data.message);
                window.location.reload();
                
            }).catch((err) => {
                console.log(err);
            })
        } else {
            console.log('bob')
        }
    }

    render(){
        return(

            <React.Fragment>
                <div className='card p-3'>
                    <form className=''>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                            <label htmlFor="inputEmail4">Email</label>
                            <input type="email" className="form-control" name="email" onChange={this.handleChange} value={this.state.email}/>
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="inputPassword" className='d-block'>Password</label>
                                <button onClick={this.prevent} className='btn btn-primary w-100' data-toggle="modal" data-target="#editPasswordModal">Update My Password</button>
                                {/* <input type="password" className="form-control" name="inputPassword" placeholder="Password" value={this.props.user.password}/> */}
                            </div>
                        </div>
                        <div className='form-row'>
                            <div className="form-group col-md-6">
                                <label htmlFor="inputBusiness">Business Name</label>
                                <input type="text" className="form-control" name="businessName" onChange={this.handleChange} value={this.state.businessName}/>
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="inputImage">Profile Image</label>
                                <input type="text" className="form-control" name="profileImage" onChange={this.handleChange} value={this.state.profileImage}/>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col">
                                <label htmlFor="inputBio">Bio Information</label>
                                <textarea type="text" className="form-control" name="bio" onChange={this.handleChange} value={this.state.bio}></textarea>
                            </div>
                        </div>
                        <button onClick={this.updateUser} type="submit" className="btn btn-danger w-100">Update Profile</button>
                    </form>
                </div>
                <EditPassword
                handleChange={this.handleChange}
                password={this.state.password}
                updatePassword={this.updatePassword}
                />
            </React.Fragment>
        )
    }
}

export default ProfileForm;