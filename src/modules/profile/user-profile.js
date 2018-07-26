import React from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { updateUserProfile, clearProfileUpdateError } from './profile-actions';

class UserProfile extends React.Component{
    static icon = "user";
    static label = "User Profile";
    
    constructor(props){
        super(props);
        
        this.updateUserProfile = this.updateUserProfile.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this);
        this.dismissError = this.dismissError.bind(this);
        
        this.state = {
            username: this.props.userDetails.username,
            first_name: this.props.userDetails.first_name,
            last_name: this.props.userDetails.last_name,
            other_names: this.props.userDetails.other_names,
            job_tilte: this.props.userDetails.job_title,
            phone_number: this.props.userDetails.phone_number,
            password: this.props.userDetails.username,
            token: this.props.userDetails.token
        };
        
        
    }
    
    handleInputChange(event){
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            name: value
        });
    }
    
    updateUserProfile(event){
        event.preventDefault();
        
        this.props.dispatch(updateUserProfile(this.state));
    }
    
    dismissError(){
        this.props.dispatch(clearProfileUpdateError());
    }
    
    render(){
        return (
        <div>
            <h3><FontAwesomeIcon icon={UserProfile.icon}/> Profile</h3>

            {this.props.updating === false ? "" : 
                <div className="pb-1">
                    <div className="progress">
                      <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{width: 100 +'%'}}>Updating...</div>
                    </div>
                </div>
            }
            
            {this.props.updateError == null ? "" : 
                    <div className="alert alert-danger" role="alert">
                        {this.props.updateError}
                        <button type="button" className="close"  aria-label="Close" onClick={this.dismissError}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
            }
            
            <div className="card">
                <div className="card-body p-3">
                
            <form onSubmit={this.updateUserProfile}>
            


            
                <div className="form-group row">
                    <label htmlFor="profileInputEmail1" className="col-sm-2 col-form-label">Email address</label>
                    <div className="col-sm-6">
                      <input type="text" readOnly className="form-control-plaintext form-control-sm" id="staticEmail" value={this.state.username}/>
                      <small id="emailHelp" className="form-text text-muted">Ask admin to change your email.</small>
                    </div>
                </div>
              
              <div className="form-group row">
                <label htmlFor="profileInputFirstName" className="col-sm-2 col-form-label">First name</label>
                <div className="col-sm-6">
                    <input type="text" name="first_name" onChange={this.handleInputChange} className="form-control form-control-sm" value={this.state.first_name} id="profileInputFirstName" placeholder="First name"/>
                </div>
              </div>
              
              <div className="form-group row">
                <label htmlFor="profileInputLastName" className="col-sm-2 col-form-label">Last name</label>
                <div className="col-sm-6">
                    <input type="text" name="last_name" onChange={this.handleInputChange} className="form-control form-control-sm" value={this.state.last_name} id="profileInputLastName" placeholder="Last name"/>
                </div>
              </div>
              
              <div className="form-group row">
                <label htmlFor="profileInputOtherNames" className="col-sm-2 col-form-label">Other names</label>
                <div className="col-sm-6">
                    <input type="text" name="other_names" onChange={this.handleInputChange} className="form-control form-control-sm" value={this.state.other_names||""} id="profileInputOtherNames" placeholder="Other names"/>
                </div>
              </div>
              
              <div className="form-group row">
                <label htmlFor="profileInputJobTitle" className="col-sm-2 col-form-label">Job title</label>
                <div className="col-sm-6">
                    <input type="text" name="job_title" onChange={this.handleInputChange} className="form-control form-control-sm" value={this.state.job_title || ""} id="profileInputJobTitle" placeholder="Job title"/>
                </div>
              </div>
              
              <div className="form-group row">
                <label htmlFor="profileInputPhoneNumber" className="col-sm-2 col-form-label">Phone number</label>
                <div className="col-sm-6">
                    <input type="text" name="phone_number" onChange={this.handleInputChange} className="form-control form-control-sm" value={this.state.phone_number || ""} id="profileInputPhoneNumber" placeholder="Phone number"/>
                </div>
              </div>
              
              <div className="form-group row">
                <label htmlFor="profileInputPassword1" className="col-sm-2 col-form-label">Password</label>
                <div className="col-sm-6">
                    <input type="password" className="form-control form-control-sm" id="profileInputPassword1" placeholder="Password"/>
                </div>
              </div>
              
              
              <div className="form-group row">
                <label htmlFor="staticAPIToken" className="col-sm-2 col-form-label">API Token</label>
                <div className="col-sm-6">
                    <input type="text" readOnly className="form-control-plaintext form-control-sm text-muted" id="staticAPIToken" value={this.state.token}/>
                    <small id="emailHelp" className="form-text text-muted">Use this to access the REST API.</small>
                </div>
              </div>
              

              <button type="submit" className="btn btn-primary btn-sm">Update</button>
            </form>  
            
                </div>
            </div>
        </div>
        );
    }
}

function mapStateToProps(state) {
  return {
    userDetails: state.session.userDetails,
    updating: state.profile.updating,
    updateError: state.profile.updateError
  }
}

export default connect(mapStateToProps)(UserProfile);